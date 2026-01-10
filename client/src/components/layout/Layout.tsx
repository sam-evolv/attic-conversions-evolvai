import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  heroPage?: boolean;
}

export function Layout({ children, heroPage = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${heroPage ? "" : "pt-20"}`}>{children}</main>
      <Footer />
    </div>
  );
}
