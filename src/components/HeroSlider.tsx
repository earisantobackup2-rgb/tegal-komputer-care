import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import heroServer from "@/assets/hero-server.jpg";
import heroService from "@/assets/hero-service.webp";
import heroNetwork from "@/assets/hero-network.jpg";
import heroLaptop from "@/assets/hero-laptop.jpg";
import heroPrinter from "@/assets/hero-printer.jpg";

const slides = [
  {
    id: 1,
    title: "PC, Laptop & Mini PC",
    description: "Solusi computing terbaik untuk kebutuhan personal dan bisnis Anda",
    image: heroLaptop,
    link: "/kategori/pc-laptop-minipc",
    showButton: true,
    buttonText: "Lihat Produk PC & Laptop",
  },
  {
    id: 2,
    title: "Server, Storage & NAS",
    description: "Infrastruktur enterprise untuk keamanan dan performa data Anda",
    image: heroServer,
    link: "/kategori/server-storage-nas",
    showButton: true,
    buttonText: "Lihat Produk Server",
  },
  {
    id: 3,
    title: "Printer & Scanner",
    description: "Solusi cetak dan scan berkualitas untuk kebutuhan kantor dan rumah",
    image: heroPrinter,
    link: "/kategori/printer-scanner",
    showButton: true,
    buttonText: "Lihat Produk Printer",
  },
  {
    id: 4,
    title: "Network & Firewall",
    description: "Solusi jaringan dan keamanan lengkap untuk bisnis Anda",
    image: heroNetwork,
    link: "/kategori/network-firewall",
    showButton: true,
    buttonText: "Lihat Produk Network",
  },
  {
    id: 5,
    title: "Service Center",
    description: "Layanan perbaikan dan maintenance dengan teknisi berpengalaman",
    image: heroService,
    link: "/kategori/service-center",
    showButton: false,
    buttonText: "",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative flex h-full items-center">
              <div className="max-w-xl px-4 md:px-0">
                <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
                  {slide.title}
                </h2>
                <p className="mb-6 text-base text-primary-foreground/90 md:text-lg lg:text-xl">
                  {slide.description}
                </p>
                {slide.showButton && (
                  <Link
                    to={slide.link}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 font-medium text-primary transition-all hover:bg-primary-foreground/90 hover:shadow-lg"
                  >
                    {slide.buttonText}
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/30 md:left-4 md:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/30 md:right-4 md:p-3"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 md:h-2.5 ${
              index === currentSlide
                ? "w-6 bg-primary-foreground md:w-8"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60 md:w-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
