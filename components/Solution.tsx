import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, FileCheck, Scale, History } from 'lucide-react';

const Solution: React.FC = () => {
  const benefits = [
    { icon: ShieldCheck, title: "File Stabil & Anti Corrupt", desc: "Tidur nyenyak tanpa takut file error." },
    { icon: Zap, title: "Tidak Crash Tiba-tiba", desc: "Software berjalan mulus di hardware Anda." },
    { icon: FileCheck, title: "Kompatibel Penuh", desc: "Buka file klien manapun tanpa drama versi." },
    { icon: HeartHandshake, title: "Support Teknis Pro", desc: "Ada masalah? Tim ahli siap membantu." },
    { icon: Scale, title: "Bebas Risiko Hukum", desc: "100% legal, aman dari audit software." },
    { icon: History, title: "Update Resmi Rutin", desc: "Fitur terbaru selalu di tangan Anda." },
  ];

  return (
    <section className="py-20 bg-slate-900 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Satu-satunya Cara Aman Menggunakan AutoCAD
          </h2>
          <p className="text-lg text-slate-300">
            AutoCAD Resmi bukan soal "gengsi". <br />
            Ini soal <span className="text-green-400 font-bold">melindungi file, waktu, dan karier Anda.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;