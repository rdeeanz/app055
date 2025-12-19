import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-20 bg-gradient-to-b from-slate-900 to-red-950 px-4">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border-2 border-red-600 shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Jangan Tunggu File Anda Rusak Baru Menyesal
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Dapatkan Lisensi AutoCAD Resmi dengan Full Support.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-lg mx-auto mb-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="text-green-500" /> Cocok untuk Individu
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="text-green-500" /> Cocok untuk Perusahaan
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="text-green-500" /> Bantuan Aktivasi
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="text-green-500" /> Konsultasi Gratis
              </div>
            </div>
          </div>

          <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-5 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-3 mx-auto">
            🟢 Beralih ke AutoCAD Resmi Sekarang <ArrowRight />
          </button>
          
          <p className="mt-6 text-slate-500 text-sm">
            Garansi uang kembali jika lisensi tidak valid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;