/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import LogoImage from '../logo.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Star, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Award,
  Twitter,
  Instagram,
  Trophy,
  Activity
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TELEGRAM_LINK = "https://t.me/+_m6CEEiz2rM5OTdl";
const LOGO_IMAGE = LogoImage; 

const BAR_DATA = [
  { value: 40 },
  { value: 60 },
  { value: 80 },
  { value: 100 },
  { value: 70 },
];

const INITIAL_PROFIT_DATA = [
  { time: '10:00', profit: 1200 },
  { time: '10:05', profit: 1800 },
  { time: '10:10', profit: 1500 },
  { time: '10:15', profit: 2400 },
  { time: '10:20', profit: 2100 },
  { time: '10:25', profit: 3200 },
  { time: '10:30', profit: 2800 },
];

export default function App() {
  const kpis = useMemo(() => {
    const totalMatches = Math.floor(Math.random() * (96000 - 52000 + 1)) + 52000;
    const winningAccuracy = Math.floor(Math.random() * (94 - 78 + 1)) + 78;
    const rating = (Math.random() * (5.0 - 4.2) + 4.2).toFixed(1);

    return [
      { label: 'Total Matches', value: totalMatches.toLocaleString('en-IN') },
      { label: 'Winning Accuracy', value: `${winningAccuracy}%` },
      { label: 'Rating', value: `${rating}★` },
    ];
  }, []);

  return (
    <div className="h-screen bg-[#0a100d] text-stone-100 selection:bg-[#f59e0b]/25 font-sans overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fef3c7 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="min-h-full max-w-lg mx-auto flex flex-col items-center justify-start p-4 py-8 md:p-8 gap-8 relative z-10 w-full">
        
        {/* Left Section: Profile & Identity */}
        <div className="flex flex-col items-center justify-center w-full space-y-4 md:space-y-6 flex-shrink-0">
          {/* Profile Image with Vibrant Ring */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="w-24 h-24 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-[#f59e0b] to-[#84cc16] shadow-[0_0_45px_rgba(245,158,11,0.32)] flex items-center justify-center">
              <div className="w-[94%] h-[94%] rounded-full border-4 border-[#0a100d] overflow-hidden bg-black">
                <img 
                  src={LOGO_IMAGE} 
                  alt="ASHU BOSS (CLUB WINNING 🏆)" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="absolute bottom-1 right-1 md:bottom-4 md:right-4 w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#22c55e] border-4 border-[#0a100d] shadow-[0_0_15px_rgba(34,197,94,0.58)] animate-pulse" />
            </div>
          </motion.div>

          {/* Title & Subtitle */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center space-y-1.5 md:space-y-3"
          >
            <h1 className="text-[clamp(1rem,5.2vw,2.25rem)] font-black text-white tracking-tight uppercase flex items-center justify-center gap-1.5 whitespace-nowrap leading-none">
              <span className="text-[clamp(0.9rem,4vw,1.8rem)]">🏏</span> ASHU BOSS (CLUB WINNING 🏆)
            </h1>
            <div className="flex items-center justify-center gap-2 text-[#f59e0b] font-black text-[10px] md:text-sm uppercase tracking-[0.2em]">
              <Users size={14} className="md:w-5 md:h-5" />
              <span>30K+ Active Members</span>
            </div>
          </motion.div>

          {/* Pill Badges */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-2 md:gap-4"
          >
            <div className="px-4 py-1.5 md:px-8 md:py-3 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[10px] md:text-sm font-black text-white flex items-center gap-2 md:gap-3 shadow-lg backdrop-blur-sm">
              <Trophy size={14} className="md:w-5 md:h-5 text-amber-300" />
              Latest Updates
            </div>
            <div className="px-4 py-1.5 md:px-8 md:py-3 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[10px] md:text-sm font-black text-white flex items-center gap-2 md:gap-3 shadow-lg backdrop-blur-sm">
              <Zap size={14} className="md:w-5 md:h-5 text-lime-300" />
              Live Action
            </div>
          </motion.div>
        </div>

        {/* Right Section: Stats & CTA */}
        <div className="w-full flex flex-col justify-start items-center space-y-6 md:space-y-8 overflow-visible">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 w-full">
            {kpis.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="bg-[#141b17]/70 border border-[#304338]/50 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-xl backdrop-blur-md group hover:border-[#f59e0b]/50 transition-colors"
              >
                <span className="text-xl md:text-3xl font-black text-white mb-1 tracking-tighter">{stat.value}</span>
                <span className="text-[9px] md:text-xs font-bold text-[#94a3b8] leading-tight uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Telegram CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full px-2 md:px-0"
          >
            <motion.a 
              href={TELEGRAM_LINK}
              className="w-full bg-gradient-to-r from-[#f59e0b] to-[#65a30d] text-[#1b1302] py-5 md:py-9 rounded-xl md:rounded-3xl font-black text-sm md:text-2xl shadow-[0_10px_40px_rgba(245,158,11,0.34)] flex items-center justify-center gap-2 md:gap-4 transition-all active:scale-[0.98] group relative overflow-hidden"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Send size={18} className="md:w-8 md:h-8 fill-[#1b1302]" />
              Join Telegram Channel
            </motion.a>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="w-full bg-[#141b17]/70 border border-[#304338]/50 rounded-xl md:rounded-2xl p-6 py-8 shadow-xl backdrop-blur-md"
          >
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {[
                { icon: CheckCircle2, label: "Verified", color: "text-stone-300" },
                { icon: ShieldCheck, label: "Secure", color: "text-stone-300" },
                { icon: TrendingUp, label: "Profitable", color: "text-[#f59e0b]" },
                { icon: Star, label: "Top Rated", color: "text-stone-300" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center space-y-2.5">
                  <item.icon size={26} className={cn("md:w-8 md:h-8", item.color)} strokeWidth={1.5} />
                  <span className="text-[10px] md:text-xs font-medium text-[#94a3b8] capitalize">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-3 pt-6 w-full"
          >
            <p className="text-[#8ca08f] text-[10px] md:text-xs font-medium tracking-wide">
              © 2026 ASHU BOSS (CLUB WINNING 🏆). All rights reserved.
            </p>
            <p className="text-[#c6d0cb] text-[10px] md:text-xs font-medium flex items-center gap-2">
              <span>🏏</span> Professional Cricket Analysis
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

