import { useInView } from "react-intersection-observer";

const DevicesSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            <span className="handwritten text-5xl md:text-6xl text-primary font-bold">
              All-in-one
            </span>{" "}
            platform
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Access Pantasys from any device—desktop, laptop, tablet, or
            mobile—with real-time sync and secure multi-tenant environments.
          </p>

          {/* Device Mockups */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Desktop */}
              <div className="stagger-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all group">
                  <div className="bg-muted/50 rounded-xl p-4 mb-4 aspect-[4/3] flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent-indigo/10 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">🖥️</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Desktop
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Full-featured experience
                  </p>
                </div>
              </div>

              {/* Laptop */}
              <div className="stagger-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all group">
                  <div className="bg-muted/50 rounded-xl p-4 mb-4 aspect-[4/3] flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent-indigo/10 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">💻</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Laptop
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Work from anywhere
                  </p>
                </div>
              </div>

              {/* Tablet */}
              <div className="stagger-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all group">
                  <div className="bg-muted/50 rounded-xl p-4 mb-4 aspect-[4/3] flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent-indigo/10 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">📱</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Tablet
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Touch-optimized interface
                  </p>
                </div>
              </div>

              {/* Mobile */}
              <div className="stagger-in" style={{ animationDelay: "0.4s" }}>
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all group">
                  <div className="bg-muted/50 rounded-xl p-4 mb-4 aspect-[4/3] flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent-indigo/10 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">📲</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Mobile
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Always accessible
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Cloud-Based
                </h3>
                <p className="text-muted-foreground">
                  Securely store and access data from anywhere
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-indigo/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Real-time Sync
                </h3>
                <p className="text-muted-foreground">
                  Instant updates across devices and tenants
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📴</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Offline Ready
                </h3>
                <p className="text-muted-foreground">
                  Work seamlessly without internet connectivity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
