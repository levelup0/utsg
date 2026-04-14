import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Fuel,
  Droplets,
  Coffee,
  Wrench,
  MapPin,
  ArrowRight,
  Shield,
  Clock,
  Phone,
  MessageSquare,
} from "lucide-react";
import FeedbackButton from "@/components/FeedbackButton";

const YandexMap = dynamic(() => import("@/components/YandexMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] md:h-[600px] rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
      Загрузка карты…
    </div>
  ),
});

const timeline = [
  { year: "~1965", text: "Начало работы на рынке продаж газовых ресурсов" },
  { year: "2004", text: "Регистрация ООО «Ульяновскцентргаз»" },
  { year: "2015", text: "Запуск нового бренда — сети АЗС «УЦГ»" },
  { year: "Сегодня", text: "26 многотопливных комплексов по Ульяновску и области" },
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
    icon: MapPin,
    title: "Рядом с домом",
    desc: "26 АЗС в Ульяновске и области — удобная заправка в любом районе города.",
  },
];

const stats = [
  { value: "26", label: "Заправок" },
  { value: "50+", label: "Лет на рынке" },
  { value: "5", label: "Видов топлива" },
  { value: "24/7", label: "Режим работы" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,30,36,0.35),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
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
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                Всё, что нужно вам и вашему автомобилю — топливо, мойка, кафе и
                сервис на одной заправке.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#map"
                  className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-brand-dark transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Найти АЗС
                </a>
                <Link
                  href="/services/fuel"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                >
                  Наши услуги
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand/30 via-transparent to-transparent rounded-[2rem] blur-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-8">
                <div className="text-xs uppercase tracking-wider text-brand font-semibold mb-4">
                  История компании
                </div>
                <div className="border-l-2 border-brand/40 pl-7 space-y-5">
                  {timeline.map((t) => (
                    <div key={t.year} className="relative">
                      <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-brand" />
                      <div className="text-sm text-brand font-bold">
                        {t.year}
                      </div>
                      <div className="text-gray-200 mt-1 leading-relaxed">
                        {t.text}
                      </div>
                    </div>
                  ))}
                </div>
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

      {/* 4. Features */}
      <section className="bg-gray-light">
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

      {/* 5. Interactive map */}
      <section id="map" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-wider text-brand font-semibold mb-3">
              Карта заправок
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-2xl mb-3">
              26 АЗС в Ульяновске и области
            </h2>
            <p className="text-gray-500 max-w-xl">
              Выберите удобную заправку на карте — услуги, виды топлива и адрес
              откроются в карточке.
            </p>
          </div>

          <YandexMap />
        </div>
      </section>

      {/* 6. Final CTA */}
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
