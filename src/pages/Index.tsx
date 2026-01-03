import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import CategorySection from "@/components/CategorySection";
import BrandSection from "@/components/BrandSection";
import StoreSection from "@/components/StoreSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Indo Komputer Tegal - Toko Komputer Terlengkap di Tegal</title>
        <meta
          name="description"
          content="Indo Komputer Tegal menyediakan PC, Laptop, Server, CCTV, Aksesoris, dan layanan Service Center terbaik di Kota Tegal. Hubungi kami sekarang!"
        />
        <meta name="keywords" content="toko komputer tegal, laptop tegal, pc tegal, server tegal, cctv tegal, service komputer tegal" />
        <link rel="canonical" href="https://indokomputer-tegal.com" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSlider />
          <CategorySection />
          <BrandSection />
          <StoreSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
