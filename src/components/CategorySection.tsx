import { Laptop, Server, Wrench, Headphones, Camera, Wifi, Printer } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "PC, Laptop & Mini PC",
    description: "Desktop, Notebook, All-in-One, dan Mini PC untuk semua kebutuhan",
    icon: Laptop,
    slug: "pc-laptop-minipc",
  },
  {
    id: 2,
    name: "Server, Storage & NAS",
    description: "Solusi penyimpanan data enterprise dan server terpercaya",
    icon: Server,
    slug: "server-storage-nas",
  },
  {
    id: 3,
    name: "Service Center",
    description: "Perbaikan dan maintenance hardware oleh teknisi berpengalaman",
    icon: Wrench,
    slug: "service-center",
  },
  {
    id: 4,
    name: "Aksesoris",
    description: "Keyboard, mouse, headset, dan aksesoris komputer lainnya",
    icon: Headphones,
    slug: "aksesoris",
  },
  {
    id: 5,
    name: "CCTV & Surveillance",
    description: "Sistem keamanan dan pengawasan untuk rumah dan bisnis",
    icon: Camera,
    slug: "cctv-surveillance",
  },
  {
    id: 6,
    name: "Network & Firewall",
    description: "Router, access point, firewall, dan perangkat jaringan",
    icon: Wifi,
    slug: "network-firewall",
  },
  {
    id: 7,
    name: "Printer & Scanner",
    description: "Solusi cetak dan scan untuk kebutuhan kantor dan rumah",
    icon: Printer,
    slug: "printer-scanner",
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Kategori Produk
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            Temukan berbagai produk IT berkualitas untuk kebutuhan personal dan bisnis Anda
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/kategori/${category.slug}`}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated md:rounded-2xl md:p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150 md:-right-8 md:-top-8 md:h-24 md:w-24" />
                
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary md:mb-4 md:rounded-xl md:p-3">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                
                <h3 className="mb-1 font-heading text-sm font-semibold text-foreground md:mb-2 md:text-lg">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground md:text-sm">
                  {category.description}
                </p>

                <div className="mt-3 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-4 md:text-sm">
                  Lihat Produk
                  <svg className="ml-1 h-3 w-3 md:h-4 md:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
