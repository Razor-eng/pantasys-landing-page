import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

const PricingSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const plans = [
    {
      name: "Starter",
      price: "₹499.00",
      period: "month",
      description:
        "Perfect for small businesses getting started with core modules.",
      features: [
        { text: "CRM, Accounting, Asset Management", icon: "💼" },
        { text: "Up to 5 users", icon: "👥" },
        { text: "Basic API integrations", icon: "🔗" },
        { text: "Standard support", icon: "📞" },
        { text: "Single-tenant environment", icon: "🏠" },
      ],
      cta: "Start for Free",
      isFree: true,
      recommended: false,
    },
    {
      name: "Professional",
      price: "₹1,999.00",
      period: "month",
      description: "Ideal for growing businesses needing advanced features.",
      features: [
        { text: "All Starter features", icon: "✅" },
        { text: "LMS and Payment Processing", icon: "📚" },
        { text: "Up to 25 users", icon: "👥" },
        { text: "Advanced API integrations", icon: "🔗" },
        { text: "Priority support", icon: "📞" },
        { text: "Multi-tenant support", icon: "🌐" },
      ],
      cta: "Get Started",
      isFree: false,
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored for large organizations with complex needs.",
      features: [
        { text: "All Professional features", icon: "✅" },
        { text: "Unlimited users", icon: "👥" },
        { text: "Custom integrations & workflows", icon: "⚙️" },
        { text: "24/7 enterprise support", icon: "📞" },
        { text: "Dedicated account manager", icon: "👤" },
        { text: "Advanced security & compliance", icon: "🔒" },
      ],
      cta: "Contact Sales",
      isFree: false,
      recommended: false,
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-20 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden ${
        inView ? "stagger-in" : ""
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full floating"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-accent-indigo/10 rounded-full floating"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/10 rounded-full floating"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-4">
              <span className="handwritten text-5xl md:text-7xl text-primary font-bold">
                Affordable
              </span>{" "}
              Plans for All
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose a plan tailored to your business. Start free, scale
              seamlessly with Pantasys.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-card flex flex-col rounded-2xl border border-border shadow-medium hover:shadow-strong transition-all duration-300 group hover:scale-105 ${
                  plan.recommended
                    ? "border-primary scale-105 bg-gradient-card"
                    : ""
                } stagger-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-indigo text-accent-indigo-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Recommended
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className="">
                    <h3 className="text-3xl handwritten font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    <div className="text-4xl font-bold text-primary mb-4">
                      {plan.price}
                      {plan.period && (
                        <span className="text-lg text-muted-foreground">
                          /{plan.period}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <span className="text-xl">{feature.icon}</span>
                          <span className="text-foreground">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className={`w-full text-lg font-medium ${
                      plan.isFree
                        ? "btn-primary bg-gradient-to-r from-primary to-primary/50"
                        : plan.name === "Enterprise"
                        ? "btn-secondary border-2 border-primary"
                        : "btn-primary"
                    } group-hover:shadow-medium group-hover:-translate-y-1`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All plans include Pantasys’ API-first architecture, role-based
              access control, multi-language support, and regular updates.
            </p>
            <a
              href="#"
              className="text-primary hover:underline font-medium mt-4 flex items-center"
            >
              Compare all features
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
