import { Phone, Clock, MapPin } from "lucide-react";
import logo from "@/assets/logo-indo-komputer.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(0283) 343500</span>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <Clock className="h-4 w-4" />
              <span>Senin–Sabtu 08:30–17:00 WIB</span>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <MapPin className="h-4 w-4" />
            <span className="max-w-xs truncate">Jl. Mayor Jenderal Sutoyo No. 14, Tegal</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-border bg-card/95 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary p-1">
              <img src={logo} alt="Indo Komputer" className="h-full w-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold text-foreground">Indo Komputer</h1>
              <p className="text-xs text-muted-foreground">Tegal</p>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/6287782524000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 font-medium text-primary-foreground transition-all hover:shadow-glow"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="hidden sm:inline">Hubungi Kami</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
