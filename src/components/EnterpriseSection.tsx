import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const EnterpriseSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`py-20 bg-background ${inView ? "stagger-in" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Enterprise{" "}
              <span className="handwritten text-5xl md:text-6xl text-primary font-bold">
                solutions
              </span>
              <br />
              built to scale
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Designed for Growth
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Pantasys’ modular architecture supports businesses from
                  startups to enterprises with seamless scalability and
                  customization.
                </p>
                <ul className="space-y-3">
                  {[
                    "99.9% uptime guarantee",
                    "Role-based access control",
                    "24/7 enterprise support",
                    "API-first integrations",
                    "Multi-tenant architecture",
                    "Automated testing suite",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Button className="btn-primary px-8 py-3 text-lg">
                  Contact Enterprise Sales
                </Button>
              </div>
            </div>

            {/* Right Side - Mock Interface */}
            <div className="relative">
              <div className="bg-card rounded-3xl border border-border shadow-strong p-8">
                {/* Mock Enterprise Dashboard */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <h4 className="font-semibold text-foreground">
                      Control Center
                    </h4>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Tenants Overview */}
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-3">
                      Active Tenants
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Client A", users: "1,245", status: "active" },
                        { name: "Division B", users: "892", status: "active" },
                        { name: "Branch C", users: "567", status: "active" },
                        {
                          name: "Region D",
                          users: "334",
                          status: "maintenance",
                        },
                      ].map((tenant, index) => (
                        <div key={index} className="bg-muted/30 rounded-lg p-3">
                          <div className="font-medium text-sm text-foreground">
                            {tenant.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {tenant.users} users
                          </div>
                          <div
                            className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                              tenant.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {tenant.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* System Health */}
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-3">
                      System Health
                    </div>
                    <div className="space-y-2">
                      {[
                        {
                          metric: "Server Load",
                          value: "23%",
                          color: "bg-green-500",
                        },
                        {
                          metric: "Database",
                          value: "87%",
                          color: "bg-yellow-500",
                        },
                        {
                          metric: "API Response",
                          value: "45ms",
                          color: "bg-green-500",
                        },
                      ].map((metric, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-foreground">
                            {metric.metric}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-2 h-2 ${metric.color} rounded-full`}
                            ></div>
                            <span className="text-sm font-medium text-foreground">
                              {metric.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Enterprise
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent-indigo text-accent-indigo-foreground px-3 py-1 rounded-full text-sm font-medium">
                Secure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
