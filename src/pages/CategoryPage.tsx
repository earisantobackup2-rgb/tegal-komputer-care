import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const categoryData: Record<string, { title: string; description: string; products: string[] }> = {
  "pc-laptop-minipc": {
    title: "PC, Laptop & Mini PC",
    description: "Desktop, Notebook, All-in-One, dan Mini PC untuk semua kebutuhan computing Anda",
    products: [
      "Laptop ASUS VivoBook",
      "Laptop Lenovo ThinkPad",
      "Laptop Dell Latitude",
      "Desktop PC Custom Build",
      "Mini PC Intel NUC",
      "All-in-One PC HP",
      "Laptop Gaming MSI",
      "Laptop ASUS ROG",
    ],
  },
  "server-storage-nas": {
    title: "Server, Storage & NAS",
    description: "Solusi penyimpanan data enterprise dan server terpercaya untuk bisnis Anda",
    products: [
      "Synology NAS DiskStation",
      "Dell PowerEdge Server",
      "HP ProLiant Server",
      "Western Digital HDD",
      "Seagate IronWolf NAS",
      "Kingston SSD Enterprise",
      "QNAP NAS",
      "Rack Server Custom",
    ],
  },
  "service-center": {
    title: "Service Center",
    description: "Layanan perbaikan dan maintenance hardware oleh teknisi berpengalaman",
    products: [
      "Perbaikan Laptop",
      "Upgrade RAM & SSD",
      "Install Ulang Windows",
      "Perbaikan Motherboard",
      "Cleaning & Maintenance",
      "Recovery Data",
      "Perbaikan Printer",
      "Konsultasi IT",
    ],
  },
  aksesoris: {
    title: "Aksesoris",
    description: "Keyboard, mouse, headset, dan aksesoris komputer lainnya",
    products: [
      "Keyboard Mechanical",
      "Mouse Gaming",
      "Headset Wireless",
      "Webcam HD",
      "USB Hub",
      "Laptop Stand",
      "Mousepad Gaming",
      "External SSD",
    ],
  },
  "cctv-surveillance": {
    title: "CCTV & Surveillance",
    description: "Sistem keamanan dan pengawasan untuk rumah dan bisnis",
    products: [
      "IP Camera Hikvision",
      "DVR 8 Channel",
      "NVR Dahua",
      "CCTV Outdoor",
      "CCTV Indoor",
      "Access Control",
      "Intercom System",
      "Alarm Security",
    ],
  },
  "network-firewall": {
    title: "Network & Firewall",
    description: "Router, access point, firewall, dan perangkat jaringan lengkap",
    products: [
      "Router MikroTik",
      "Access Point Ubiquiti",
      "Firewall Fortinet",
      "Switch Managed",
      "Kabel UTP Cat6",
      "Rack Server",
      "Modem WiFi",
      "Network Tools",
    ],
  },
  "printer-scanner": {
    title: "Printer & Scanner",
    description: "Solusi cetak dan scan untuk kebutuhan kantor dan rumah",
    products: [
      "Printer Epson EcoTank",
      "Printer HP LaserJet",
      "Printer Canon PIXMA",
      "Scanner Flatbed",
      "Printer Label",
      "Tinta Printer Original",
      "Toner LaserJet",
      "Kertas A4 Premium",
    ],
  },
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryData[slug] : null;

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Kategori tidak ditemukan</h1>
            <Link to="/" className="mt-4 inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>{category.title} - Indo Komputer Tegal</title>
        <meta name="description" content={category.description} />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-hero py-12 md:py-16">
          <div className="container">
            <Link
              to="/"
              className="mb-4 inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              {category.title}
            </h1>
            <p className="mt-2 max-w-2xl text-primary-foreground/90">{category.description}</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-muted">
                    <span className="text-4xl text-muted-foreground/50">📦</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{product}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Hubungi untuk harga terbaik</p>
                  <a
                    href={`https://wa.me/6287782524000?text=Halo, saya tertarik dengan ${product}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Phone className="h-4 w-4" />
                    Tanya Harga
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted py-12">
          <div className="container text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Butuh Bantuan?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
              Tim kami siap membantu Anda menemukan produk yang tepat
            </p>
            <a
              href="https://wa.me/6287782524000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-all hover:shadow-glow-lg"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Hubungi via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CategoryPage;
