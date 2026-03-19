import Image from "next/image";

const footerLinks = {
  Producto: [
    { label: "Asistentes de IA", href: "#" },
    { label: "Campañas", href: "#" },
    { label: "Automatización", href: "#" },
    { label: "Números telefónicos", href: "#" },
    { label: "API", href: "#" },
    { label: "WhatsApp API", href: "#" },
  ],
  Soluciones: [
    { label: "Ventas", href: "#" },
    { label: "Soporte al cliente", href: "#" },
    { label: "Inmobiliarias", href: "#" },
    { label: "Salud", href: "#" },
    { label: "Educación", href: "#" },
    { label: "Agencias", href: "#" },
  ],
  Recursos: [
    { label: "Documentación", href: "https://documentation.elyna.mx" },
    { label: "API Reference", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Status", href: "#" },
  ],
  Empresa: [
    { label: "Nosotros", href: "#" },
    { label: "Contacto", href: "https://elyna.mx/contact" },
    { label: "Precios", href: "#precios" },
    { label: "Términos", href: "#" },
    { label: "Privacidad", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--dark-border)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image src="/logo.svg" alt="Elyna" width={90} height={34} className="mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Automatiza tus llamadas telefónicas con inteligencia artificial.
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
            &copy; {new Date().getFullYear()} Elyna. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
