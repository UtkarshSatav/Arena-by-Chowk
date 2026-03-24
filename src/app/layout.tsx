import type { Metadata } from "next";
import SmoothScrolling from "./components/SmoothScrolling";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARENAA by CHOWK | India's Premier Highway Leisure Destination",
  description:
    "ARENAA by CHOWK is India's first integrated highway leisure destination combining a premium multi-cuisine food court, high-tech gaming zone, and landscaped open spaces. 23% annual ROI, 15% gross revenue share.",
  keywords:
    "ARENAA, CHOWK Entertainment, highway leisure, food court, gaming zone, investment, India, highway dining, entertainment hub",
  openGraph: {
    title: "ARENAA by CHOWK | Highway Leisure Destination",
    description:
      "India's first integrated highway leisure destination. Food + Gaming + Entertainment. 23% ROI, ₹11 Cr Capex.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
