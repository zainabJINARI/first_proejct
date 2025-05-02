import Link from "next/link"
import PFLogoIcon from "@/public/logo_small.png"
import PFLogo from "@/public/logo_big.png"
import Image from "next/image"

export default function Navbar() {
  return (
    <header>
    <nav className="flex items-center justify-between px-6 py-4 bg-white-800">
    <div className="relative">
        {/* Desktop logo */}
        <Link href="/">
        <Image src={PFLogo}  alt="PrintForge Logo"
          className="w-[200px] h-auto hidden md:block" />
        
        {/* Mobile logo */}
        <Image
          src={PFLogoIcon}
          alt="PrintForge Logo"
          className="w-[40px] h-auto absolute top-0 left-0 md:hidden"/>
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
  )
}