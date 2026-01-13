import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send the message
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-section-dark text-text-light py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get In <span className="text-gold-accent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or want to schedule an appointment? We're here to help. 
            Visit us, call us, or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Shop</h2>
                <p className="text-muted-foreground mb-8">
                  Located in the heart of Roseville, we're easy to find and always ready to serve you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-accent/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-muted-foreground">
                      1020 Douglas Blvd<br />
                      Roseville, CA 95678
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-accent/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">(916) 862-5500</p>
                    <p className="text-sm text-gray-500">Call for appointments or walk-ins</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-accent/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">info@coryscuts.com</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-accent/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Sun - Mon: Closed</p>
                      <p>Tue - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground">
                    Have a question or special request? Drop us a line!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gold-accent" />
                      <span>Name *</span>
                    </Label>
                    <Input
                      type="text"
                      id="contact-name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gold-accent" />
                      <span>Email *</span>
                    </Label>
                    <Input
                      type="email"
                      id="contact-email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone" className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gold-accent" />
                      <span>Phone</span>
                    </Label>
                    <Input
                      type="tel"
                      id="contact-phone"
                      placeholder="(916) 555-0123"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject" className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-gold-accent" />
                      <span>Subject</span>
                    </Label>
                    <Input
                      type="text"
                      id="contact-subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-gold-accent" />
                    <span>Message *</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-light mb-4">
              Find Us on the <span className="text-gold-accent">Map</span>
            </h2>
            <p className="text-gray-300">
              Located on Douglas Boulevard with plenty of parking available.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center max-w-4xl mx-auto">
            <div className="text-center text-gray-600">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-semibold">Interactive Map</p>
              <p className="text-sm">1020 Douglas Blvd, Roseville, CA 95678</p>
              <p className="text-xs mt-2">
                Map integration placeholder - would connect to Google Maps or similar service
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="gold" asChild>
              <a 
                href="https://maps.google.com/search/1020+Douglas+Blvd+Roseville+CA+95678" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;