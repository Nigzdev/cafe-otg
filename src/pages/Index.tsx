import { Link } from 'react-router-dom';
import { Monitor, Gamepad, Coffee, Wallet, ChevronRight, Zap, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Index = () => {
  const highlights = [
    {
      icon: Monitor,
      title: 'High-End PCs',
      description: 'RTX graphics, high refresh monitors, mechanical keyboards',
    },
    {
      icon: Gamepad,
      title: 'Console Gaming',
      description: 'PS5, Xbox Series X with the latest titles',
    },
    {
      icon: Coffee,
      title: 'Café Menu',
      description: 'Fresh coffee, cold brews, and gaming fuel snacks',
    },
    {
      icon: Wallet,
      title: 'Affordable Pricing',
      description: 'Student discounts, combo deals, and hourly rates',
    },
  ];

  const stats = [
    { icon: Monitor, value: '20+', label: 'Gaming PCs' },
    { icon: Users, value: '500+', label: 'Happy Gamers' },
    { icon: Clock, value: '24/7', label: 'Open Hours' },
    { icon: Zap, value: '1Gbps', label: 'Internet Speed' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 gradient-radial opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Gaming Experience</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-foreground">Game.</span>{' '}
              <span className="text-primary neon-text">Chill.</span>{' '}
              <span className="text-foreground">Repeat.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Welcome to Cafe Off The Grid — your ultimate gaming sanctuary. 
              High-end setups, immersive vibes, and a community of passionate gamers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 neon-glow text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-semibold group"
              >
                <a
                  href="https://wa.me/919711442512?text=Hi!%20I%20want%20to%20book%20a%20gaming%20slot%20at%20OTG%20Café"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Slot
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border hover:bg-muted text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-semibold"
              >
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why <span className="text-primary neon-text">OTG</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're not just a gaming café — we're a community hub where gamers come to compete, 
              chill, and connect. Whether you're grinding ranked matches or just hanging out with 
              friends, OTG has everything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We <span className="text-primary neon-text">Offer</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need for the perfect gaming session
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto text-center p-8 md:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-border overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to <span className="text-primary neon-text">Game</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Book your slot now and experience gaming like never before. 
                Walk-ins welcome, but reservations guarantee your spot!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 neon-glow text-lg px-10 py-6 font-semibold"
              >
                <a
                  href="https://wa.me/919711442512?text=Hi!%20I%20want%20to%20book%20a%20gaming%20slot%20at%20OTG%20Café"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
