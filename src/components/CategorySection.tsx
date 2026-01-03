import { Laptop, Server, Wrench, Headphones, Camera, Wifi, Printer } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "PC, Laptop & Mini PC",
    description: "Desktop, Notebook, All-in-One, dan Mini PC untuk semua kebutuhan",
    icon: Laptop,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    name: "Server, Storage & NAS",
    description: "Solusi penyimpanan data enterprise dan server terpercaya",
    icon: Server,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 3,
    name: "Service Center",
    description: "Perbaikan dan maintenance hardware oleh teknisi berpengalaman",
    icon: Wrench,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 4,
    name: "Aksesoris",
    description: "Keyboard, mouse, headset, dan aksesoris komputer lainnya",
    icon: Headphones,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 5,
    name: "CCTV & Surveillance",
    description: "Sistem keamanan dan pengawasan untuk rumah dan bisnis",
    icon: Camera,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 6,
    name: "Network & Firewall",
    description: "Router, access point, firewall, dan perangkat jaringan",
    icon: Wifi,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 7,
    name: "Printer & Scanner",
    description: "Solusi cetak dan scan untuk kebutuhan kantor dan rumah",
    icon: Printer,
    color: "bg-primary/10 text-primary",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Kategori Produk
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Temukan berbagai produk IT berkualitas untuk kebutuhan personal dan bisnis Anda
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <a
                key={category.id}
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                
                <div className={`mb-4 inline-flex rounded-xl p-3 ${category.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>

                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lihat Produk
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
