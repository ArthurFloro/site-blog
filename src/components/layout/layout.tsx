import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Inter } from "next/font/google";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} relative flex min-h-screen flex-col bg-gray-600 text-gray-100`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
