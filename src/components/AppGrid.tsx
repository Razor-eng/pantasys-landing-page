const apps = [
  { name: "Accounting", icon: "💼", color: "bg-purple-100" },
  { name: "Knowledge", icon: "📚", color: "bg-green-100" },
  { name: "Sign", icon: "✍️", color: "bg-blue-100" },
  { name: "CRM", icon: "💎", color: "bg-teal-100" },
  { name: "Studio", icon: "⚡", color: "bg-indigo-100" },
  { name: "Subscriptions", icon: "🔄", color: "bg-orange-100" },
  
  { name: "Rental", icon: "🔑", color: "bg-red-100" },
  { name: "Point of Sale", icon: "🏪", color: "bg-yellow-100" },
  { name: "Discuss", icon: "💬", color: "bg-orange-100" },
  { name: "Documents", icon: "📁", color: "bg-blue-100" },
  { name: "Project", icon: "✅", color: "bg-green-100" },
  { name: "Timesheets", icon: "⏰", color: "bg-gray-100" },
  
  { name: "Field Service", icon: "⚡", color: "bg-purple-100" },
  { name: "Planning", icon: "📋", color: "bg-yellow-100" },
  { name: "Helpdesk", icon: "🏥", color: "bg-teal-100" },
  { name: "Website", icon: "🌐", color: "bg-blue-100" },
  { name: "Social Marketing", icon: "📱", color: "bg-red-100" },
  { name: "Email Marketing", icon: "📧", color: "bg-indigo-100" },
];

const AppGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {apps.map((app, index) => (
              <div
                key={app.name}
                className="app-icon group cursor-pointer stagger-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-soft hover:shadow-medium group-hover:bg-card-gradient">
                  <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {app.icon}
                  </div>
                  <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {app.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              From your contacts to your closing dates, from your vendors to your P&L, 
              one single platform brings together all your teams and business activities.
            </p>
            <div className="mt-8">
              <a href="#" className="text-primary hover:underline font-medium">
                Browse all apps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppGrid;