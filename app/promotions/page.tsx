import type { Metadata } from "next";
import Link from "next/link";
import { Bell, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Акции",
};

export default function PromotionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-black mb-8">Акции</h1>

      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
          <Bell className="w-10 h-10 text-brand" />
        </div>
        <h2 className="text-xl font-bold text-gray-700 mb-3">
          Следите за нашими акциями
        </h2>
        <p className="text-gray-500 max-w-md mb-8">
          На наших АЗС мы часто проводим акции для наших клиентов. Акции
          проводятся и на топливо и на сопутствующие товары и услуги. Следите за
          информацией на нашем сайте.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/loyalty"
            className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors"
          >
            Программа лояльности
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/stations"
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Найти АЗС
          </Link>
        </div>
      </div>
    </div>
  );
}
