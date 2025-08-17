import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full floating"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-accent-orange/5 rounded-full floating"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/5 rounded-full floating"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main heading */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6 leading-tight">
            All your business on{" "}
            <span className="handwritten text-6xl md:text-8xl orange-highlight relative">
              one platform
            </span>
            .
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-2">
            Simple, efficient, yet{" "}
            <span className="handwritten text-3xl md:text-4xl font-semibold text-foreground">
              affordable!
            </span>
          </p>

          {/* Pricing highlight */}
          <div className="flex items-center justify-center mt-6 mb-8">
            <div className="relative">
              <div className="handwritten text-lg text-muted-foreground transform rotate-2">
                <svg
                  className="absolute -top-2 -left-8 w-16 h-8 text-muted-foreground opacity-60"
                  viewBox="0 0 64 32"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M8 24C16 8 32 8 48 16C52 18 56 20 60 16"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                ₹580.00 Rs / month
              </div>
              <div className="handwritten text-sm text-muted-foreground mt-1">
                for ALL apps
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button className="btn-primary px-8 py-3 text-lg rounded-lg font-medium min-w-[200px]">
            Start now - It's free
          </Button>

          <div className="relative">
            <Button
              variant="outline"
              className="btn-secondary px-8 py-3 text-lg rounded-lg font-medium min-w-[200px] group"
            >
              Meet an advisor
              <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Event banner */}
        <div className="inline-flex items-center bg-card border border-border rounded-xl px-6 py-4 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="w-6 h-4 bg-gradient-to-r from-red-500 via-white to-red-500 rounded-sm"></div>
            <span className="text-sm text-muted-foreground">
              Marketing Day 2025 - INDIA
            </span>
            <span className="text-sm text-muted-foreground">Aug 14, 2025</span>
            <Button
              variant="link"
              className="text-primary p-0 h-auto font-medium"
            >
              Register →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
