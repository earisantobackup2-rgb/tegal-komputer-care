const brands = [
  { name: "ASUS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/200px-ASUS_Logo.svg.png" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/200px-Lenovo_logo_2015.svg.png" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/200px-Dell_Logo.svg.png" },
  { name: "Gigabyte", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gigabyte_Technology_logo_20080107.svg/200px-Gigabyte_Technology_logo_20080107.svg.png" },
  { name: "Epson", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Epson_logo.svg/200px-Epson_logo.svg.png" },
  { name: "Canon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Canon_wordmark.svg/200px-Canon_wordmark.svg.png" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/150px-HP_logo_2012.svg.png" },
  { name: "Fortinet", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/200px-Fortinet_logo.svg.png" },
  { name: "Synology", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Synology_logo.svg/200px-Synology_logo.svg.png" },
  { name: "Kingston", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kingston_Technology_logo.svg/200px-Kingston_Technology_logo.svg.png" },
  { name: "ADATA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/ADATA_Logo.svg/200px-ADATA_Logo.svg.png" },
  { name: "MSI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/MSI_Logo.svg/200px-MSI_Logo.svg.png" },
];

const BrandSection = () => {
  return (
    <section className="border-y border-border bg-muted/30 py-12 md:py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Brand Partner Kami
          </h2>
          <p className="text-muted-foreground">
            Produk original dari brand-brand terpercaya
          </p>
        </div>

        <div className="grid grid-cols-3 items-center gap-6 sm:grid-cols-4 md:grid-cols-6 lg:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex items-center justify-center rounded-xl bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-card"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 max-w-full object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-10"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
