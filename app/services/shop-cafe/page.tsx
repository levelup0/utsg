import type { Metadata } from "next";
import { Clock, Coffee, ShoppingBag, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Магазин и кафе",
};

const locations = [
  {
    name: "АЗС №8М",
    address: "г. Ульяновск, ул. Нариманова",
    cafe: false,
    shop: true,
  },
  {
    name: "АЗС №8",
    address:
      "Ульяновская обл., Чердаклинский район, 18 км а/д Ульяновск-Димитровград",
    cafe: true,
    shop: true,
  },
  {
    name: "АЗС №12",
    address: "г. Ульяновск, ул. Ефремова, 50А",
    cafe: true,
    shop: true,
  },
  {
    name: "АЗС №13",
    address:
      "Ульяновская обл., Старомайнский район, р.п. Старая Майна, ул. Сидорова, 23",
    cafe: false,
    shop: true,
  },
  {
    name: "АЗС №19",
    address:
      "Ульяновская обл., Майнский район, р.п. Майна, ул. Советская, 63",
    cafe: true,
    shop: true,
  },
  {
    name: "АЗС №1М",
    address:
      "Ульяновская обл., Теренгульский район, с. Солдатская Ташла",
    cafe: false,
    shop: true,
  },
  {
    name: "АЗС №2М",
    address:
      'Ульяновская обл., Чердаклинский район, 25-й км трассы "Ульяновск-Самара"',
    cafe: false,
    shop: true,
  },
  {
    name: "АЗС №3М",
    address: 'г. Ульяновск, трасса "Ульяновск-Сызрань", с. Белый Ключ',
    cafe: false,
    shop: true,
  },
  {
    name: "АЗС №5М",
    address: "г. Ульяновск, ул. Диспетчерская, д. 16",
    cafe: false,
    shop: true,
  },
  {
    name: "АЗС №6М",
    address:
      "Ульяновская обл., г. Сенгилей, пересечение ул. Красноармейской и объездной дороги",
    cafe: false,
    shop: true,
  },
];

export default function ShopCafePage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black mb-8">Магазин и кафе</h1>

      <p className="text-gray-700 leading-relaxed mb-8">
        На территории АЗС «УЦГ» действует кафе, где вы можете попробовать
        свежую выпечку, гриль собственного приготовления и насладиться ароматным
        свежесваренным кофе.
      </p>

      {/* Location Table */}
      <section>
        <h2 className="text-xl md:text-2xl font-black text-brand uppercase mb-6">
          Наши точки
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-brand/20">
                <th className="text-left py-3 pr-4 font-semibold text-gray-500">
                  АЗС
                </th>
                <th className="text-left py-3 pr-4 font-semibold text-gray-500">
                  Адрес
                </th>
                <th className="py-3 px-4 text-center font-semibold text-gray-500">
                  Режим
                </th>
                <th className="py-3 px-4 text-center font-semibold text-gray-500">
                  Кафе
                </th>
                <th className="py-3 px-4 text-center font-semibold text-gray-500">
                  Магазин
                </th>
              </tr>
            </thead>
            <tbody>
              {locations.map((loc) => (
                <tr
                  key={loc.name}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 pr-4 font-semibold whitespace-nowrap">
                    {loc.name}
                  </td>
                  <td className="py-3 pr-4 text-gray-600">{loc.address}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      24/7
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {loc.cafe ? (
                      <Check className="w-5 h-5 text-brand mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {loc.shop ? (
                      <Check className="w-5 h-5 text-brand mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-xl border border-gray-200 p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold">{loc.name}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  24/7
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{loc.address}</p>
              <div className="flex gap-3">
                {loc.cafe && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-brand bg-brand/10 px-2 py-1 rounded-full">
                    <Coffee className="w-3 h-3" />
                    Кафе
                  </span>
                )}
                {loc.shop && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                    <ShoppingBag className="w-3 h-3" />
                    Магазин
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
