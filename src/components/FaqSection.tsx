import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useInView } from "react-intersection-observer";

const FAQSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Pantasys?",
      answer:
        "Pantasys is a modular, enterprise-grade business management platform built on the Yii2 PHP framework. It offers a suite of integrated modules like CRM, LMS, Accounting, Payment Processing, Asset Management, and Multi-Tenancy, designed for scalability, security, and flexibility to streamline business operations.",
    },
    {
      question: "How does Pantasys support multi-tenancy?",
      answer:
        "Pantasys supports multi-tenancy by providing isolated environments for each client or business division within a single platform instance. This ensures secure data separation, independent configurations, and role-based access control, making it ideal for SaaS providers or companies with multiple subsidiaries.",
    },
    {
      question: "Can I integrate Pantasys with other systems?",
      answer:
        "Yes, Pantasys is designed with an API-first architecture, enabling seamless integration with third-party systems such as ERPs, marketing tools, or custom applications. This allows businesses to extend functionality and preserve existing investments while leveraging Pantasys’ capabilities.",
    },
    {
      question: "How customizable is Pantasys?",
      answer:
        "Pantasys is highly configurable, allowing businesses to enable or disable modules, customize workflows, and tailor forms and reports with minimal coding. Its flexible architecture supports unique business needs without requiring extensive development.",
    },
    {
      question: "Is Pantasys secure for enterprise use?",
      answer:
        "Absolutely. Pantasys enforces robust security through role-based access control, strict separation of development, staging, and production environments, and automated testing suites to ensure stability and data protection, meeting enterprise-grade compliance requirements.",
    },
    {
      question: "What modules are available in Pantasys?",
      answer:
        "Pantasys includes core modules like Customer Relationship Management (CRM), Learning Management System (LMS), Accounting & Finance, Payment Processing, Asset Management, and Multi-Tenancy. Additional modules can be activated or developed to suit specific business needs.",
    },
    {
      question: "How does Pantasys ensure scalability?",
      answer:
        "Built on the scalable Yii2 framework, Pantasys supports growing businesses with its modular design, cloud-ready architecture, and multi-tenant capabilities. It allows seamless addition of users, modules, or tenants without performance degradation.",
    },
    {
      question: "Can I try Pantasys before committing?",
      answer:
        "Yes, Pantasys offers a free trial with no credit card required. You can explore all modules, test integrations, and configure workflows to see how it fits your business needs before making a decision.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className={`py-20 bg-muted/30 ${inView ? "stagger-in" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Frequently Asked{" "}
              <span className="handwritten text-5xl md:text-6xl text-primary font-bold">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Pantasys and its modular
              platform.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-6 pt-0 text-muted-foreground">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
