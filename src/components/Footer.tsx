import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <footer
      ref={ref}
      className={`bg-foreground text-background ${inView ? "stagger-in" : ""}`}
    >
      {/* CTA Section */}
      <div className="py-20">
        <div className="container relative mx-auto px-4 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <div className="w-8 h-1 bg-accent-indigo transform rotate-12"></div>
              <div className="w-6 h-1 bg-accent-indigo transform rotate-45"></div>
              <div className="w-4 h-1 bg-accent-indigo transform -rotate-12"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light mb-8">
            <span className="handwritten text-5xl md:text-7xl text-accent-indigo font-bold">
              Transform
            </span>
            <br />
            your business today!
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Ready to streamline your operations? Start your free trial with
            Pantasys and experience modular excellence.
          </p>
          <Button className="bg-accent-indigo hover:bg-accent-indigo/90 text-accent-indigo-foreground px-8 py-3 text-lg font-medium">
            Start for free
          </Button>
          <div className="flex flex-col items-center mt-6 space-y-2">
            <div className="flex items-center text-teal-400">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="text-sm text-muted-foreground">Instant access</div>
          </div>
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
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Modules */}
            <div>
              <h3 className="font-semibold text-background mb-4">Modules</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    CRM
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    LMS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Accounting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Asset Management
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-background mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-background mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Bug Report
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Feature Request
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-background mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Compliance
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-background mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    YouTube
                  </a>
                </li>
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
              <span className="text-2xl font-bold text-background">
                Pantasys
              </span>
              <span className="text-background/60">
                © 2025 Pantasys Technologies
              </span>
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
