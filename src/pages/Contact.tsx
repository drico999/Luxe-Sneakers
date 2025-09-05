import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        console.error("Backend error:", errorData);
        toast({
          title: "Error sending message",
          description: "The server responded with an error.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error sending message",
        description: "Could not connect to the server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+27 79 849 4351',
      description: 'Mon-Fri 9AM-6PM, Sat 9AM-4PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@luxesneakers.co.za',
      description: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM, Sat: 9AM-4PM',
      description: 'Closed Sundays & Public Holidays'
    }
  ];

  const faqs = [
    {
      question: 'What are your delivery fees?',
      answer: 'We offer nationwide delivery across South Africa for a standard fee of R199. Orders are typically delivered within 2–5 business days.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 3-day return policy for unworn items in original packaging. Returns are free and easy.'
    },
    {
      question: 'Do you have a size exchange policy?',
      answer: 'Yes, we offer free size exchanges within 3 days of purchase for unworn items.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">Get In Touch</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a question about our products or need assistance with your order? 
          We're here to help you step into style.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactInfo.map((info, index) => (
          <Card key={index} className="text-center p-6 hover-lift">
            <CardContent className="p-0">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <info.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
              <p className="text-sm font-medium text-primary mb-1">{info.content}</p>
              <p className="text-xs text-muted-foreground">{info.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Send us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full btn-hero">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQ and Social */}
        <div className="space-y-8">
          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Stay updated with the latest drops and exclusive releases
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/luxe_sneakers_sa"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100082544180401"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/27798494351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12a11.85 11.85 0 001.832 6.195L0 24l5.895-1.891A11.961 11.961 0 0012 24c6.627 0 12-5.373 12-12a11.95 11.95 0 00-3.48-8.52zm-8.195 15.125a8.294 8.294 0 01-4.47-1.296l-.318-.19-3.508 1.126 1.148-3.41-.205-.346a8.216 8.216 0 1111.263 3.716 8.147 8.147 0 01-3.91.96zm4.417-6.043c-.243-.122-1.438-.708-1.66-.789-.22-.08-.38-.122-.54.123-.16.243-.62.789-.76.95-.14.163-.28.183-.52.06-.243-.123-1.025-.377-1.954-1.206-.72-.64-1.204-1.43-1.345-1.673-.14-.243-.015-.374.108-.497.11-.11.243-.28.364-.42.12-.14.16-.243.243-.405.08-.16.04-.3-.02-.423-.06-.122-.54-1.297-.74-1.77-.195-.464-.39-.4-.54-.41-.14-.012-.3-.015-.457-.015-.16 0-.423.06-.645.3-.22.243-.84.82-.84 2 .002 1.18.86 2.327.98 2.49.12.16 1.7 2.593 4.12 3.635.575.248 1.02.396 1.37.507.575.18 1.1.155 1.51.094.46-.07 1.438-.586 1.642-1.152.203-.57.203-1.06.142-1.152-.06-.095-.22-.15-.463-.27z" />
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}