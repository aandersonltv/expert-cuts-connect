import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Clock, Scissors } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "9+" },
    { icon: Users, label: "Happy Clients", value: "5000+" },
    { icon: Clock, label: "Open Days/Week", value: "7" },
    { icon: Scissors, label: "Services", value: "10+" },
  ];

  return (
    <section className="py-16 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Crafting Perfect Cuts
                <span className="text-gold-accent"> Since 2015</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Expert Haircuts, we're more than just a barbershop—we're a tradition. 
                Our skilled barbers combine time-honored techniques with modern style to deliver 
                cuts that look sharp and feel great.
              </p>
              <p className="text-muted-foreground mb-8">
                Located in the heart of Sacramento on Folsom Boulevard, we've been serving 
                the community with precision cuts, clean fades, and exceptional grooming services. 
                Every client leaves feeling confident and looking their absolute best.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Visit Us</Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <stat.icon className="h-8 w-8 text-gold-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-section-dark mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;