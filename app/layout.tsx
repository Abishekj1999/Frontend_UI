import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nila OTT",
  description: "Nila OTT - Movies, Series, Microdrama, Live TV",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
