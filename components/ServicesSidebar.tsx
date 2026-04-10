"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fuel, Droplets, Coffee, Wrench } from "lucide-react";

const items = [
  { label: "Топливо", href: "/services/fuel", icon: Fuel },
  { label: "Автомойка", href: "/services/car-wash", icon: Droplets },
  { label: "Магазин и кафе", href: "/services/shop-cafe", icon: Coffee },
  { label: "Дополнительный сервис", href: "/services/additional", icon: Wrench },
];

export default function ServicesSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-3">
        Товары и услуги
      </h3>
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              active
                ? "bg-brand text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon className="w-4 h-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
