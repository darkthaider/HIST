// import "../scss/global.scss";
import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";

const anek_Devanagari = Anek_Devanagari({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HIST",
  description: "Modern Strategists of Distribution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-hist_black ${anek_Devanagari.className}`}>
        {children}
      </body>
    </html>
  );
}
