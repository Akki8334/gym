import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause, Flame } from 'lucide-react';

export const AudioPlayerWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const stepRef = useRef<number>(0);

  // Play synthetic drumline snare & 808 kick beat using Web Audio API
  const playDrumSound = (type: 'kick' | 'snare' | 'hihat' | 'rim') => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;

    if (type === 'kick') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.25);
      gain.gain.setValueAtTime(volume * 1.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'snare') {
      // Noise burst for snare
      const bufferSize = ctx.sampleRate * 0.15;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 800;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(volume * 0.8, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
      noise.stop(now + 0.15);

      // Snare tone body
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.1);
      oscGain.gain.setValueAtTime(volume * 0.4, now);
      oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'hihat') {
      const bufferSize = ctx.sampleRate * 0.04;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 5000;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(volume * 0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
      noise.stop(now + 0.04);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      setIsPlaying(true);
      stepRef.current = 0;

      // 130 BPM cadence (approx 115ms per 16th note)
      const stepMs = 120;
      intervalRef.current = window.setInterval(() => {
        const step = stepRef.current % 16;
        // Drumline 16-step rhythm pattern
        // Step 0: Kick
        // Step 2: Hihat
        // Step 4: Snare
        // Step 6: Hihat
        // Step 8: Kick
        // Step 10: Kick & Hihat
        // Step 12: Snare (Roll)
        // Step 14: Hihat
        if (step === 0 || step === 8 || step === 10) {
          playDrumSound('kick');
        }
        if (step === 4 || step === 12 || step === 13 || step === 15) {
          playDrumSound('snare');
        }
        if (step % 2 === 0) {
          playDrumSound('hihat');
        }

        stepRef.current += 1;
      }, stepMs);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <div className="bg-[#111116]/95 border border-[#262634] rounded-full p-2 pl-3 shadow-2xl flex items-center gap-2.5 backdrop-blur-md text-white text-xs">
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 group cursor-pointer"
          title={isPlaying ? 'Pause Gym Drumline Hype' : 'Play E.F.F.E.C.T. Drumline Hype Beat'}
          aria-label="Toggle Drumline Beat"
        >
          <div className={`p-2 rounded-full transition-colors ${isPlaying ? 'bg-[#E52328] text-white animate-pulse' : 'bg-zinc-800 text-zinc-300 group-hover:text-white'}`}>
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
          </div>

          <div className="flex flex-col text-left pr-1">
            <span className="font-condensed uppercase tracking-wider text-[10px] text-[#E52328] font-bold flex items-center gap-1">
              <Flame className="w-2.5 h-2.5 fill-[#E52328]" />
              Drumline Rhythm
            </span>
            <span className="text-[11px] text-zinc-300 font-semibold">
              {isPlaying ? 'HBCU Hype Playing' : 'Experience Gym Vibe'}
            </span>
          </div>
        </button>

        {/* Equalizer animation bars */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-4 px-1">
            <span className="w-1 bg-[#E52328] h-full animate-[bounce_0.6s_infinite_ease-in-out]" />
            <span className="w-1 bg-white h-3/4 animate-[bounce_0.8s_infinite_ease-in-out]" />
            <span className="w-1 bg-[#E52328] h-full animate-[bounce_0.5s_infinite_ease-in-out]" />
            <span className="w-1 bg-zinc-400 h-2/4 animate-[bounce_0.7s_infinite_ease-in-out]" />
          </div>
        )}
      </div>
    </div>
  );
};
