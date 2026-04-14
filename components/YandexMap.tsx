"use client";

import { useEffect, useRef, useState } from "react";
import { stations } from "@/lib/stations";

declare global {
  interface Window {
    ymaps?: any;
  }
}

const API_KEY = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
const SCRIPT_ID = "yandex-maps-script";

function loadYmaps(): Promise<any> {
  if (typeof window === "undefined") return Promise.reject("no window");
  if (window.ymaps) return Promise.resolve(window.ymaps);

  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  const scriptPromise = new Promise<void>((resolve, reject) => {
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject("script error"));
      return;
    }
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = `https://api-maps.yandex.ru/2.1/?apikey=${API_KEY ?? ""}&lang=ru_RU`;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject("script error");
    document.head.appendChild(s);
  });

  return scriptPromise.then(
    () =>
      new Promise((resolve) => {
        window.ymaps.ready(() => resolve(window.ymaps));
      })
  );
}

export default function YandexMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!API_KEY) {
      setError("no-key");
      return;
    }
    let map: any;
    let cancelled = false;

    loadYmaps()
      .then((ymaps) => {
        if (cancelled || !containerRef.current) return;
        map = new ymaps.Map(containerRef.current, {
          center: [54.32, 48.39],
          zoom: 11,
          controls: ["zoomControl", "geolocationControl", "fullscreenControl"],
        });

        stations.forEach((st) => {
          const servicesList = [
            st.hasCafe && "Кафе",
            st.hasShop && "Магазин",
            st.hasCarWash && "Мойка",
            st.hasTireInflation && "Подкачка шин",
            st.hasVacuum && "Пылесос",
          ]
            .filter(Boolean)
            .join(" · ");

          const balloon = `
            <div style="max-width:260px">
              <div style="font-weight:700;font-size:15px;margin-bottom:4px">${st.name}</div>
              <div style="color:#555;font-size:13px;margin-bottom:8px">${st.address}</div>
              <div style="font-size:12px;color:#888;margin-bottom:4px">Топливо: ${st.fuelTypes.join(", ")}</div>
              ${servicesList ? `<div style="font-size:12px;color:#888">Сервис: ${servicesList}</div>` : ""}
            </div>
          `;

          const placemark = new ymaps.Placemark(
            [st.lat, st.lon],
            {
              hintContent: st.name,
              balloonContent: balloon,
            },
            {
              preset: "islands#redFuelStationIcon",
            }
          );
          map.geoObjects.add(placemark);
        });
      })
      .catch(() => {
        if (!cancelled) setError("load-failed");
      });

    return () => {
      cancelled = true;
      if (map) map.destroy();
    };
  }, []);

  if (error) {
    return (
      <div className="w-full h-[500px] md:h-[600px] rounded-2xl bg-gray-100 flex items-center justify-center text-center p-6">
        <div>
          <MapPinFallback />
          <p className="font-semibold text-gray-700 mb-1">Карта временно недоступна</p>
          <p className="text-sm text-gray-500">
            {error === "no-key"
              ? "Добавьте NEXT_PUBLIC_YANDEX_MAPS_API_KEY в .env.local"
              : "Не удалось загрузить Яндекс.Карты"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
    />
  );
}

function MapPinFallback() {
  return (
    <svg
      className="w-10 h-10 mx-auto mb-3 text-brand"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
