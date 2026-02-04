import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '../styles.css';
import React from 'react';

const JetBrains_Font = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
});

const base = new URL('https://reglyph.dev');

export const metadata: Metadata = {
  title: {
    default: '@reglyph - an open-source UI Kit',
    template: '%s | Reglyph',
  },

  description:
    'An open-source UI kit currently under active development by a team of enthusiasts committed to building high-quality products.',

  applicationName: 'Reglyph',
  keywords: [
    'reglyph',
    'ui kit',
    'design system',
    'react',
    'components',
    'web',
    'accessibility',
    'theming',
    'developer tooling',
  ],

  authors: [
    {
      name: 'Reglyph Team',
      url: 'https://reglyph.dev',
    },
  ],
  creator: 'Reglyph',
  publisher: 'Reglyph',

  metadataBase: base,

  alternates: {
    canonical: new URL('/', base).toString(),
    languages: {
      'en-US': '/en',
    },
  },

  manifest: new URL('/manifest.json', base).toString(),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: base.toString(),
    siteName: 'Reglyph',
    title: '@reglyph - an open-source UI Kit',
    description:
      'An open-source UI kit currently under active development by a team of enthusiasts committed to building high-quality products.',
    images: [
      {
        url: new URL('/reglyph-og.jpg', base).toString(),
        width: 1200,
        height: 630,
        alt: 'Reglyph — UI Kit preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '@reglyph - open-source UI Kit',
    description:
      'An open-source UI kit currently under active development by a team of enthusiasts committed to building high-quality products.',
    images: [new URL('/reglyph-og.jpg', base).toString()],
    creator: '@reglyph',
  },

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    googleBot: {
      'index': true,
      'follow': true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  category: 'web-development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-K36THHKG');`,
          }}
        />
      </head>
      <body
        className={`${JetBrains_Font.variable} antialiased h-screen w-full`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K36THHKG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
