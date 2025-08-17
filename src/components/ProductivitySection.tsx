import { useInView } from 'react-intersection-observer';

const ProductivitySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className={`py-20 bg-background ${inView ? 'stagger-in' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              <span className="handwritten text-5xl md:text-6xl indigo-highlight">
                Optimized
              </span>{" "}
              for productivity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline your workflows with Pantasys’ integrated modules and automation features.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {/* Dashboard Preview */}
            <div className="relative">
              <div className="bg-card rounded-3xl border border-border shadow-strong p-8 overflow-hidden">
                {/* Mock Dashboard Interface */}
                <div className="space-y-6">
                  {/* Top Navigation */}
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-lg"></div>
                      <span className="font-semibold text-foreground">
                        Dashboard
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-muted rounded"></div>
                      <div className="w-6 h-6 bg-muted rounded"></div>
                      <div className="w-6 h-6 bg-muted rounded"></div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { title: "Revenue", value: "₹1,24,500", trend: "+12%" },
                      { title: "Leads", value: "2,345", trend: "+8%" },
                      { title: "Clients", value: "15,678", trend: "+23%" },
                      { title: "Courses", value: "34", trend: "+5%" },
                    ].map((stat, index) => (
                      <div key={index} className="bg-muted/50 rounded-xl p-4">
                        <div className="text-sm text-muted-foreground mb-1">
                          {stat.title}
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </div>
                        <div className="text-sm text-green-600">
                          {stat.trend}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 rounded-xl p-6 h-48">
                      <div className="text-sm font-medium text-foreground mb-4">
                        Sales Overview
                      </div>
                      <div className="space-y-3">
                        {[80, 65, 90, 45, 75].map((height, index) => (
                          <div key={index} className="flex items-end space-x-2">
                            <div
                              className="bg-primary rounded-sm"
                              style={{ width: "20px", height: `${height}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6 h-48">
                      <div className="text-sm font-medium text-foreground mb-4">
                        Recent Activity
                      </div>
                      <div className="space-y-3">
                        {[
                          "New lead added",
                          "Course completed",
                          "Invoice generated",
                          "Payment processed",
                        ].map((activity, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                              {activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-indigo/20 rounded-full floating"></div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full floating"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Task Preview */}
            <div className="relative">
              {/* Indigo accent lines */}
              <div className="absolute top-0 left-0 w-32 h-1 bg-accent-indigo rounded-full"></div>
              <div className="absolute top-20 right-0 w-24 h-1 bg-accent-indigo rounded-full"></div>
              <div className="absolute bottom-0 left-1/4 w-40 h-1 bg-accent-indigo rounded-full"></div>
              <div className="absolute bottom-20 right-1/3 w-16 h-1 bg-accent-indigo rounded-full"></div>

              {/* Interface mockups */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left sidebar mockup */}
                <div className="lg:col-span-3">
                  <div className="bg-card rounded-2xl shadow-medium p-4 space-y-3">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>

                    {/* Activity list */}
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center space-x-2 p-2 bg-red-50 rounded">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>Tasks - 0 Late, 1 Today</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>Training - 0 Late, 1 Today</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>Invoices - 0 Late, 6 Today</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>Assets - 0 Late, 2 Today</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center content */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Project cards */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card rounded-2xl p-6 shadow-medium">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Lead Review</h3>
                        <span className="text-2xl">📋</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mb-4">
                        <div className="w-3/4 bg-indigo-400 h-2 rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-muted rounded-full"></div>
                        <div className="w-6 h-6 bg-muted rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-card rounded-2xl p-6 shadow-medium">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Course Design</h3>
                        <span className="text-2xl">📚</span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                          LMS Module
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          In Progress
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-muted rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Asset Management */}
                  <div className="bg-card rounded-2xl p-6 shadow-medium">
                    <h3 className="font-semibold mb-4">Asset Overview</h3>
                    <div className="bg-muted/30 rounded-xl p-4 h-48 flex items-center justify-center">
                      <div className="text-4xl">🏢</div>
                    </div>
                  </div>
                </div>

                {/* Right chat mockup */}
                <div className="lg:col-span-3">
                  <div className="bg-card rounded-2xl shadow-medium p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">general</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-muted rounded-full"></div>
                        <div>
                          <div className="font-medium">PantasysBot</div>
                          <div className="text-muted-foreground">
                            Welcome to the #general channel.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-muted rounded-full"></div>
                        <div>
                          <div className="font-medium">Team Lead</div>
                          <div className="text-muted-foreground">
                            New assets added to tenant A’s inventory.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom text */}
              <div className="text-center mt-16">
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  <strong>Experience true efficiency</strong>, with seamless workflows,
                </p>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  AI-driven automation, and a unified interface. Operations run
                </p>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  faster than ever with Pantasys.
                </p>

                {/* Video button */}
                <div className="mt-8">
                  <button className="flex items-center justify-center mx-auto space-x-3 text-primary hover:underline">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm">▶️</span>
                    </div>
                    <span className="handwritten text-lg">
                      See Pantasys in Action
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivitySection;