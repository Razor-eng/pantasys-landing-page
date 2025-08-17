import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">odoo</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Apps
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Industries
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Help
            </a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
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