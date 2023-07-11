import Link from "next/link"
import Image from "next/image"
import {footerLinks} from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-slate-800 border-t border-gray-100 mt-5 ">
      <div className="flex flex-wrap max-md:flex-col justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image 
            src="/logo.svg"
            width={118}
            height={18}
            alt="footer logo"
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <ul className="flex flex-col sm:gap-6 gap-3 sm:text-[16px] text-[12px] ">
                {link.links.map((singleLink) => (
                  <li><Link href={singleLink.url}> {singleLink.title} </Link></li>
                ))}
            </ul>
            </div>
          ))}
        </div>
      </div>
 
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 CarHub. All rights reserved.</p>

          <div className="flex-1 flex w-full sm:justify-end justify-center  max-sm:mt-4 gap-10">
              <Link href="/" className="text-gray-500">Privacy & Policy</Link>
              <Link href="/" className="text-gray-500">Terms & Conditions</Link>
          </div>
      </div>
    </footer>
  )
}

export default Footer