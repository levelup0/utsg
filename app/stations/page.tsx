import type { Metadata } from "next";
import { stations } from "@/lib/stations";
import {
  MapPin,
  Fuel,
  Coffee,
  ShoppingBag,
  Droplets,
  Gauge,
  Wind,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Карта заправок",
};

export default function StationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-black mb-8">Карта заправок</h1>

      {/* Map placeholder */}
      <div className="bg-gray-100 rounded-2xl overflow-hidden mb-10 h-[400px] md:h-[500px] flex items-center justify-center relative">
        <div className="text-center text-gray-400">
          <MapPin className="w-12 h-12 mx-auto mb-3 text-brand" />
          <p className="font-medium">Интерактивная карта</p>
          <p className="text-sm mt-1">
            Для отображения карты подключите Yandex Maps API
          </p>
        </div>
      </div>

      {/* Stations grid */}
      <h2 className="text-xl md:text-2xl font-black mb-6">
        Все заправки{" "}
        <span className="text-brand">{stations.length} АЗС</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stations.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:border-brand/30 hover:shadow-sm transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg">{s.name}</h3>
              <MapPin className="w-4 h-4 text-brand shrink-0 mt-1" />
            </div>
            <p className="text-sm text-gray-600 mb-4">{s.address}</p>

            {/* Fuel types */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {s.fuelTypes.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                >
                  <Fuel className="w-3 h-3" />
                  {f}
                </span>
              ))}
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-1.5">
              {s.hasCafe && (
                <span className="inline-flex items-center gap-1 text-xs font-medium bg-brand/10 text-brand px-2 py-1 rounded-md">
                  <Coffee className="w-3 h-3" />
                  Кафе
                </span>
              )}
              {s.hasShop && (
                <span className="inline-flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-md">
                  <ShoppingBag className="w-3 h-3" />
                  Магазин
                </span>
              )}
              {s.hasCarWash && (
                <span className="inline-flex items-center gap-1 text-xs font-medium bg-cyan-50 text-cyan-700 px-2 py-1 rounded-md">
                  <Droplets className="w-3 h-3" />
                  Мойка
                </span>
              )}
              {s.hasTireInflation && (
                <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-50 text-green-700 px-2 py-1 rounded-md">
                  <Gauge className="w-3 h-3" />
                  Подкачка
                </span>
              )}
              {s.hasVacuum && (
                <span className="inline-flex items-center gap-1 text-xs font-medium bg-purple-50 text-purple-700 px-2 py-1 rounded-md">
                  <Wind className="w-3 h-3" />
                  Пылесос
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
