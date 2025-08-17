import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <header
      ref={ref}
      className={`w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 ${
        inView ? "stagger-in" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Pantasys</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Modules
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Community
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Support
            </a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary"
            >
              Sign in
            </Button>
            <Button className="btn-primary px-6 py-2 rounded-lg font-medium">
              Try it free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
