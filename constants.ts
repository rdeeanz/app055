import { FAQItem, ComparisonRow } from './types';

export const FAQS: FAQItem[] = [
  {
    question: "Apakah file lama aman?",
    answer: "Ya. File Anda justru lebih aman di versi resmi. AutoCAD resmi memiliki kompatibilitas mundur yang sempurna, memastikan file lama Anda tidak rusak saat dibuka."
  },
  {
    question: "Apakah mahal?",
    answer: "Lebih murah dari kehilangan 1 klien. Bayangkan biaya reputasi yang hancur atau denda audit. Lisensi resmi adalah investasi perlindungan, bukan sekadar pengeluaran."
  },
  {
    question: "Apakah ada support?",
    answer: "Ya. Anda mendapatkan akses langsung ke tim teknis profesional, bukan forum bajakan yang tidak jelas dan berisiko malware."
  },
  {
    question: "Apakah proses aktivasinya rumit?",
    answer: "Tidak sama sekali. Kami membantu proses instalasi dan aktivasi hingga software siap digunakan 100% di perangkat Anda."
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: "Keamanan File", pirated: "Sering Corrupt / Crash", official: "Stabil & Aman" },
  { feature: "Update", pirated: "Tidak Ada (Berisiko)", official: "Update Resmi Rutin" },
  { feature: "Support Teknis", pirated: "Cari Sendiri di Google", official: "Support Profesional" },
  { feature: "Legalitas", pirated: "Ilegal / Risiko Denda", official: "100% Legal & Tenang" },
  { feature: "Biaya Jangka Panjang", pirated: "MAHAL (Hilang Proyek)", official: "Hemat (Investasi Aman)" },
];

export const CHART_DATA = [
  {
    name: 'Harga Lisensi',
    value: 15,
    fill: '#22c55e', // green
    label: 'Biaya Kecil'
  },
  {
    name: 'Kehilangan Proyek',
    value: 100,
    fill: '#ef4444', // red
    label: 'BENCANA'
  },
];