import "./globals.css";
import {Albert_Sans ,Montserrat_Alternates} from "next/font/google";
import Link from "next/link"
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
        <header>
          <nav className="flex items-center justify-between px-6 py-4 bg-white-800">
          <div className="relative">
              {/* Desktop logo */}
              <Link href="/">
              <img
                src="/logo_big.png"
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile logo */}
              <img
                src="/logo_small.png"
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
              />
              </Link>

            </div>
           
            <ul className="flex space-x-4 uppercase">
              <li>
                <Link href="/3d-models" className="text-[#606060] hover:text-[#F77429] font-semibold">3D Models</Link>
              </li>
              <li>
                <Link href="/about" className="text-[#606060] hover:text-[#F77429] font-semibold">About</Link>
              </li>
            </ul>
          </nav>

        </header>
        {children}

        <footer className="flex items-center justify-center px-6 py-4 bg-gray-800 text-white"> Footer Contaoes here </footer>
      </body>
    </html>
  );
}
