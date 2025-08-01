// components/Footer.tsx
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#DEDEDE] text-black py-2 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Villa Merah Logo"
            width={70}
            height={70}
          />
        </div>

        {/* Sosial Media */}
        <div className="text-sm text-center md:text-left">
          <p className="font-semibold mb-1">Follow us</p>
          <p>@bimbelgambar_villamerah</p>
        </div>

        {/* Kontak */}
        <div className="text-sm text-center md:text-left">
          <p className="font-semibold mb-1">Contact us</p>
          <p>+62 8765431298</p>
          <p>bimbelVillaMerah@gmail.com</p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col text-xs text-center md:text-right mt-4 md:mt-0">
          <br></br>
          <br></br>
          <br></br>
          <p>©2025 Bimbel gambar Seni Rupa Desain dan Arsitektur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
