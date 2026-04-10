"use client";

import Link from "next/link";
import { User, Lock } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-brand" />
        </div>
        <h1 className="text-2xl font-black">Личный кабинет</h1>
        <p className="text-sm text-gray-500 mt-1">
          ООО &laquo;Ульяновскцентргаз&raquo;
        </p>
      </div>

      <form
        className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="font-bold text-lg mb-6">Вход в систему</h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="login"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Логин <span className="text-brand">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="login"
                type="text"
                required
                maxLength={50}
                autoFocus
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                placeholder="Введите логин"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Пароль <span className="text-brand">*</span>
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="password"
                type="password"
                required
                maxLength={50}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                placeholder="Введите пароль"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-brand text-white py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
        >
          Вход
        </button>

        <div className="mt-4 flex justify-between text-sm">
          <span className="text-gray-400">* обязательные поля</span>
          <Link href="#" className="text-brand hover:underline">
            Забыли пароль?
          </Link>
        </div>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Нет аккаунта?{" "}
        <Link href="#" className="text-brand font-medium hover:underline">
          Регистрация
        </Link>
      </p>
    </div>
  );
}
