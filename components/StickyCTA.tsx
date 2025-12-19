import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-red-600 p-4 z-50 shadow-2xl animate-slideUp">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="hidden md:block">
          <p className="text-white font-bold text-lg">AutoCAD Resmi bukan biaya — tapi proteksi karier.</p>
        </div>
        <button 
          onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded shadow-lg whitespace-nowrap"
        >
          Amankan Lisensi Sekarang
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;