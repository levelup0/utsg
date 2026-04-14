import type { Metadata } from "next";
import { Check, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Автомойка",
};

const programs = ["Лайт", "Стандарт", "Люкс", "Бесконтактная"] as const;

const services: { name: string; checks: boolean[] }[] = [
  {
    name: "Нанесение шампуня на диски автомобиля",
    checks: [false, true, false, false],
  },
  {
    name: "Нанесение шампуня в виде микроэмульсии",
    checks: [false, false, true, true],
  },
  {
    name: "Предварительное нанесение пенного шампуня для бесконтактной мойки",
    checks: [true, true, true, true],
  },
  {
    name: "Мойка щётками автомобиля с нанесением шампуня",
    checks: [true, true, true, false],
  },
  {
    name: "Мойка щётками автомобиля с высоким давлением",
    checks: [false, false, true, false],
  },
  {
    name: "Мойка с высоким давлением крыши, переда и зада автомобиля",
    checks: [false, false, true, true],
  },
  {
    name: "Мойка с высоким давлением бортов автомобиля",
    checks: [false, true, true, true],
  },
  {
    name: "Мойка днища с высоким давлением",
    checks: [false, false, true, true],
  },
  {
    name: "Промывка дисков и колёс щётками с высоким давлением",
    checks: [true, true, true, true],
  },
  {
    name: "Промывка чистой водой с нанесением осушителя и горячего воска",
    checks: [false, true, true, true],
  },
  {
    name: "Промывка чистой водой и нанесение осушителя",
    checks: [true, false, false, false],
  },
  { name: "Сушка", checks: [true, true, true, true] },
];

const prices = {
  regular: [190, 200, 250, 195],
};

export default function CarWashPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black mb-8">Автомойка</h1>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Помыть машину за 15 минут без очереди за символическую цену стало
          реальностью. АЗС «УЦГ» предлагает услуги автоматической портальной
          мойки. Сам автомобиль в процессе мойки находится на специальной
          платформе, поэтому можно качественно вымыть не только сам кузов
          транспортного средства, но и его днище и колеса.
        </p>
        <div className="flex items-center gap-2 text-sm text-brand font-medium">
          <MapPin className="w-4 h-4" />
          г. Ульяновск, ул. Ефремова, д.50а
        </div>
      </div>

      {/* Pricing Table */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-black text-brand uppercase mb-6">
          Программы мойки
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-brand/20">
                <th className="text-left py-3 pr-4 font-semibold text-gray-500 w-[45%]">
                  Услуга
                </th>
                {programs.map((p) => (
                  <th key={p} className="py-3 px-2 text-center font-bold">
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr
                  key={s.name}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 pr-4 text-gray-700">{s.name}</td>
                  {s.checks.map((c, i) => (
                    <td key={i} className="py-3 px-2 text-center">
                      {c && (
                        <Check className="w-5 h-5 text-brand mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Price rows */}
              <tr className="border-t-2 border-brand/20 bg-gray-50">
                <td className="py-4 pr-4 font-bold text-brand">Цена</td>
                {prices.regular.map((p, i) => (
                  <td
                    key={i}
                    className="py-4 px-2 text-center font-bold text-lg text-brand"
                  >
                    {p} &#8381;
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {programs.map((prog, pi) => (
            <div key={prog} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-brand text-white px-4 py-3 font-bold text-center">
                {prog}
              </div>
              <div className="p-4 space-y-2">
                {services.map(
                  (s) =>
                    s.checks[pi] && (
                      <div key={s.name} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        <span className="text-gray-700">{s.name}</span>
                      </div>
                    )
                )}
                <div className="pt-3 mt-3 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Цена:</span>
                  <span className="text-xl font-bold text-brand">
                    {prices.regular[pi]} &#8381;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
