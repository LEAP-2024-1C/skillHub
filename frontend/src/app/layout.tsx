import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { Geologica } from "next/font/google";
import { AuthProvider } from "@/context/AuthProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const geologica = Geologica({
  subsets: ["cyrillic"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geologica.className}>
      <body className={`antialiased`}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
