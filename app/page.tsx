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
  Percent,
  Phone,
  MessageSquare,
  ShoppingBag,
  Gauge,
  Wind,
  Check,
} from "lucide-react";
import FeedbackButton from "@/components/FeedbackButton";
import { stations } from "@/lib/stations";

const heroTiles = [
  { icon: Fuel, label: "Топливо" },
  { icon: Droplets, label: "Автомойка" },
  { icon: Coffee, label: "Кафе" },
  { icon: Wrench, label: "Сервис" },
];

const services = [
  {
    icon: Fuel,
    title: "Топливо",
    desc: "АИ-92, АИ-95, АИ-98, ДТ, пропан. Качество подтверждено ГОСТ и лабораторными проверками.",
    href: "/services/fuel",
    feature: true,
    tags: ["АИ-92", "АИ-95", "АИ-98", "ДТ", "Пропан"],
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
    title: "Доп. сервис",
    desc: "Бесплатная подкачка шин и пылесос для самообслуживания.",
    href: "/services/additional",
  },
];

const features = [
  {
    num: "01",
    icon: Shield,
    title: "Гарантия качества",
    desc: "Топливо соответствует ГОСТ Р 51866-2002 и ТР ТС 013/2011. Регулярные лабораторные проверки.",
  },
  {
    num: "02",
    icon: Clock,
    title: "Режим 24/7",
    desc: "Большинство наших АЗС работают круглосуточно — приезжайте в любое удобное время.",
  },
  {
    num: "03",
    icon: CreditCard,
    title: "Карта «Зажигай»",
    desc: "Бонусная программа со скидками до 50% на автомойку и выгодной ценой на топливо.",
  },
];

const stats = [
  { value: "26", label: "Заправок" },
  { value: "50+", label: "Лет на рынке" },
  { value: "5", label: "Видов топлива" },
  { value: "24/7", label: "Режим работы" },
];

