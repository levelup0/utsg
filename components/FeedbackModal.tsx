"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function FeedbackModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [agreed, setAgreed] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-brand uppercase mb-6">
          Обратная связь
        </h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Введите имя и фамилию"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
          />
          <input
            type="email"
            placeholder="Введите адрес электронной почты"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
          />
          <textarea
            placeholder="Ваше сообщение"
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors resize-none"
          />
          <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 accent-brand"
              required
            />
            <span>
              Нажимая на кнопку «Отправить», Вы даете{" "}
              <Link
                href="/privacy"
                className="text-brand underline"
                target="_blank"
              >
                согласие на обработку персональных данных
              </Link>
              .
            </span>
          </label>
          <button
            type="submit"
            className="w-full bg-brand text-white py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
