import '@/styles/globals.css'

// import localFont from 'next/font/local'

// const myFont = localFont({https://stijndv.com/fonts/Eudoxus-Sans.css})

export const metadata = {
  title: "metaverse",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
