import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Penta Publish",
  description: "Five AdSense-ready Indian information sites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
