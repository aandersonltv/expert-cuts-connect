import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcus Rodriguez",
      rating: 5,
      text: "Best barbershop in Sacramento! The attention to detail is incredible. My fade looks perfect every single time.",
      service: "Haircut + Fade"
    },
    {
      name: "David Chen",
      rating: 5,
      text: "Professional service and great atmosphere. The barbers really know their craft. Highly recommend!",
      service: "Haircut + Beard"
    },
    {
      name: "James Wilson",
      rating: 5,
      text: "Been coming here for 3 years. Consistent quality, fair prices, and always leave feeling fresh.",
      service: "Regular Client"
    }
  ];

  return (
    <section className="py-16 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="text-gold-accent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-accent fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="border-t pt-4">
                <div className="font-semibold text-section-dark">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gold-accent">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to join our satisfied clients?
          </p>
          <div className="flex justify-center">
            <div className="bg-gold-accent text-section-dark px-6 py-3 rounded-lg font-semibold">
              ⭐ 4.9/5 Rating • 500+ Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;