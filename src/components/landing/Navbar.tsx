"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";

const navLinks = [
  { label: "Producto", href: "#producto" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Integraciones", href: "#integraciones" },
  { label: "Precios", href: "#precios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#040514]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Elyna" width={100} height={38} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">{link.label}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Iniciar sesión</a>
          <a href="#" className="text-sm font-semibold bg-[var(--primary)] text-white px-5 py-2.5 rounded-[22px] hover:bg-[var(--primary-dark)] transition-colors">Prueba gratis</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-white/5 bg-[#040514]/95 backdrop-blur-xl">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-gray-300 hover:text-white transition-colors">{link.label}</a>
              ))}
              <hr className="border-white/10" />
              <a href="#" className="text-gray-300 hover:text-white">Iniciar sesión</a>
              <a href="#" className="text-center font-semibold bg-[var(--primary)] text-white px-5 py-2.5 rounded-[22px]">Prueba gratis</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
