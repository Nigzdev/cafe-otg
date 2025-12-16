import { Check, Zap, Clock, Coffee, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Pricing = () => {
  const hourlyPlans = [
    {
      name: 'Standard PC',
      price: '₹60',
      unit: '/hour',
      description: 'Perfect for casual gaming sessions',
      features: [
        'High-performance PC',
        'RTX 3060 Graphics',
        '144Hz Monitor',
        'Gaming Peripherals',
      ],
      popular: false,
    },
    {
      name: 'Premium PC',
      price: '₹80',
      unit: '/hour',
      description: 'For competitive and AAA gaming',
      features: [
        'RTX 4070 Graphics',
        '240Hz Monitor',
        'Premium Peripherals',
        'Priority Seating',
        'Free Water Bottle',
      ],
      popular: true,
    },
    {
      name: 'Console Gaming',
      price: '₹100',
      unit: '/hour',
      description: 'PS5 or Xbox Series X experience',
      features: [
        'PS5 / Xbox Series X',
        '4K Gaming TV',
        'Premium Controllers',
        'Couch Seating',
        'Split-screen Ready',
      ],
      popular: false,
    },
  ];

  const combos = [
    {
      name: "Gamer's Fuel",
      price: '₹149',
      items: ['2 Hours PC Gaming', 'Cold Coffee', 'Chips Pack'],
      savings: 'Save ₹30',
    },
    {
      name: 'Squad Deal',
      price: '₹499',
      items: ['4 Hours (for 2 PCs)', 'Coffee for 2', '2 Sandwiches'],
      savings: 'Save ₹100',
    },
    {
      name: 'All-Day Pass',
      price: '₹399',
      items: ['8 Hours PC Gaming', 'Unlimited Water', '1 Meal Voucher'],
      savings: 'Save ₹150',
    },
  ];

  const specials = [
    {
      icon: GraduationCap,
      title: 'Student Special',
      description: '20% off with valid student ID',
      timing: 'Mon-Fri, 10 AM - 4 PM',
    },
    {
      icon: Clock,
      title: 'Happy Hours',
      description: '30% off on all PC gaming',
      timing: 'Mon-Thu, 10 AM - 12 PM',
    },
    {
      icon: Zap,
      title: 'Night Owl',
      description: 'Flat ₹299 for 6 hours',
      timing: '12 AM - 6 AM',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple, <span className="text-primary neon-text">Affordable</span> Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              No hidden fees. Pay only for what you play. Student discounts and combo deals available.
            </p>
          </div>
        </div>
      </section>

      {/* Hourly Pricing */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
            Hourly <span className="text-primary">Rates</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hourlyPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-card border-primary neon-glow scale-105'
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.unit}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  <a
                    href="https://wa.me/1234567890?text=Hi!%20I%20want%20to%20book%20a%20gaming%20slot%20at%20OTG%20Café"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Offers */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Combo <span className="text-primary">Offers</span>
            </h2>
            <p className="text-muted-foreground">Gaming + Food deals for maximum value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {combos.map((combo, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {combo.name}
                  </h3>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {combo.savings}
                  </span>
                </div>

                <div className="font-display text-3xl font-bold text-foreground mb-4">
                  {combo.price}
                </div>

                <ul className="space-y-2">
                  {combo.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Coffee className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Special <span className="text-primary">Offers</span>
            </h2>
            <p className="text-muted-foreground">Exclusive discounts and deals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {specials.map((special, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
              >
                <special.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {special.title}
                </h3>
                <p className="text-foreground font-medium mb-2">{special.description}</p>
                <p className="text-sm text-muted-foreground">{special.timing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Questions about pricing?
          </h2>
          <p className="text-muted-foreground mb-8">
            Reach out to us on WhatsApp for custom packages and group bookings
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 neon-glow font-semibold"
          >
            <a
              href="https://wa.me/1234567890?text=Hi!%20I%20have%20a%20question%20about%20OTG%20Café%20pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with Us
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
