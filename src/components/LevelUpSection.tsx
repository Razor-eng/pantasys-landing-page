const LevelUpSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-foreground">
              <span className="handwritten text-5xl md:text-7xl orange-highlight">
                Level up
              </span>{" "}
              your quality of work
            </h2>
          </div>

          {/* Chat mockup section */}
          <div className="relative max-w-4xl mx-auto">
            {/* Background mockup */}
            <div className="bg-card rounded-3xl p-8 shadow-medium relative overflow-hidden min-h-[400px]">
              {/* Abstract background shapes */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent-orange/10 rounded-full"></div>
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
                        Hey Katie! 👋 Can you help with the production, please?
                      </p>
                    </div>
                  </div>

                  {/* Second message */}
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-green-50 rounded-2xl rounded-tr-md p-4 max-w-md">
                      <p className="text-foreground">
                        No problem, I'll do the production planning right away!
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
            <div className="absolute -top-8 -right-8 bg-yellow-100 rounded-2xl p-6 shadow-medium transform rotate-6 max-w-xs">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">💬</span>
                </div>
                <div className="ml-6">
                  <p className="text-foreground text-sm italic">
                    "If you simplify everything, you can do anything!"
                  </p>
                  <p className="text-muted-foreground text-xs mt-2">
                    - Bill McDermott, former CEO of SAP
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

export default LevelUpSection;
