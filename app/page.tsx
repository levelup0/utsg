import Link from "next/link";
import {
  Fuel,
  Droplets,
  Coffee,
  Wrench,
  MapPin,
  ArrowRight,
  Shield,
  Clock,
  CreditCard,
} from "lucide-react";

const services = [
  {
    icon: Fuel,
    title: "Топливо",
    desc: "АИ-92, АИ-95, АИ-98, ДТ, пропан. Качество подтверждено ГОСТ.",
    href: "/services/fuel",
  },
  {
    icon: Droplets,
    title: "Автомойка",
    desc: "Автоматическая портальная мойка за 15 минут. 4 программы на выбор.",
    href: "/services/car-wash",
  },
  {
    icon: Coffee,
    title: "Магазин и кафе",
    desc: "Свежая выпечка, гриль собственного приготовления, ароматный кофе.",
    href: "/services/shop-cafe",
  },
  {
    icon: Wrench,
    title: "Дополнительный сервис",
    desc: "Бесплатная подкачка шин и пылесос для самообслуживания.",
    href: "/services/additional",
  },
];

const features = [
  {
    icon: Shield,
    title: "Качество",
    desc: "Топливо соответствует ГОСТ Р 51866-2002 и ТР ТС 013/2011",
  },
  {
    icon: Clock,
    title: "24/7",
    desc: "Большинство наших АЗС работают круглосуточно",
  },
  {
    icon: CreditCard,
    title: "Карта «Зажигай»",
    desc: "Бонусная программа со скидками на топливо и мойку",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              АЗС{" "}
              <span className="text-brand">«УЦГ»</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Все, что нужно вам и вашему автомобилю!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/stations"
                className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Найти АЗС
              </Link>
              <Link
                href="/services/fuel"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Наши услуги
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-brand">26</div>
              <div className="text-sm text-gray-500 mt-1">заправок</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-brand">50+</div>
              <div className="text-sm text-gray-500 mt-1">лет на рынке</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-brand">5</div>
              <div className="text-sm text-gray-500 mt-1">видов топлива</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-brand">24/7</div>
              <div className="text-sm text-gray-500 mt-1">режим работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-12">
            Товары и услуги
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors">
                  <s.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-8 h-8 text-brand" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Найдите ближайшую АЗС
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            26 заправок по Ульяновску и области — качественное топливо всегда
            рядом
          </p>
          <Link
            href="/stations"
            className="inline-flex items-center gap-2 bg-white text-brand px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
          >
            <MapPin className="w-5 h-5" />
            Карта заправок
          </Link>
        </div>
      </section>
    </>
  );
}
