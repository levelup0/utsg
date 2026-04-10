import type { Metadata } from "next";
import { Gauge, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Дополнительный сервис",
};

const additionalServices = [
  {
    icon: Gauge,
    title: "Подкачка шин",
    description: [
      "На АЗС «УЦГ» установлено специальное оборудование для быстрого, точного и безопасного накачивания автомобильных шин. Своевременная и качественная подкачка шин способствует экономии топлива и сохранности резины.",
      "На наших АЗС вы можете самостоятельно накачать шины до необходимого показателя, при этом, практически не затрачивая сил и экономя время.",
    ],
    locations: ["г. Ульяновск, ул. Ефремова, 50А", "р.п. Майна, ул. Советская, 63"],
  },
  {
    icon: Wind,
    title: "Пылесос для самообслуживания",
    description: [
      "Пылесос самообслуживания предназначен для чистки багажных отделений, салонов автомобилей и микроавтобусов.",
      "Оснащенный длинным всасывающим шлангом (5 метров) с возможностью вытягиваться на нужную длину, данный аппарат удобен в пользовании и позволяет удалять мусор даже из самых отдаленных и труднодоступных уголков автомобильного салона. Большая мощность позволяет за 5 минут убрать салон автомобиля.",
    ],
    locations: ["г. Ульяновск, ул. Ефремова, 50А", "р.п. Майна, ул. Советская, 63"],
  },
];

export default function AdditionalServicesPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black mb-8">
        Дополнительный сервис
      </h1>

      <p className="text-gray-700 leading-relaxed mb-10">
        Мы стремимся к тому, чтобы наши клиенты всегда оставались довольны.
        Специально для вас на наших АЗС действуют бесплатные дополнительные
        услуги.
      </p>

      <div className="space-y-8">
        {additionalServices.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <service.icon className="w-7 h-7 text-brand" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase">
                  {service.title}
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                {service.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Locations */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Доступно на АЗС:
                </h4>
                <ul className="space-y-2">
                  {service.locations.map((loc) => (
                    <li
                      key={loc}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Free badge */}
      <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100 text-center">
        <span className="text-green-700 font-bold text-lg">
          Все дополнительные услуги предоставляются бесплатно
        </span>
      </div>
    </>
  );
}
