import type { ReactNode } from "react";
import Navbar from "@/components/ui/navbar/NavBar";
import Footer from "@/components/ui/footer/Footer";


type LayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
