import type { Metadata } from "next";
import { Shield, FlaskConical, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Топливо",
};

const fuelTypes = [
  { name: "АИ-92", color: "bg-green-500" },
  { name: "АИ-95", color: "bg-blue-500" },
  { name: "АИ-98", color: "bg-purple-500" },
  { name: "ДТ", color: "bg-yellow-500" },
  { name: "Пропан", color: "bg-orange-500" },
  { name: "Метан", color: "bg-teal-500" },
];

export default function FuelPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black mb-8">Топливо</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Проявляя заботу, как об окружающей среде, так и о техническом состоянии
          автомобилей наших покупателей, мы реализуем максимально качественное
          топливо, приобретая его на заводах, которые имеют кристально чистую
          репутацию и являются лидерами на рынке производства нефтепродуктов в
          нашем регионе.
        </p>
        <p>
          Заправляя топливо на АЗС «УЦГ», Вы можете быть уверены в его отличных
          характеристиках и постоянном контроле нашей компанией за качеством
          бензина!
        </p>
      </div>

      {/* Lab Research */}
      <section className="mt-12">
        <h2 className="text-xl md:text-2xl font-black text-brand uppercase mb-6">
          Лабораторные исследования
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Наше топливо регламентировано Таможенным союзом ТР ТС 013/2011, «О
            требованиях к автомобильному и авиационному бензину».
          </p>
          <p>
            Принципиальное отличие топлива для автомобилей разных экологических
            классов заключается в различных нормах содержания вредных веществ
            (компонентов), в конечном итоге влияющих на токсичность отработавших
            газов автомобильной техники.
          </p>
          <p>
            Показатели нашего топлива строго соответствуют требованиям ГОСТ Р
            51866-2002.
          </p>
        </div>

        {/* Docs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
              <FileCheck className="w-6 h-6 text-brand" />
            </div>
            <div>
              <div className="font-semibold text-sm">Лицензия</div>
              <div className="text-xs text-gray-500">
                Документ подтверждения деятельности
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-brand" />
            </div>
            <div>
              <div className="font-semibold text-sm">Паспорт качества</div>
              <div className="text-xs text-gray-500">
                Подтверждение соответствия стандартам
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Types */}
      <section className="mt-12">
        <h2 className="text-xl md:text-2xl font-black text-brand uppercase mb-6">
          Виды топлива
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {fuelTypes.map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
            >
              <div className={`w-3 h-3 rounded-full ${f.color}`} />
              <span className="font-semibold">{f.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Badge */}
      <section className="mt-12 p-6 bg-brand/5 rounded-2xl border border-brand/10">
        <div className="flex items-start gap-4">
          <FlaskConical className="w-8 h-8 text-brand shrink-0" />
          <div>
            <h3 className="font-bold text-lg mb-2">Гарантия качества</h3>
            <p className="text-sm text-gray-600">
              Все виды топлива проходят обязательный контроль качества.
              Соответствие подтверждено Техническим регламентом Таможенного союза
              ТР ТС 013/2011 и ГОСТ Р 51866-2002.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
