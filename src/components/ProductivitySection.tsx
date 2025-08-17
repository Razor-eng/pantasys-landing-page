const ProductivitySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              <span className="handwritten text-5xl md:text-6xl orange-highlight">
                Optimized
              </span>{" "}
              for productivity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every feature is designed to help your teams work more efficiently and get more done.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="bg-card rounded-3xl border border-border shadow-strong p-8 overflow-hidden">
              {/* Mock Dashboard Interface */}
              <div className="space-y-6">
                {/* Top Navigation */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                    <span className="font-semibold text-foreground">Dashboard</span>
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
                    { title: "Revenue", value: "$124,500", trend: "+12%" },
                    { title: "Orders", value: "2,345", trend: "+8%" },
                    { title: "Customers", value: "15,678", trend: "+23%" },
                    { title: "Growth", value: "34.5%", trend: "+5%" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-muted/50 rounded-xl p-4">
                      <div className="text-sm text-muted-foreground mb-1">{stat.title}</div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-green-600">{stat.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-xl p-6 h-48">
                    <div className="text-sm font-medium text-foreground mb-4">Sales Overview</div>
                    <div className="space-y-3">
                      {[80, 65, 90, 45, 75].map((height, index) => (
                        <div key={index} className="flex items-end space-x-2">
                          <div 
                            className="bg-primary rounded-sm" 
                            style={{ width: '20px', height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-xl p-6 h-48">
                    <div className="text-sm font-medium text-foreground mb-4">Recent Activity</div>
                    <div className="space-y-3">
                      {[
                        "New order received",
                        "Customer support ticket",
                        "Invoice generated",
                        "Payment processed"
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-orange/20 rounded-full floating"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full floating" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivitySection;