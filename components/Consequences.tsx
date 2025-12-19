import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CHART_DATA } from '../constants';

const Consequences: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Harga AutoCAD Resmi JAUH LEBIH MURAH
          </h2>
          <p className="text-xl text-red-500 font-semibold">
            ...daripada Kehilangan 1 Proyek Besar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-80 w-full bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {CHART_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-slate-500 mt-2">*Ilustrasi perbandingan risiko finansial</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white border-b border-slate-700 pb-4">
              Konsekuensi Fatal:
            </h3>
            <ul className="space-y-4">
              {[
                "File rusak = kerja ulang dari nol (Lembur tanpa bayaran)",
                "Deadline molor = klien kabur & minta refund",
                "Reputasi profesional hancur selamanya",
                "Risiko audit software & denda ratusan juta",
                "Tidak ada support. Tidak ada tanggung jawab."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <span className="text-red-500 font-bold text-xl">❌</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-red-900/20 border-l-4 border-red-600 p-4 mt-6">
              <p className="text-red-200 italic font-medium">
                "AutoCAD bajakan tidak pernah peduli dengan karier Anda."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consequences;