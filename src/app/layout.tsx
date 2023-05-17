"use client";
import "../../styles/global.scss";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Oddbit</title>
      </head>
      <body className={inter.className}>
        <div>
          <AnimatePresence onExitComplete={handleExitComplete} mode="wait">
            {children}
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
