"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";

export default function Footer() {
  const t = useTranslation();

  const footerLinks: Record<string, { label: string; href: string }[]> = {
    [t.footer.product]: t.footer.productLinks.map((label: string) => ({ label, href: "#" })),
    [t.footer.solutionsLabel]: t.footer.solutionLinks.map((label: string) => ({ label, href: "#" })),
    [t.footer.resources]: [
      { label: t.footer.resourceLinks[0], href: "https://documentation.elyna.mx" },
      ...t.footer.resourceLinks.slice(1).map((label: string) => ({ label, href: "#" })),
    ],
    [t.footer.company]: [
      { label: t.footer.companyLinks[0], href: "#" },
      { label: t.footer.companyLinks[1], href: "https://elyna.mx/contact" },
      { label: t.footer.companyLinks[2], href: "#precios" },
      { label: t.footer.companyLinks[3], href: "#" },
      { label: t.footer.companyLinks[4], href: "#" },
    ],
  };

  return (
    <footer className="border-t border-[var(--dark-border)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image src="/logo.svg" alt="Elyna" width={90} height={34} className="mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--dark-border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">
              {t.footer.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
