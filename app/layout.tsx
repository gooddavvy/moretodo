import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export let metadata: Metadata = {
  title: "Moretodo",
  description:
    "There's always something more to do. ⚡ Moretodo: The Ultimate Todo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <Header />
        {children}
      </body>
    </html>
  );
}
