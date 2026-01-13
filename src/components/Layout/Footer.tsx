import { Link } from "react-router-dom";
import { Scissors, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-section-dark text-text-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-gold-accent" />
              <span className="text-xl font-bold">Cory's Cuts</span>
            </div>
            <p className="text-sm text-gray-300">
              Roseville's premier barbershop delivering expert cuts, clean fades, and professional grooming services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-gold-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-gold-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm hover:text-gold-accent transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gold-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-accent">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold-accent flex-shrink-0" />
                <span className="text-sm">1020 Douglas Blvd, Roseville, CA 95678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-accent flex-shrink-0" />
                <span className="text-sm">(916) 862-5500</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-accent">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Sun - Mon</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Tue - Fri</span>
                <span>9AM - 6PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8AM - 4PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-accent/20 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Cory's Cuts Barbershop. All rights reserved. | Crafted with care in Roseville.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;