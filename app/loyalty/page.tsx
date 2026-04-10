import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Percent, Fuel, Droplets, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Программа лояльности",
};

export default function LoyaltyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-black mb-8">
        Программа лояльности
      </h1>

      <p className="text-gray-700 leading-relaxed mb-10 max-w-2xl">
        На наших АЗС мы часто проводим акции для наших клиентов. Акции проводятся
        и на топливо и на сопутствующие товары и услуги. Следите за информацией на
        нашем сайте. Приезжайте к нам на АЗС.
      </p>

      {/* Card Zazhigay */}
      <div className="bg-gradient-to-br from-brand to-brand-dark rounded-2xl text-white p-8 md:p-12 mb-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
            <CreditCard className="w-12 h-12" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              Карта «Зажигай»
            </h2>
            <p className="text-white/80 leading-relaxed">
              Получите скидки на топливо и автомойку с бонусной картой «Зажигай».
              Привлекательные цены и приятные бонусы для постоянных клиентов.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
            <Percent className="w-6 h-6 text-brand" />
          </div>
          <h3 className="font-bold mb-2">Скидки на топливо</h3>
          <p className="text-sm text-gray-500">
            Специальные цены на все виды топлива для держателей карты
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
            <Droplets className="w-6 h-6 text-brand" />
          </div>
          <h3 className="font-bold mb-2">Скидки на мойку</h3>
          <p className="text-sm text-gray-500">
            До 50% скидки на автомойку с картой «Зажигай»
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
            <Fuel className="w-6 h-6 text-brand" />
          </div>
          <h3 className="font-bold mb-2">Акции</h3>
          <p className="text-sm text-gray-500">
            Регулярные акции на заправку и сопутствующие товары
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/stations"
          className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-colors"
        >
          Найти ближайшую АЗС
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
