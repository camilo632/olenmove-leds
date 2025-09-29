import logo from "../../assets/logo.svg";
import { motion } from "framer-motion"; 

function Navbar() {
  return (
    <>
      {/* 🔝 Navbar */}
      <div className="fixed top-0 h-15 w-full px-5 py-2 flex justify-between items-center bg-slate-900/80 border-b border-slate-700 z-50"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <img src={logo} alt="logo" className="h-full" />

        {/* 🖥️ Desktop menu */}
        <ul className="md:flex gap-10 text-xl text-slate-300">
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <a href="https://auth.olenmove.com" target="_blank" rel="noopener noreferrer">
              Portal
            </a>
          </motion.li>
        </ul>

      </div>
    </>
  );
}

export default Navbar;
