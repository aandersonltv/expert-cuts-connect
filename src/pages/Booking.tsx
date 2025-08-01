import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    service: "",
    barber: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    notes: ""
  });

  const services = [
    { value: "haircut", label: "Haircut - $30" },
    { value: "haircut-beard", label: "Haircut + Beard - $45" },
    { value: "kids-cut", label: "Kids Cut - $25" },
    { value: "hot-towel-shave", label: "Hot Towel Shave - $25" }
  ];

  const barbers = [
    { value: "any", label: "Any Available Barber" },
    { value: "mike", label: "Mike - Senior Barber" },
    { value: "carlos", label: "Carlos - Master Barber" },
    { value: "jason", label: "Jason - Specialist" }
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.service || !formData.date || !formData.time || !formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would make an API call to submit the booking
    console.log("Booking submitted:", formData);
    
    toast({
      title: "Booking Submitted!",
      description: "We'll call you within 1 hour to confirm your appointment.",
    });

    // Reset form
    setFormData({
      service: "",
      barber: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      notes: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-section-dark text-text-light py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Book Your <span className="text-gold-accent">Appointment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Schedule your appointment today. We'll call you within 1 hour to confirm your booking.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              
              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="service" className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gold-accent" />
                  <span>Select Service *</span>
                </Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Barber Selection */}
              <div className="space-y-2">
                <Label htmlFor="barber" className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gold-accent" />
                  <span>Preferred Barber</span>
                </Label>
                <Select value={formData.barber} onValueChange={(value) => handleInputChange("barber", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any available barber" />
                  </SelectTrigger>
                  <SelectContent>
                    {barbers.map((barber) => (
                      <SelectItem key={barber.value} value={barber.value}>
                        {barber.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gold-accent" />
                    <span>Date *</span>
                  </Label>
                  <Input
                    type="date"
                    id="date"
                    min={minDate}
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gold-accent" />
                    <span>Time *</span>
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gold-accent" />
                    <span>Full Name *</span>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gold-accent" />
                      <span>Phone Number *</span>
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="(916) 555-0123"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gold-accent" />
                      <span>Email Address</span>
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-gold-accent" />
                  <span>Additional Notes</span>
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requests or notes for your barber..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="gold" size="lg" className="w-full">
                Book Appointment
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                * Required fields. We'll call you within 1 hour to confirm your appointment.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-section-dark text-text-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gold-accent mb-2">Monday - Friday</h3>
              <p className="text-lg">9:00 AM - 7:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gold-accent mb-2">Saturday</h3>
              <p className="text-lg">8:00 AM - 6:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gold-accent mb-2">Sunday</h3>
              <p className="text-lg">10:00 AM - 4:00 PM</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-300">
              Walk-ins welcome, but appointments are recommended to guarantee your preferred time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;