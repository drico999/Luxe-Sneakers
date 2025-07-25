import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Truck, Award, Users, Star } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Authenticity Guaranteed',
      description: 'Our sneaker collection features high-quality products carefully selected by our team. We strive to provide the best value and authentic styles for our customers.'
    },
    {
      icon: Heart,
      title: 'Passion for Sneakers',
      description: 'Our love for sneaker culture drives everything we do. We curate only the finest pieces that represent the best in streetwear fashion.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'We offer nationwide delivery on all orders for just R199, ensuring your new kicks reach you quickly and safely.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We maintain the highest standards in storage and handling to ensure your sneakers arrive in perfect condition.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Sneaker Models' },
    { number: '5 Years', label: 'In Business' },
    { number: '99.9%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">Est. 2022</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          About Luxe Sneakers
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        We’re South Africa’s premier destination for premium sneakers.
        Born from a deep passion for sneaker culture and streetwear fashion,
        we deliver the most coveted releases and timeless classics to elevate your collection.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center p-6">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded in 2022 in the heart of Johannesburg, Luxe Sneakers began as a passion project. Our founder, a lifelong sneaker enthusiast, recognized a gap in South Africa’s market for premium sneakers and set out to offer a fresh, quality-focused experience.
            </p>
            <p>
              What started as a small collection of rare finds has grown into one of South Africa’s most trusted sneaker destinations. We’re passionate about bringing you the latest drops, exclusive releases, and timeless classics to elevate your sneaker game.
            </p>
            <p>
              Today, we're proud to serve over 10,000 satisfied customers across South Africa, 
              each sharing our passion for quality footwear and street culture.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Elevating Sneaker Culture in South Africa
              </h3>
              <p className="text-muted-foreground leading-relaxed">
              We're committed to making premium sneakers accessible to everyone while 
              maintaining the highest standards of authenticity and quality. At Luxe Sneakers, 
              our goal is to be more than just a retailer. We're building a community for sneaker enthusiasts who value craftsmanship, design, and the cultural significance behind every pair.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      Values
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 hover-lift">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 p-3 rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Meet Our Team
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Our passionate team of sneaker experts and customer service professionals 
          are here to help you find your perfect pair.
        </p>
        
        <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
          <CardContent className="p-0">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">Expert Curation Team</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our team brings years of experience in fashion retail and street culture. We carefully review every product to ensure it meets our high standards before it reaches our customers.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Join the Luxe Sneakers Family
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Experience the difference that comes with quality products, expert service, and a genuine passion for sneaker culture.
        </p>
        <div className="flex items-center justify-center space-x-1 text-primary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
          <span className="ml-2 text-foreground font-medium">
            Rated 4.9/5 by our customers
          </span>
        </div>
      </div>
    </div>
  );
}