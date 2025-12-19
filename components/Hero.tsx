import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden pt-20 pb-16 px-4">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 via-slate-900 to-black"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500 text-red-500 px-4 py-1 rounded-full mb-6 animate-pulse">
          <AlertTriangle size={16} />
          <span className="text-sm font-bold uppercase tracking-wider">Peringatan Keras Untuk Profesional</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 glitch-text" data-text="Satu Crash AutoCAD Bisa Menghapus Berbulan-bulan Pekerjaan Anda">
          Satu <span className="text-red-600">Crash AutoCAD</span> Bisa Menghapus Berbulan-bulan Pekerjaan Anda
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-light">
          AutoCAD bajakan adalah <span className="font-bold text-white bg-red-600 px-1">bom waktu</span>. 
          File bisa rusak kapan saja, tidak bisa dibuka klien, dan Anda tidak bisa menyalahkan siapa pun.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <ShieldAlert size={24} />
            🔴 Amankan File Proyek Saya Sekarang
          </button>
        </div>

        <p className="mt-4 text-slate-400 text-sm italic">
          Tanpa risiko legal. Tanpa file corrupt. Tanpa drama.
        </p>
      </div>
    </section>
  );
};

export default Hero;