/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Play,
  X
} from 'lucide-react';
import { CONFIG } from './constants';

export default function App() {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextMedia = () => {
    setActiveMediaIndex((prev) => (prev + 1) % CONFIG.product.media.length);
  };

  const prevMedia = () => {
    setActiveMediaIndex((prev) => (prev - 1 + CONFIG.product.media.length) % CONFIG.product.media.length);
  };

  const handleOrderClick = () => {
    window.open(CONFIG.googleSheetLink, '_blank');
  };

  const handleWhatsAppClick = () => {
    const encodedMsg = encodeURIComponent(CONFIG.whatsappMessage);
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden selection:bg-gold-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center font-bold text-neutral-950">
              M
            </div>
            <span className="text-xl font-bold tracking-tighter text-glow">
              {CONFIG.storeName}
            </span>
          </div>
          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 text-sm font-medium hover:text-gold-400 transition-colors"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">সহায়তা</span>
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left: Media Section */}
        <section className="space-y-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card group"
          >
            <AnimatePresence mode="wait">
              {CONFIG.product.media[activeMediaIndex].type === 'image' ? (
                <motion.img
                  key={CONFIG.product.media[activeMediaIndex].url}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  src={CONFIG.product.media[activeMediaIndex].url}
                  alt={CONFIG.product.media[activeMediaIndex].label}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-900 flex items-center justify-center relative">
                    <img 
                      src={CONFIG.product.media[0].url} 
                      className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm"
                      alt="video-bg"
                    />
                    <button 
                      onClick={() => setShowVideo(true)}
                      className="relative z-10 w-20 h-20 bg-gold-500 text-neutral-950 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                    >
                      <Play fill="currentColor" size={32} />
                    </button>
                    <p className="absolute bottom-10 text-gold-400 font-medium uppercase tracking-widest text-xs">ভিডিও দেখুন</p>
                </div>
              )}
            </AnimatePresence>

            {/* Media Navigation controls */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={prevMedia}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextMedia}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {CONFIG.product.media.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === activeMediaIndex ? 'w-8 bg-gold-500' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {CONFIG.product.media.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMediaIndex(idx)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${idx === activeMediaIndex ? 'border-gold-500' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                {item.type === 'image' ? (
                  <img src={item.url} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                    <Play size={16} className="text-gold-400" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Right: Content Section */}
        <section className="space-y-8">
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="space-y-4"
          >
            <h2 className="text-gold-500 font-medium tracking-widest uppercase text-sm">স্বাগতম মারভেল শপে</h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {CONFIG.product.name}
            </h1>
            
            <div className="flex items-baseline gap-4 mt-6">
              <span className="text-4xl font-bold text-gold-400">
                {CONFIG.product.currency}{CONFIG.product.discountedPrice}
              </span>
              <span className="text-xl text-neutral-500 line-through decoration-gold-500/50">
                {CONFIG.product.currency}{CONFIG.product.regularPrice}
              </span>
              <span className="bg-gold-500/10 text-gold-500 px-3 py-1 rounded-full text-xs font-bold border border-gold-500/20 uppercase tracking-tighter">
                সীমিত সময়ের অফার
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="h-px bg-white/10 w-full" />
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">পণ্যের বিবরণ:</h3>
              <ul className="space-y-3">
                {CONFIG.product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-300">
                    <CheckCircle2 className="text-gold-500 shrink-0 mt-1" size={18} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-white/10 w-full" />
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleOrderClick}
                className="w-full bg-gold-500 hover:bg-gold-400 text-neutral-950 font-bold py-5 rounded-2xl flex items-center justify-center gap-3 text-xl shadow-[0_10px_30px_rgba(212,139,29,0.3)] transition-all group"
              >
                <ShoppingBag size={24} />
                অর্ডার করতে ক্লিক করুন
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="w-full border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-bold py-5 rounded-2xl flex items-center justify-center gap-3 text-xl transition-all"
              >
                <MessageCircle size={24} />
                হোয়াটসঅ্যাপে যোগাযোগ করুন 01611111989
              </motion.button>
            </div>
          </motion.div>
          
          <p className="text-center text-neutral-500 text-sm italic">
            * বাংলাদেশের সবজায়গায় ডেলিভারি সুবিধা আছে ।
          </p>
        </section>
      </main>

      {/* Footer Branding */}
      <footer className="mt-20 py-12 border-t border-white/5 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-glow italic">
            MARVELLE
          </h2>
          <p className="text-neutral-500 text-sm max-w-md mx-auto leading-relaxed">
            আমরা দিচ্ছি সেরা কোয়ালিটির লাক্সারি কালেকশন । স্টাইলিশ হোন মারভেল শপের সাথে ।
          </p>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 text-white hover:text-gold-500"
            >
              <X size={32} />
            </button>
            <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden glass-card shadow-2xl">
              <video 
                src={CONFIG.product.media.find(m => m.type === 'video')?.url} 
                controls 
                autoPlay 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