export default function HomePage() {
  const mapPreview = stations.slice(0, 6);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,30,36,0.35),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs uppercase tracking-wider text-gray-200 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                Сеть АЗС в Ульяновской области
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
                АЗС
                <br />
                <span className="text-brand">«УЦГ»</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-xl">
                Всё, что нужно вам и вашему автомобилю — топливо, мойка, кафе и
                сервис на одной заправке.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/stations"
                  className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-brand-dark transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Найти АЗС
                </Link>
                <Link
                  href="/services/fuel"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                >
                  Наши услуги
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Hero tiles */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand/30 via-transparent to-transparent rounded-[2rem] blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {heroTiles.map((t, i) => (
                  <div
                    key={t.label}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 ${
                      i === 0 || i === 3 ? "translate-y-4" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand/15 flex items-center justify-center mb-8">
                      <t.icon className="w-6 h-6 text-brand" />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                      Сервис
                    </div>
                    <div className="text-xl font-bold">{t.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats */}
      <section className="bg-gray-light border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-gray-300/60">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-2 md:px-8 ${i < 2 ? "mb-6 md:mb-0" : ""}`}
              >
                <div className="text-4xl md:text-5xl font-black text-brand leading-none tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mt-3 font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-wider text-brand font-semibold mb-3">
                Товары и услуги
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-xl">
                Всё необходимое на одной заправке
              </h2>
            </div>
            <p className="text-gray-500 max-w-md">
              От качественного топлива до уютного кафе — мы заботимся о каждой
              детали вашей поездки.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => {
              if (s.feature) {
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group relative lg:col-span-2 lg:row-span-1 bg-dark text-white rounded-2xl p-8 overflow-hidden hover:bg-black transition-colors min-h-[280px] flex flex-col justify-between"
                  >
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand/20 rounded-full blur-3xl" />
                    <div className="relative flex items-start justify-between">
                      <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center">
                        <s.icon className="w-7 h-7 text-white" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="relative">
                      <h3 className="font-black text-2xl md:text-3xl mb-3 tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-gray-300 mb-5 max-w-md">{s.desc}</p>
                      {s.tags && (
                        <div className="flex flex-wrap gap-2">
                          {s.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              }
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group relative bg-gray-light rounded-2xl p-6 border border-transparent hover:border-brand/30 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand transition-colors">
                    <s.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <div className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Подробнее
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Promo teaser */}
      <section className="bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Loyalty big card */}
            <Link
              href="/loyalty"
              className="group relative lg:col-span-2 bg-brand text-white rounded-3xl p-8 md:p-10 overflow-hidden hover:bg-brand-dark transition-colors"
            >
              <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border-[24px] border-white/10" />
              <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
              <div className="relative flex flex-col h-full min-h-[320px] justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-6">
                    <CreditCard className="w-3.5 h-3.5" />
                    Программа лояльности
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4 max-w-lg">
                    Карта «Зажигай» — до&nbsp;50% на мойку
                  </h3>
                  <p className="text-white/85 max-w-md text-lg">
                    Копите бонусы на каждой заправке и экономьте на топливе,
                    мойке и кафе.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8 font-semibold">
                  Получить карту
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Stacked small cards */}
            <div className="grid grid-rows-2 gap-4">
              <Link
                href="/promotions"
                className="group relative bg-white rounded-3xl p-6 border border-gray-200/70 hover:border-brand/30 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center">
                    <Percent className="w-5 h-5 text-brand" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Акции
                </div>
                <h3 className="font-bold text-lg leading-tight">
                  Сезонные предложения для наших клиентов
                </h3>
              </Link>
              <Link
                href="/services/car-wash"
                className="group relative bg-dark text-white rounded-3xl p-6 overflow-hidden hover:bg-black transition-colors"
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-brand/20 blur-2xl" />
                <div className="relative flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-brand" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <div className="relative text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Автомойка
                </div>
                <h3 className="relative font-bold text-lg leading-tight">
                  4 программы мойки за 15 минут
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Features */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-wider text-brand font-semibold mb-3">
              Почему выбирают нас
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Три причины заправляться в «УЦГ»
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200/70 rounded-3xl overflow-hidden border border-gray-200/70">
            {features.map((f) => (
              <div
                key={f.num}
                className="relative bg-white p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="text-5xl md:text-6xl font-black text-gray-100 leading-none tracking-tight">
                    {f.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-brand" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Map teaser */}
      <section className="bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-wider text-brand font-semibold mb-3">
                Карта заправок
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-2xl">
                26 АЗС в Ульяновске и области
              </h2>
            </div>
            <Link
              href="/stations"
              className="inline-flex items-center gap-2 bg-dark text-white px-5 py-3 rounded-xl font-semibold hover:bg-black transition-colors self-start md:self-auto"
            >
              <MapPin className="w-5 h-5" />
              Все АЗС на карте
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mapPreview.map((st) => (
              <Link
                key={st.id}
                href="/stations"
                className="group relative bg-white rounded-2xl p-5 border border-gray-200/70 hover:border-brand/40 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-brand" />
                    </div>
                    <div className="font-bold text-lg">{st.name}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand group-hover:translate-x-1 transition-all mt-3" />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 min-h-[40px]">
                  {st.address}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {st.fuelTypes.slice(0, 4).map((f) => (
                    <span
                      key={f}
                      className="text-[11px] font-semibold px-2 py-0.5 rounded bg-gray-light text-gray-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 pt-3 border-t border-gray-100">
                  {st.hasCafe && (
                    <span className="inline-flex items-center gap-1">
                      <Coffee className="w-3.5 h-3.5" />
                      Кафе
                    </span>
                  )}
                  {st.hasShop && (
                    <span className="inline-flex items-center gap-1">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Магазин
                    </span>
                  )}
                  {st.hasCarWash && (
                    <span className="inline-flex items-center gap-1">
                      <Droplets className="w-3.5 h-3.5" />
                      Мойка
                    </span>
                  )}
                  {st.hasTireInflation && (
                    <span className="inline-flex items-center gap-1">
                      <Gauge className="w-3.5 h-3.5" />
                      Подкачка
                    </span>
                  )}
                  {st.hasVacuum && (
                    <span className="inline-flex items-center gap-1">
                      <Wind className="w-3.5 h-3.5" />
                      Пылесос
                    </span>
                  )}
                  {!st.hasCafe &&
                    !st.hasShop &&
                    !st.hasCarWash &&
                    !st.hasTireInflation &&
                    !st.hasVacuum && (
                      <span className="inline-flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        Заправка
                      </span>
                    )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(227,30,36,0.35),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
                Остались вопросы?
              </h2>
              <p className="text-gray-300 text-lg max-w-lg">
                Напишите нам через форму обратной связи или позвоните — ответим
                в рабочее время.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <FeedbackButton className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-brand-dark transition-colors">
                <MessageSquare className="w-5 h-5" />
                Обратная связь
              </FeedbackButton>
              <a
                href="tel:+78422354071"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
              >
                <Phone className="w-5 h-5" />
                +7 (8422) 35-40-71
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
