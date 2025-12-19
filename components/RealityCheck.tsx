import React from 'react';
import { XCircle } from 'lucide-react';

const RealityCheck: React.FC = () => {
  const pains = [
    "AutoCAD tiba-tiba force close saat deadline",
    "File DWG corrupt & tidak bisa dibuka",
    "Muncul error 'Licensing Error' yang tidak bisa di-skip",
    "File klien berbeda versi & tidak kompatibel",
    "Proyek harus diulang dari awal (Kerja Rodi)"
  ];

  return (
    <section className="py-20 bg-slate-800 px-4 border-t border-slate-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          <span className="text-slate-400 block text-lg font-normal mb-2">Reality Check</span>
          INI TERJADI SETIAP HARI
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {pains.map((pain, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-red-500/50 transition-colors">
                <XCircle className="text-red-500 shrink-0 mt-1" />
                <p className="text-slate-200 font-medium">{pain}</p>
              </div>
            ))}
          </div>
          <div className="text-center md:text-left md:pl-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Masalahnya bukan skill Anda.
            </h3>
            <p className="text-xl text-slate-300 mb-6">
              Masalahnya: Anda mempertaruhkan karier dengan memakai <span className="text-red-500 font-bold underline decoration-wavy">AutoCAD bajakan</span>.
            </p>
            <div className="h-1 w-20 bg-red-600 rounded mx-auto md:mx-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;