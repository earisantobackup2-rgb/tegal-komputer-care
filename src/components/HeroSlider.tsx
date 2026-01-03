import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Laptop, Server, Wrench, Wifi } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "PC, Laptop & Mini PC",
    description: "Solusi computing terbaik untuk kebutuhan personal dan bisnis Anda",
    icon: Laptop,
    color: "from-primary to-primary/80",
  },
  {
    id: 2,
    title: "Server, Storage & NAS",
    description: "Infrastruktur enterprise untuk keamanan dan performa data Anda",
    icon: Server,
    color: "from-primary/90 to-primary/70",
  },
  {
    id: 3,
    title: "Service Center",
    description: "Layanan perbaikan dan maintenance dengan teknisi berpengalaman",
    icon: Wrench,
    color: "from-primary/80 to-primary/60",
  },
  {
    id: 4,
    title: "Network & Security",
    description: "Solusi jaringan dan keamanan lengkap untuk bisnis Anda",
    icon: Wifi,
    color: "from-primary/85 to-primary/65",
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
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative py-16 md:py-24">
        <div className="relative min-h-[280px] md:min-h-[320px]">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-foreground/20 backdrop-blur-sm md:h-24 md:w-24">
                  <Icon className="h-10 w-10 text-primary-foreground md:h-12 md:w-12" />
                </div>
                <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
                  {slide.title}
                </h2>
                <p className="max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
                  {slide.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-primary-foreground"
                  : "w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
