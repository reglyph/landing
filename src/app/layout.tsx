import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '../styles.css';
import React from 'react';

const JetBrains_Font = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '@reglyph/landing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${JetBrains_Font.variable} antialiased h-[100dvh] w-full`}
      >
        <div className={'absolute top-0 left-0 h-1.5 w-full'}>
          <div className={'w-[100%] absolute z-10 bg-black h-2.5'}></div>
          <div className={'w-[90%] absolute z-20 bg-black h-2.5'}></div>
          <div className={'w-[80%] absolute z-20 bg-black h-2.5'}></div>
          <div className={'w-[70%] absolute z-20 bg-[#0F0F0F] h-2.5'}></div>
          <div className={'w-[60%] absolute z-20 bg-[#232323] h-2.5'}></div>
          <div className={'w-[50%] absolute z-20 bg-[#373737] h-2.5'}></div>
          <div className={'w-[40%] absolute z-20 bg-[#696969] h-2.5'}></div>
          <div className={'w-[30%] absolute z-20 bg-[#9B9B9B] h-2.5'}></div>
          <div className={'w-[20%] absolute z-20 bg-[#CDCDCD] h-2.5'}></div>
          <div className={'w-[10%] absolute z-20 bg-white h-2.5'}></div>
        </div>

        {children}
      </body>
    </html>
  );
}
