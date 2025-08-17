import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const QualitySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`py-20 bg-muted/30 ${inView ? "stagger-in" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-foreground">
              <span className="handwritten text-5xl md:text-7xl indigo-highlight">
                Streamline
              </span>{" "}
              your operations
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            {/* Chat mockup section */}
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Background mockup */}
              <div className="bg-card rounded-3xl p-8 shadow-medium relative overflow-hidden min-h-[400px]">
                {/* Abstract background shapes */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent-indigo/10 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full"></div>
                </div>

                {/* Chat interface mockup */}
                <div className="relative z-10 max-w-2xl mx-auto">
                  {/* Chat messages */}
                  <div className="space-y-6">
                    {/* First message */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">👨‍💼</span>
                      </div>
                      <div className="bg-blue-50 rounded-2xl rounded-tl-md p-4 max-w-md">
                        <p className="text-foreground">
                          Hey Team! 👋 Can you update the CRM pipeline?
                        </p>
                      </div>
                    </div>

                    {/* Second message */}
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-green-50 rounded-2xl rounded-tr-md p-4 max-w-md">
                        <p className="text-foreground">
                          Done! Pipeline updated and synced across all tenants.
                          ✅
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">👩‍💼</span>
                      </div>
                    </div>
                  </div>

                  {/* Video controls */}
                  <div className="flex items-center justify-center mt-12 space-x-4">
                    <button className="w-3 h-3 bg-primary rounded-full"></button>
                    <div className="w-48 h-1 bg-muted rounded-full">
                      <div className="w-1/3 h-full bg-primary rounded-full"></div>
                    </div>
                    <button className="w-3 h-3 bg-muted rounded-full"></button>
                  </div>
                </div>
              </div>

              {/* Quote bubble */}
              <div className="absolute -top-8 -right-8 bg-indigo-100 rounded-2xl p-6 shadow-medium transform rotate-6 max-w-xs">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center">
                    <span className="text-sm">💬</span>
                  </div>
                  <div className="ml-6">
                    <p className="text-foreground text-sm italic">
                      "Pantasys simplifies complex operations with elegance!"
                    </p>
                    <p className="text-muted-foreground text-xs mt-2">
                      - Jane Smith, CTO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Real-time Insights
                  </h3>
                  <p className="text-muted-foreground">
                    Gain instant visibility into your operations with real-time
                    dashboards across all modules.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Workflow Automation
                  </h3>
                  <p className="text-muted-foreground">
                    Automate repetitive tasks to boost efficiency and focus on
                    strategic growth.
                  </p>
                </div>
              </div>

              {/* Center Column - Main Feature */}
              <div className="md:col-span-1">
                <div className="bg-card rounded-3xl p-8 shadow-medium hover:shadow-strong transition-all h-full">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent-indigo/10 rounded-2xl flex items-center justify-center mb-6">
                    <div className="w-32 h-32 bg-card rounded-xl shadow-soft flex items-center justify-center">
                      <span className="text-4xl">🔗</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    API-First Integration
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Seamlessly connect Pantasys with third-party systems via our
                    robust API.
                  </p>
                  <Button className="btn-primary w-full">
                    Explore Integrations
                  </Button>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Robust Security
                  </h3>
                  <p className="text-muted-foreground">
                    Role-based access control and environment separation ensure
                    data protection.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Scalable Architecture
                  </h3>
                  <p className="text-muted-foreground">
                    Built on Yii2, Pantasys scales effortlessly with your
                    business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
