import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "История компании",
};

const sidebar = [
  { label: "История", href: "/about", active: true },
  {
    label: "Карьера",
    href: "http://ulzg.ru/services/",
    external: true,
  },
  {
    label: "Контакты",
    href: "http://ulzg.ru/contacts/",
    external: true,
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-56 shrink-0">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-3">
            О компании
          </h3>
          <nav className="space-y-1">
            {sidebar.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-brand text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl font-black mb-8">История</h1>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Компания «Ульяновскцентргаз» имеет более чем 50-ти летнюю историю
              работы на рынке продаж газовых ресурсов.
            </p>
            <p>
              На сегодняшний день «Ульяновскцентргаз» — динамично развивающаяся
              топливная компания, осуществляющая оптовую и розничную продажу не
              только газа, но и топлива всех марок высокого качества, а так же
              товаров народного потребления на современных автозаправочных
              комплексах, обладающая тремя резервуарными парками для хранения и
              отпуска пропано-бутановой смеси в городах Ульяновск, Инза и рабочем
              поселке Новоспасское.
            </p>
            <p>
              В 2015 году компания «Ульяновскцентргаз» запустила на рынок новый
              бренд — современную сеть АЗС «УЦГ», состоящую из 26
              многотопливных комплексов с кафе, магазинами, автомойками и СТО.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-12 border-l-2 border-brand/20 pl-8 space-y-8">
            <div className="relative">
              <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-brand" />
              <div className="text-sm text-brand font-bold">~1965</div>
              <div className="text-gray-700 mt-1">
                Начало работы на рынке продаж газовых ресурсов
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-brand" />
              <div className="text-sm text-brand font-bold">2004</div>
              <div className="text-gray-700 mt-1">
                Регистрация ООО «Ульяновскцентргаз»
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-brand" />
              <div className="text-sm text-brand font-bold">2015</div>
              <div className="text-gray-700 mt-1">
                Запуск нового бренда — сети АЗС «УЦГ»
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-brand" />
              <div className="text-sm text-brand font-bold">Сегодня</div>
              <div className="text-gray-700 mt-1">
                26 многотопливных комплексов по Ульяновску и области
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
