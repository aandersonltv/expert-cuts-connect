import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useChat } from '@/hooks/useChat';
import chatAvatar from '@/assets/chat-avatar.png';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { messages, isLoading, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const message = inputValue.trim();
    setInputValue('');
    await sendMessage(message);
  };

  const quickActions = [
    { label: 'Book Appointment', action: () => window.location.href = '/booking' },
    { label: 'View Services', action: () => window.location.href = '/services' },
    { label: 'Get Directions', action: () => window.open('https://maps.google.com/?q=8379+Folsom+Boulevard+Sacramento+CA', '_blank') },
    { label: 'Call Us', action: () => window.open('tel:+19167989163', '_self') }
  ];

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open chat</span>
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 z-[60] w-80 max-h-[calc(100vh-2rem)] shadow-xl border-0 bg-background backdrop-blur-sm animate-scale-in flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg flex-shrink-0">
        <div className="flex items-center space-x-2">
          <img 
            src={chatAvatar} 
            alt="Chat Assistant" 
            className="h-8 w-8 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">Expert Haircuts</h3>
            <p className="text-xs opacity-90">Ask us anything!</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent className="p-0 flex flex-col flex-1 min-h-0">
        <ScrollArea className="flex-1 p-4 max-h-80">
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm">
                    👋 Welcome to Expert Haircuts! How can I help you today?
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={action.action}
                      className="text-xs h-8"
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.isBot ? "justify-start" : "justify-end"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg p-3 text-sm",
                    message.isBot
                      ? "bg-muted/50 text-foreground"
                      : "bg-primary text-primary-foreground"
                  )}
                  dangerouslySetInnerHTML={{ __html: message.content.replace(/\n/g, '<br>') }}
                />
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted/50 rounded-lg p-3 flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <form onSubmit={handleSendMessage} className="p-4 border-t bg-background flex-shrink-0">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={!inputValue.trim() || isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};