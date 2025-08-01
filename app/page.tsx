import { Reddit_Mono } from 'next/font/google';

const redditMono = Reddit_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Sesuaikan dengan kebutuhan
});

import Navbar from './component/navbar'; // pastikan path ini benar
import Footer from './component/footer';
import "./globals.css"

export default function Home() {
  return (
    <div className="flex flex-col justify-between home min-h-screen">
      <Navbar colour='text-white' />

      {/* Tambahkan padding-top setara tinggi navbar */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-10 space-y-6 pt-30">
        <h2 className={`text-[14px] sm:text-[20px] md:text-[50px] lg:text-[30px] tracking-[0.7em] text-white ${redditMono.className}`}>
          SELAMAT DATANG DI
        </h2>
        ,<br />
        <h1 className={`text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px] font-bold text-[#F13B3B] leading-tight ${redditMono.className}`}>
          BIMBINGAN BELAJAR<br />VILLA MERAH
        </h1>
        <p className={`text-sm sm:text-base text-white max-w-2xl ${redditMono.className}`}>
          Villa Merah adalah lembaga bimbingan belajar (bimbel) khusus seni rupa, desain, dan arsitektur yang berlokasi di Bandung.
          Bimbel ini dikenal luas sebagai tempat persiapan masuk Fakultas Seni Rupa dan Desain (FSRD) ITB, Arsitektur UNPAR,
          serta perguruan tinggi seni lainnya di Indonesia.
        </p>
      </main>

      <Footer />
    </div>
  );
}
