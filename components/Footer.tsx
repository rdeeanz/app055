import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 px-4 border-t border-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          File Proyek Anda Terlalu Berharga untuk Dipertaruhkan
        </h3>
        <p className="text-slate-400 mb-8">
          Setiap hari Anda pakai AutoCAD bajakan, Anda sedang berjudi dengan pekerjaan sendiri.
        </p>
        
        <button 
          onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          🔥 Amankan AutoCAD Saya Sekarang
        </button>

        <div className="mt-12 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Official License Partner. All rights reserved.</p>
          <p className="mt-2">Disclaimer: AutoCAD is a registered trademark of Autodesk, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;