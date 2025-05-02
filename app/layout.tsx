import "./globals.css";
import {Albert_Sans ,Montserrat_Alternates} from "next/font/google";
import Link from "next/link"
import Navbar from "./components/NavBar";
const alberSans = Albert_Sans({
  subsets:["latin"],
  display:"swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets:["latin"],
  display:"swap",
  weight:["400","500","600","700"],
  variable: "--font-montserrat-alternates"
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alberSans.className} md-relative ${montserratAlternates.variable}` }>
      <Navbar />
        {children}

        <footer className="flex items-center justify-center px-6 py-4 bg-gray-800 text-white"> Footer Contaoes here </footer>
      </body>
    </html>
  );
}
