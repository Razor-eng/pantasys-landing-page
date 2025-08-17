import { Button } from "@/components/ui/button";

const QualitySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-16">
            <span className="handwritten text-5xl md:text-6xl orange-highlight">
              Develop
            </span>{" "}
            your quality of work
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Real-time dashboards</h3>
                <p className="text-muted-foreground">
                  Monitor your business performance with beautiful, customizable dashboards that update in real-time.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Smart automation</h3>
                <p className="text-muted-foreground">
                  Automate repetitive tasks and focus on what matters most for your business growth.
                </p>
              </div>
            </div>

            {/* Center Column - Main Feature */}
            <div className="md:col-span-1">
              <div className="bg-card rounded-3xl p-8 shadow-medium hover:shadow-strong transition-all h-full">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent-orange/10 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-32 h-32 bg-card rounded-xl shadow-soft flex items-center justify-center">
                    <span className="text-4xl">📈</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Integrated Analytics</h3>
                <p className="text-muted-foreground mb-6">
                  Get comprehensive insights across all your business operations with our integrated analytics suite.
                </p>
                <Button className="btn-primary w-full">
                  Explore Analytics
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Enterprise security</h3>
                <p className="text-muted-foreground">
                  Bank-level security with advanced encryption and compliance standards built-in.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Scalable platform</h3>
                <p className="text-muted-foreground">
                  Grow your business without limits. Our platform scales with your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;