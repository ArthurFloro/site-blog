import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col dark">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
