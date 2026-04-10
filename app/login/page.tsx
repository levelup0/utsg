import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Личный кабинет",
};

export default function LoginPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 flex items-center justify-center min-h-[60vh]">
      <LoginForm />
    </div>
  );
}
