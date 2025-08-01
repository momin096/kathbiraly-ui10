import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f1f3c] text-[#f5f7fa]">
      <div className="max-w-full px-6 md:px-12 lg:px-24 py-14">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Left block: Logo + Info + Socials */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-2 mb-3">
              {/* Replace with actual logo */}
              <div className="w-24 h-24">
                <img  src="/logo.png" alt="" />
              </div>
             
            </div>
            <p className="text-sm mb-4">
              Kathbiraly is a fastest growing ecommerce site in Bangladesh
            </p>
            <div className="flex flex-col gap-2 text-sm mb-5">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">📍</span>
                <span>House-30-32, Road-10, Sector-15, Uttara</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">📞</span>
                <span>+880 1328519407</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✉️</span>
                <span>info@kathbiraly.xyz</span>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center bg-[#1f2e55] rounded-full hover:bg-[#2a3d75] transition"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center bg-[#1f2e55] rounded-full hover:bg-[#2a3d75] transition"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center bg-[#1f2e55] rounded-full hover:bg-[#2a3d75] transition"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Middle blocks: Links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-sm uppercase mb-3 tracking-widest">
                Company Info
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition"
                  >
                    Our Customer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition"
                  >
                    Vouchers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition"
                  >
                    Get Discounts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-500 hover:underline"
                  >
                    License & Certification
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm uppercase mb-3 tracking-widest">
                Support
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition"
                  >
                    Return & Refund
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right block: Subscribe */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="font-semibold text-sm uppercase mb-3 tracking-widest">
              Don’t want to miss a single offer?
            </h3>
            <p className="text-sm text-[#9aa3b0] mb-3">
              Get the latest news and updates right at your inbox.
            </p>
            <div className="flex gap-2 flex-wrap">
              <div className="relative flex-1 min-w-[180px]">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-[#1f2e55] placeholder:text-[#9aa3b0] rounded-md py-3 px-4 pr-32 focus:outline-none shadow-sm"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#2e2e2e] px-5 py-2 rounded-md font-semibold text-white hover:brightness-110 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a3d75] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#9aa3b0]">
            © 2025 - <span className="text-amber-500">Kathbiraly</span> - Designed
            & Developed by <span className="font-semibold">A Company Name</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Payment icons: replace with real SVGs or images */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 bg-gradient-to-r from-[#eb001b] to-[#f79e1b] rounded-sm flex items-center justify-center text-[8px] font-bold text-white">
                MASTERCARD
              </div>
              <div className="w-8 h-5 bg-[#1e76ff] rounded-sm flex items-center justify-center text-[8px] font-bold text-white">
                VISA
              </div>
              <div className="w-8 h-5 bg-[#ec1c75] rounded-sm flex items-center justify-center text-[8px] font-bold text-white">
                bKash
              </div>
              <div className="w-8 h-5 bg-[#ff4f00] rounded-sm flex items-center justify-center text-[8px] font-bold text-white">
                Nagad
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
