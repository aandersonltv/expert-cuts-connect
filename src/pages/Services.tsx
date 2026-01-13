import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, Baby, ShieldCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      name: "Haircut",
      price: "$30",
      description: "Professional cut styled to perfection. Includes consultation, shampoo, cut, and styling.",
      features: ["Consultation", "Shampoo", "Precision Cut", "Styling"]
    },
    {
      icon: Sparkles,
      name: "Haircut + Beard",
      price: "$45",
      description: "Complete grooming package. Haircut plus professional beard trim and shaping.",
      features: ["Everything in Haircut", "Beard Trim", "Beard Shaping", "Beard Oil Application"]
    },
    {
      icon: Baby,
      name: "Kids Cut",
      price: "$25",
      description: "Gentle, patient service for children. We make sure every kid leaves happy.",
      features: ["Kid-Friendly Environment", "Patient Service", "Fun Experience", "Parent Friendly"]
    },
    {
      icon: ShieldCheck,
      name: "Hot Towel Shave",
      price: "$25",
      description: "Traditional hot towel shave experience. Relaxing and precise.",
      features: ["Hot Towel Treatment", "Premium Shaving Cream", "Straight Razor", "Aftershave Application"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-section-dark text-text-light py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-gold-accent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional grooming services tailored to your style. Every service includes our signature attention to detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gold-accent/10 p-3 rounded-lg">
                        <service.icon className="h-6 w-6 text-gold-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-section-dark">
                          {service.name}
                        </h3>
                        <div className="text-3xl font-bold text-gold-accent">
                          {service.price}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gold-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button variant="gold" className="w-full" asChild>
                    <Link to="/booking">Book This Service</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-section-dark text-text-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose <span className="text-gold-accent">Cory's Cuts?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="text-gold-accent text-4xl">✨</div>
              <h3 className="text-xl font-semibold">Premium Products</h3>
              <p className="text-gray-300">We use only the finest grooming products for the best results.</p>
            </div>
            
            <div className="space-y-3">
              <div className="text-gold-accent text-4xl">⭐</div>
              <h3 className="text-xl font-semibold">Expert Barbers</h3>
              <p className="text-gray-300">Our team has years of experience and ongoing training.</p>
            </div>
            
            <div className="space-y-3">
              <div className="text-gold-accent text-4xl">🏆</div>
              <h3 className="text-xl font-semibold">Satisfaction Guaranteed</h3>
              <p className="text-gray-300">We're not happy until you're completely satisfied with your cut.</p>
            </div>
          </div>

          <div className="mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link to="/booking">Book Your Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;