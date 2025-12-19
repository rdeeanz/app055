import React from 'react';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Profesional Berbicara
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
            <Quote className="absolute top-4 right-4 text-slate-700 opacity-50" size={48} />
            <p className="text-slate-300 text-lg mb-6 italic relative z-10">
              "Sejak pakai AutoCAD resmi, file tidak pernah corrupt lagi. Kerja jadi tenang, klien juga lebih percaya karena saya bisa buka file mereka tanpa masalah."
            </p>
            <div>
              <p className="text-white font-bold">Budi Santoso</p>
              <p className="text-sm text-slate-500">Arsitek Senior</p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
            <Quote className="absolute top-4 right-4 text-slate-700 opacity-50" size={48} />
            <p className="text-slate-300 text-lg mb-6 italic relative z-10">
              "Awalnya mikir mahal. Tapi setelah hitung biaya risiko kalau proyek hilang, ini jauh lebih murah. Supportnya juga mantap."
            </p>
            <div>
              <p className="text-white font-bold">PT. Konstruksi Jaya</p>
              <p className="text-sm text-slate-500">Kontraktor Sipil</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-slate-800 pt-8">
          <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold mb-6">Partner Terpercaya</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
             {/* Text placeholders for logos to avoid external image dependencies breaking */}
             <span className="text-2xl font-black text-slate-300">AUTODESK</span>
             <span className="text-2xl font-black text-slate-300">CERTIFIED</span>
             <span className="text-2xl font-black text-slate-300">RESELLER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;