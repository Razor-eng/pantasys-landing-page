import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            <span className="handwritten text-5xl md:text-6xl text-accent-orange font-bold">
              Unleash
            </span>
            <br />
            your growth potential!
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Ready to transform your business? Start your free trial today and see why millions choose Odoo.
          </p>
          <Button className="bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground px-8 py-3 text-lg font-medium">
            Start for free
          </Button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-background/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Company */}
            <div>
              <h3 className="font-semibold text-background mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">About</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Jobs</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Press</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Partners</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-background mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Sales</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Accounting</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Inventory</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">CRM</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-background mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Documentation</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Training</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Support</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-background mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Bug Report</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Feature Request</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-background mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Privacy</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Terms</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Security</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Compliance</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-background mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Twitter</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Facebook</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-2xl font-bold text-background">odoo</span>
              <span className="text-background/60">© 2024 Odoo S.A.</span>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-transparent border border-background/20 rounded px-3 py-1 text-background text-sm">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;