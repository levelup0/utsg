"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MessageSquare, User } from "lucide-react";
import FeedbackModal from "./FeedbackModal";

export default function Header() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg md:text-xl">У</span>
              </div>
              <div className="leading-tight">
                <span className="font-black text-xl md:text-2xl text-brand tracking-tight">
                  УЦГ
                </span>
                <span className="hidden sm:block text-xs text-gray-500">
                  Ульяновск Центр Газ
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2 md:gap-5">
              <a
                href="tel:+78422354071"
                className="hidden md:flex items-center gap-2 text-dark hover:text-brand transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+7 (8422) 35-40-71</span>
              </a>
              <a
                href="tel:+78422354071"
                className="md:hidden p-2 text-brand"
                aria-label="Позвонить"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setFeedbackOpen(true)}
                className="hidden md:flex items-center gap-2 text-gray-600 hover:text-brand transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Обратная связь
              </button>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-brand text-white px-3 md:px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors text-sm font-medium"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Личный кабинет</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  );
}
