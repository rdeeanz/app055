import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Pilihan Anda Sangat Jelas
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-slate-400 font-medium border-b border-slate-700 w-1/3">Fitur / Risiko</th>
                <th className="p-4 text-red-400 font-bold border-b border-slate-700 bg-red-900/10 text-center w-1/3">
                  AutoCAD Bajakan
                </th>
                <th className="p-4 text-green-400 font-bold border-b border-slate-700 bg-green-900/10 text-center w-1/3">
                  AutoCAD Resmi
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, index) => (
                <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 text-slate-200 font-medium">{row.feature}</td>
                  <td className="p-4 text-red-300 text-center bg-red-900/5">
                    <div className="flex items-center justify-center gap-2">
                      <X size={16} /> {row.pirated}
                    </div>
                  </td>
                  <td className="p-4 text-green-300 font-bold text-center bg-green-900/5">
                    <div className="flex items-center justify-center gap-2">
                      <Check size={16} /> {row.official}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-white">
            Murah di awal <span className="text-red-500">≠</span> Murah di akhir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;