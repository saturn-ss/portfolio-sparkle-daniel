
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MouseAnimation from "../ui-components/MouseAnimation";
import AutoPlayAudio from "../ui-components/AutoPlayAudio";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20 md:pt-24">{children}</main>
      <Footer />
      <MouseAnimation />
      <AutoPlayAudio />
    </div>
  );
};

export default Layout;
