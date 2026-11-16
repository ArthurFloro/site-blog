import { Logo } from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 py-8">
          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Logo />

            <Link href={"/termos-de-uso"} className="hover:text-primary">
              Termos de uso
            </Link>
            <Link
              href={"/politica-de-privacidade"}
              className="hover:text-primary"
            >
              Política de privacidade
            </Link>
            <Link href={"/enviar-feedback"} className="hover:text-primary">
              Enviar feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
