import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "История", href: "/about" },
  { label: "Топливо", href: "/services/fuel" },
  { label: "Автомойка", href: "/services/car-wash" },
  { label: "Магазин и кафе", href: "/services/shop-cafe" },
  { label: "Акции", href: "/promotions" },
  { label: "Программа лояльности", href: "/loyalty" },
  { label: "Карта заправок", href: "/stations" },
  { label: "Персональные данные", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">У</span>
              </div>
              <div>
                <span className="font-black text-xl text-white">
                  АЗС «УЦГ»
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Сеть АЗС «УЦГ» — 26 заправок города Ульяновска и области. Высокие
              стандарты качества продукции и сервиса.
            </p>
            <a
              href="https://vk.com/azs73"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.049-2.763-5.339-2.763-5.814 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.318c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.644v3.49c0 .373.17.508.271.508.22 0 .407-.135.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.644-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.72-.576.72z" />
              </svg>
              Мы во ВКонтакте
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+78422354071"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand shrink-0" />
                  <span className="text-sm">+7 (8422) 35-40-71</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+78422350701"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand shrink-0" />
                  <span className="text-sm">
                    +7 (8422) 35-07-01
                    <span className="text-gray-500 ml-1">(справки)</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:azs@ulzg.ru"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand shrink-0" />
                  <span className="text-sm">azs@ulzg.ru</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span className="text-sm">
                  г. Ульяновск, ул. Автомобилистов, 17
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-xs">
          © 2015, АЗС «УЦГ». Все права защищены.
        </div>
      </div>
    </footer>
  );
}
