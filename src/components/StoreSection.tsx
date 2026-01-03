import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import storePhoto from "@/assets/store-photo.jpg";

const StoreSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Kunjungi Toko Kami
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Datang langsung ke toko kami untuk konsultasi dan melihat produk secara langsung
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Store Image */}
          <div className="overflow-hidden rounded-2xl shadow-elevated">
            <img
              src={storePhoto}
              alt="Toko Indo Komputer Tegal"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info & Map */}
          <div className="flex flex-col gap-6">
            {/* Contact Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-card">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Alamat</h3>
                  <p className="text-sm text-muted-foreground">
                    Jl. Mayor Jenderal Sutoyo No. 14, Kel. Pekauman, Kec. Tegal Barat, Kota Tegal, Jawa Tengah 52125
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-card">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Telepon</h3>
                  <p className="text-sm text-muted-foreground">(0283) 343500</p>
                  <a
                    href="https://wa.me/6287782524000"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    +62 877-8252-4000 (WA)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-card">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Jam Operasional</h3>
                  <p className="text-sm text-muted-foreground">Senin – Sabtu: 08:30 – 17:00 WIB</p>
                  <p className="text-sm text-destructive">Minggu: Tutup</p>
                </div>
              </div>

              <a
                href="https://wa.me/6287782524000"
                className="flex items-start gap-4 rounded-xl bg-gradient-primary p-4 text-primary-foreground shadow-card transition-all hover:shadow-glow"
              >
                <div className="rounded-lg bg-primary-foreground/20 p-3">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">Hubungi via WhatsApp</h3>
                  <p className="text-sm text-primary-foreground/80">Chat sekarang untuk konsultasi</p>
                </div>
              </a>
            </div>

            {/* Google Maps */}
            <div className="overflow-hidden rounded-xl shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1763230492747!2d109.1321026!3d-6.8694643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9d63631bbe7%3A0x433649f30b7de406!2sIndo%20Komputer!5e0!3m2!1sid!2sid!4v1767449640676!5m2!1sid!2sid"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Indo Komputer Tegal"
                className="grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
