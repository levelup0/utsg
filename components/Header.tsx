"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MessageSquare, User, ChevronDown } from "lucide-react";
import FeedbackModal from "./FeedbackModal";

const navItems = [
  {
    label: "О компании",
    children: [
      { label: "История", href: "/about" },
      { label: "Карьера", href: "http://ulzg.ru/services/", external: true },
      { label: "Контакты", href: "http://ulzg.ru/contacts/", external: true },
    ],
  },
  {
    label: "Товары и услуги",
    children: [
      { label: "Топливо", href: "/services/fuel" },
      { label: "Автомойка", href: "/services/car-wash" },
      { label: "Магазин и кафе", href: "/services/shop-cafe" },
      { label: "Дополнительный сервис", href: "/services/additional" },
    ],
  },
  { label: "Акции", href: "/promotions" },
  { label: "Программа лояльности", href: "/loyalty" },
  {
    label: "Корпоративным клиентам",
    href: "http://ulzg.ru/clients/",
    external: true,
  },
  { label: "Карта заправок", href: "/stations" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg md:text-xl">У</span>
              </div>
              <div className="leading-tight">
                <span className="font-black text-xl md:text-2xl text-brand tracking-tight">
                  УЦГ
                </span>
                <span className="hidden sm:block text-xs text-gray-500">
                  Ульяновск Центр Газ
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+78422354071"
                className="flex items-center gap-2 text-dark hover:text-brand transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+7 (8422) 35-40-71</span>
              </a>
              <button
                onClick={() => setFeedbackOpen(true)}
                className="flex items-center gap-2 text-gray-600 hover:text-brand transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Обратная связь
              </button>
              <Link
                href="/login"
                className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors text-sm font-medium"
              >
                <User className="w-4 h-4" />
                Личный кабинет
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-dark"
              aria-label="Меню"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:block border-t border-gray-100">
            <ul className="flex gap-1">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children ? (
                    <button className="flex items-center gap-1 px-3 py-3 text-sm font-medium text-dark hover:text-brand transition-colors">
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-3 text-sm font-medium text-dark hover:text-brand transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block px-3 py-3 text-sm font-medium text-dark hover:text-brand transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && openDropdown === item.label && (
                    <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[220px] z-50 border border-gray-100">
                      {item.children.map((child) =>
                        child.external ? (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand transition-colors"
                            >
                              {child.label}
                            </a>
                          </li>
                        ) : (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-1">
              <a
                href="tel:+78422354071"
                className="flex items-center gap-2 px-3 py-2 text-dark"
              >
                <Phone className="w-4 h-4 text-brand" />
                <span className="font-semibold">+7 (8422) 35-40-71</span>
              </a>
              <hr className="my-2" />
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <p className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-6 py-2 text-sm text-gray-700 hover:text-brand"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-6 py-2 text-sm text-gray-700 hover:text-brand"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <hr className="my-2" />
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setFeedbackOpen(true);
                }}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600"
              >
                <MessageSquare className="w-4 h-4" />
                Обратная связь
              </button>
              <Link
                href="/login"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-brand"
                onClick={() => setMobileOpen(false)}
              >
                <User className="w-4 h-4" />
                Личный кабинет
              </Link>
            </div>
          </nav>
        )}
      </header>

      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  );
}
