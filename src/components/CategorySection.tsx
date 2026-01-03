import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "PC, Laptop & Mini PC",
    description: "Desktop, Notebook, All-in-One, dan Mini PC untuk semua kebutuhan",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    slug: "pc-laptop-minipc",
  },
  {
    id: 2,
    name: "Server, Storage & NAS",
    description: "Solusi penyimpanan data enterprise dan server terpercaya",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    slug: "server-storage-nas",
  },
  {
    id: 3,
    name: "Service Center",
    description: "Perbaikan dan maintenance hardware oleh teknisi berpengalaman",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    slug: "service-center",
  },
  {
    id: 4,
    name: "Aksesoris",
    description: "Keyboard, mouse, headset, dan aksesoris komputer lainnya",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
    slug: "aksesoris",
  },
  {
    id: 5,
    name: "CCTV & Surveillance",
    description: "Sistem keamanan dan pengawasan untuk rumah dan bisnis",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop",
    slug: "cctv-surveillance",
  },
  {
    id: 6,
    name: "Network & Firewall",
    description: "Router, access point, firewall, dan perangkat jaringan",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    slug: "network-firewall",
  },
  {
    id: 7,
    name: "Printer & Scanner",
    description: "Solusi cetak dan scan untuk kebutuhan kantor dan rumah",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop",
    slug: "printer-scanner",
  },
];

const CategorySection = () => {
  return (
    <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
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
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/kategori/${category.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated md:rounded-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden md:h-40">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="mb-1 font-heading text-sm font-semibold text-foreground md:mb-2 md:text-base lg:text-lg">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 md:text-sm">
                  {category.description}
                </p>

                <div className="mt-3 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-4 md:text-sm">
                  Lihat Produk
                  <svg className="ml-1 h-3 w-3 md:h-4 md:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
