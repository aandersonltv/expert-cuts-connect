import { useState, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const BARBERSHOP_KNOWLEDGE = {
  services: [
    { name: 'Haircut', price: '$30' },
    { name: 'Haircut + Beard', price: '$45' },
    { name: 'Kids Cut', price: '$25' },
    { name: 'Hot Towel Shave', price: '$25' }
  ],
  hours: {
    'Monday - Friday': '9AM - 6PM',
    'Saturday': '9AM - 5PM',
    'Sunday': '10AM - 4PM'
  },
  contact: {
    phone: '(916) 798-9163',
    address: '8379 Folsom Boulevard, Sacramento, CA',
    email: 'info@experthaircuts.com'
  },
  about: 'Expert Haircuts is Sacramento\'s premier barbershop, specializing in sharp cuts, clean fades, and professional grooming services.'
};

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateResponse = useCallback(async (userMessage: string): Promise<string> => {
    const message = userMessage.toLowerCase();

    // Services and pricing
    if (message.includes('service') || message.includes('price') || message.includes('cost') || message.includes('cut')) {
      return `Our services include:\n\n${BARBERSHOP_KNOWLEDGE.services.map(s => `• ${s.name} - ${s.price}`).join('\n')}\n\nWould you like to book an appointment?`;
    }

    // Hours
    if (message.includes('hour') || message.includes('open') || message.includes('close') || message.includes('time')) {
      return `Our hours are:\n\n${Object.entries(BARBERSHOP_KNOWLEDGE.hours).map(([day, hours]) => `• ${day}: ${hours}`).join('\n')}\n\nWe're open 6 days a week to serve you!`;
    }

    // Location and contact
    if (message.includes('address') || message.includes('location') || message.includes('where') || message.includes('phone') || message.includes('contact')) {
      return `📍 ${BARBERSHOP_KNOWLEDGE.contact.address}\n📞 ${BARBERSHOP_KNOWLEDGE.contact.phone}\n\nWe're conveniently located on Folsom Boulevard. Call us or visit our booking page to schedule your appointment!`;
    }

    // Booking
    if (message.includes('book') || message.includes('appointment') || message.includes('schedule')) {
      return `I'd be happy to help you book an appointment! You can:\n\n• Visit our booking page to schedule online\n• Call us at ${BARBERSHOP_KNOWLEDGE.contact.phone}\n• Walk in during business hours\n\nWhat service are you interested in?`;
    }

    // About
    if (message.includes('about') || message.includes('who') || message.includes('expert haircuts')) {
      return `${BARBERSHOP_KNOWLEDGE.about}\n\nWe pride ourselves on delivering exceptional cuts and creating a welcoming atmosphere for all our clients. Visit us and experience the difference!`;
    }

    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good')) {
      return `Hello! Welcome to Expert Haircuts! 👋\n\nI'm here to help you with:\n• Booking appointments\n• Service information\n• Hours and location\n• Any other questions\n\nWhat can I help you with today?`;
    }

    // Default response
    return `Thanks for your message! I can help you with:\n\n• 📅 Booking appointments\n• ✂️ Service information and pricing\n• 🕒 Hours and location\n• 📞 Contact information\n\nFor complex questions, feel free to call us at ${BARBERSHOP_KNOWLEDGE.contact.phone} or visit our booking page!`;
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate typing delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
      
      const response = await generateResponse(content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      toast({
        title: "Error",
        description: "Sorry, I'm having trouble right now. Please try calling us instead!",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }, [generateResponse]);

  return {
    messages,
    isLoading,
    sendMessage
  };
};