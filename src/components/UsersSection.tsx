import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const UsersSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Generate user avatars
  const users = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    color: [
      "bg-teal-500",
      "bg-indigo-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-purple-500",
      "bg-cyan-500",
      "bg-emerald-500",
      "bg-violet-500",
      "bg-amber-500",
      "bg-lime-500",
      "bg-red-500",
      "bg-pink-500",
      "bg-rose-500",
      "bg-yellow-500",
      "bg-orange-500",
    ][i % 15],
  }));

  return (
    <section
      ref={ref}
      className={`py-20 bg-muted/30 relative overflow-hidden ${
        inView ? "stagger-in" : ""
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-indigo/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-accent-indigo/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* User Avatars Grid */}
          <div className="relative mb-12">
            <div className="grid grid-cols-5 gap-4 max-w-md mx-auto">
              {users.map((user, index) => (
                <div
                  key={user.id}
                  className={`w-12 h-12 ${user.color} rounded-full flex items-center justify-center text-white font-semibold text-sm stagger-in hover:scale-110 transition-transform cursor-pointer`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {user.id}
                </div>
              ))}
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full floating"></div>
            <div
              className="absolute -bottom-8 -right-8 w-12 h-12 bg-accent-indigo/20 rounded-full floating"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-light text-foreground">
              Join{" "}
              <span className="handwritten text-5xl md:text-7xl font-bold text-primary">
                millions
              </span>{" "}
              of users
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Businesses worldwide rely on Pantasys to streamline operations and
              drive growth with our scalable, modular platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  10M+
                </div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  150+
                </div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  40+
                </div>
                <div className="text-muted-foreground">Languages</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mt-12 max-w-2xl mx-auto">
              <div className="text-lg text-muted-foreground italic mb-4">
                "Pantasys unified our operations across multiple tenants, saving
                us time and resources."
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  AS
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    Anna Smith
                  </div>
                  <div className="text-sm text-muted-foreground">
                    COO, GlobalTech
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersSection;
