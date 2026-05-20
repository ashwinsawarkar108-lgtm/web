import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEDxMIS Tampines Youth",
  description: "Official event website for TEDxMIS Tampines Youth",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
