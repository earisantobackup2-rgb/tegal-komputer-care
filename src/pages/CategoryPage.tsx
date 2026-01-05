import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Product {
  name: string;
  description?: string;
  image?: string;
}

const categoryData: Record<string, { title: string; description: string; products: Product[]; backgroundImage: string }> = {
  "pc-laptop-minipc": {
    title: "PC, Laptop & Mini PC",
    description: "Desktop, Notebook, All-in-One, dan Mini PC untuk semua kebutuhan computing Anda",
    backgroundImage: "https://realcomputer.in/image/cache/catalog/Untitled-1920x608.jpg",
    products: [
      { name: "Laptop ASUS VivoBook" },
      { name: "Laptop Lenovo ThinkPad" },
      { name: "Laptop Dell Latitude" },
      { name: "Desktop PC Custom Build" },
      { name: "Mini PC Intel NUC" },
      { name: "All-in-One PC HP" },
      { name: "Laptop Gaming MSI" },
      { name: "Laptop ASUS ROG" },
    ],
  },
  "server-storage-nas": {
    title: "Server, Storage & NAS",
    description: "Solusi penyimpanan data enterprise dan server terpercaya untuk bisnis Anda",
    backgroundImage: "https://www.cyberwala.com/wp-content/uploads/2021/04/Dell-New-Rack-Server-1536x394.jpg",
    products: [
      {
        name: "PowerEdge R760 Rack Server",
        description: "The 2U, 2 socket Dell PowerEdge R760 enables faster time to value with peak compute performance, through optimum configurations.",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/poweredge/r760/media-gallery/server-poweredge-r760-black-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3210&hei=1038&qlt=100,1&resMode=sharp2&size=3210,1038&chrss=full&imwidth=5000",
      },
      {
        name: "PowerEdge R760xs Rack Server",
        description: "The Dell PowerEdge R760xs is the best choice for the right balance in performance in an air-cooled chassis for the most popular IT applications.",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/poweredge/r760xs/media-gallery/server-poweredge-r760xs-black-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3413&hei=992&qlt=100,1&resMode=sharp2&size=3413,992&chrss=full&imwidth=5000",
      },
      {
        name: "PowerEdge T360 Tower Server",
        description: "The 4.5U, single-socket PowerEdge T360 is a specially designed form factor for customers desiring versatility, affordability, and processing power.",
        image: "https://i.dell.com/is/image/DellContent/content/dam/images/products/servers/poweredge/t360/dell-t360-8x3-5-dell-logo-bezel-lf.psd?fmt=png-alpha&pscan=auto&scl=1&wid=5000&hei=5000&qlt=100,1&resMode=sharp2&size=5000,5000&chrss=full&imwidth=5000",
      },
      {
        name: "SYNOLOGY NAS DiskStation DS923+",
        description: "Synology mengumumkan peluncuran NAS 4-bay terbaru, Synology DiskStation DS923+, model terbaru dalam lini seri Plus sebagai perangkat penyimpanan all-in-one untuk penggunaan bisnis dan kantor UMKM.",
        image: "https://www.synology.com/cgi/img?action=getImage&o=news&pic_id=290",
      },
      {
        name: "SYNOLOGY NAS RackStation® RS1619xs+",
        description: "1U rackmount flagship aims for file collaboration and high-performance computation.",
        image: "https://m.media-amazon.com/images/I/41zBKeo3RIL._AC_SL1280_.jpg",
      },
      {
        name: "HPE ProLiant Compute DL320 Gen12",
        description: "The HPE ProLiant DL320 Gen12 maximizes your rack utilization while mitigating virtualization risks in power-constrained environments. Power your workloads with a server providing greater expansion capabilities compared to previous generations.",
        image: "https://www.proliant.ru/files/6904/3549/DL320_Gen12.jpg",
      },
      {
        name: "HPE ProLiant Compute DL380 Gen12",
        description: "The HPE ProLiant Compute DL380 Gen12 is a scalable 2U 2P server that delivers exceptional compute performance, memory density with scalability and high-speed data transfer rate to run your most demanding applications. Powered by Intel® Xeon® 6 processors with up to 144 cores and up to 8 TB of memory.",
        image: "https://www.serverbasket.com/wp-content/uploads/2025/04/HPE-ProLiant-Compute-DL380-Gen12-Server.png",
      },
      {
        name: "Supermicro CloudDC SuperServer SYS-621C-TN12R",
        description: "CloudDC SuperServer SYS-621C-TN12R adalah server kelas enterprise berperforma tinggi yang dirancang untuk kebutuhan data center, cloud computing, dan workload berat seperti virtualisasi, database skala besar, dan AI/enterprise application.",
        image: "https://www.supermicro.com/files_SYS/images/System/SYS-621C-TN12R_main.jpg",
      },
      {
        name: "ASUSTOR NAS LOCKERSTOR 6 Gen3 (AS6806T)",
        description: "ASUSTOR NAS LOCKERSTOR 6 Gen3 (AS6806T) adalah perangkat NAS berperforma tinggi yang dirancang untuk penyimpanan data terpusat, kolaborasi tim, dan kebutuhan bisnis maupun profesional.",
        image: "https://www.asustor.com/images/feature/content_img/AS6806T/banner_model.png",
      },
      {
        name: "ASUS SERVER RS720A-E13-RS24U",
        description: "ASUS Server RS720A-E13-RS24U adalah server rackmount 2U kelas enterprise yang dirancang untuk kebutuhan data center, cloud, virtualisasi, dan workload komputasi intensif.",
        image: "https://dlcdnwebimgs.asus.com/gain/e6cf7181-6156-4bea-a4b7-12f465dc2433/w600",
      },
    ],
  },
  "service-center": {
    title: "Service Center",
    description: "Layanan perbaikan dan maintenance hardware oleh teknisi berpengalaman",
    backgroundImage: "https://img.freepik.com/premium-photo/young-male-technician-fixing-computer-wooden-desk_23-2147922181.jpg",
    products: [
      { name: "Perbaikan Laptop" },
      { name: "Upgrade RAM & SSD" },
      { name: "Install Ulang Windows" },
      { name: "Perbaikan Motherboard" },
      { name: "Cleaning & Maintenance" },
      { name: "Recovery Data" },
      { name: "Perbaikan Printer" },
      { name: "Konsultasi IT" },
    ],
  },
  aksesoris: {
    title: "Aksesoris",
    description: "Keyboard, mouse, headset, dan aksesoris komputer lainnya",
    backgroundImage: "https://i0.wp.com/www.deells.lk/wp-content/uploads/2021/09/logitech-banner-01.png?w=788&ssl=1",
    products: [
      { name: "Keyboard Mechanical" },
      { name: "Mouse Gaming" },
      { name: "Headset Wireless" },
      { name: "Webcam HD" },
      { name: "USB Hub" },
      { name: "Laptop Stand" },
      { name: "Mousepad Gaming" },
      { name: "External SSD" },
    ],
  },
  "cctv-surveillance": {
    title: "CCTV & Surveillance",
    description: "Sistem keamanan dan pengawasan untuk rumah dan bisnis",
    backgroundImage: "https://img.freepik.com/premium-photo/tech-installs-cctv-camera-security-purposes-concept-security-systems-cctv-installation-tech-services-surveillance-cameras_864588-234963.jpg",
    products: [
      { name: "IP Camera Hikvision" },
      { name: "DVR 8 Channel" },
      { name: "NVR Dahua" },
      { name: "CCTV Outdoor" },
      { name: "CCTV Indoor" },
      { name: "Access Control" },
      { name: "Intercom System" },
      { name: "Alarm Security" },
    ],
  },
  "network-firewall": {
    title: "Network & Firewall",
    description: "Router, access point, firewall, dan perangkat jaringan lengkap",
    backgroundImage: "https://completeoffice.co.za/cdn/shop/articles/COS_Website_Blog_Banner_Reyee_Ruijie.png?v=1726557955&width=1000",
    products: [
      { name: "Router MikroTik" },
      { name: "Access Point Ubiquiti" },
      { name: "Firewall Fortinet" },
      { name: "Switch Managed" },
      { name: "Kabel UTP Cat6" },
      { name: "Rack Server" },
      { name: "Modem WiFi" },
      { name: "Network Tools" },
    ],
  },
  "printer-scanner": {
    title: "Printer & Scanner",
    description: "Solusi cetak dan scan untuk kebutuhan kantor dan rumah",
    backgroundImage: "https://iprsoftwaremedia.com/108/files/20214/60909ba5b3aed365d13a686e_Banner%20MNR%20ET%20Photo_ET%20Pro/Banner%20MNR%20ET%20Photo_ET%20Pro_60e877d3-c51b-4909-b57a-d60e2f902159-prv.png",
    products: [
      { name: "Printer Epson EcoTank" },
      { name: "Printer HP LaserJet" },
      { name: "Printer Canon PIXMA" },
      { name: "Scanner Flatbed" },
      { name: "Printer Label" },
      { name: "Tinta Printer Original" },
      { name: "Toner LaserJet" },
      { name: "Kertas A4 Premium" },
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
        {/* Hero with Background Image */}
        <section 
          className="relative py-12 md:py-16"
          style={{
            backgroundImage: `url(${category.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-primary/80" />
          <div className="container relative z-10">
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="group flex flex-col rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="flex h-48 items-center justify-center overflow-hidden rounded-t-xl bg-muted p-4">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-5xl text-muted-foreground/50">📦</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{product.name}</h3>
                    {product.description ? (
                      <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">{product.description}</p>
                    ) : (
                      <p className="mt-1 flex-1 text-sm text-muted-foreground">Hubungi untuk harga terbaik</p>
                    )}
                    <a
                      href={`https://wa.me/6287782524000?text=Halo, saya tertarik dengan ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <Phone className="h-4 w-4" />
                      Tanya Harga
                    </a>
                  </div>
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
