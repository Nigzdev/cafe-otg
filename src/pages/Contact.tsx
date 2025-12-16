import { Phone, Instagram, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Contact = () => {
const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 97114 42512',
      href: 'tel:+919711442512',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@cafeotg',
      href: 'https://instagram.com/cafeotg',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Shop G7a, Onyx Plaza, Rajendra Nagar, Sector 3, Vasundhara, Ghaziabad, UP 201012',
      href: 'https://maps.google.com/?q=OTG+Gaming+Cafe+Ghaziabad',
    },
  ];

  const hours = [
    { day: 'Monday - Thursday', time: '10:00 AM - 12:00 AM' },
    { day: 'Friday - Saturday', time: '10:00 AM - 2:00 AM' },
    { day: 'Sunday', time: '12:00 PM - 12:00 AM' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find <span className="text-primary neon-text">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Visit us at our gaming café or reach out for bookings and inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.label === 'Phone' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                        <div className="text-foreground font-medium">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Opening Hours
                </h3>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="space-y-3">
                    {hours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="text-foreground font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp Booking */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Book Your Slot
                </h3>
                <p className="text-muted-foreground mb-4">
                  Skip the queue! Book your gaming slot via WhatsApp for a guaranteed spot.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold"
                >
                  <a
                    href="https://wa.me/919711442512?text=Hi!%20I%20want%20to%20book%20a%20gaming%20slot%20at%20OTG%20Café"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book via WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Our <span className="text-primary">Location</span>
              </h2>
              
              <div className="relative rounded-2xl overflow-hidden border border-border h-[400px] lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5!2d77.45!3d28.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1b6d8c9b8e1%3A0x1234567890!2sOTG+Gaming+Cafe!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OTG Café Location"
                  className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
                
                {/* Overlay with address */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-background/90 backdrop-blur-sm border border-border">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">
                      Shop G7a, Onyx Plaza, Rajendra Nagar, Sector 3, Vasundhara, Ghaziabad
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=OTG+Gaming+Cafe+Ghaziabad"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            See you at <span className="text-primary neon-text">OTG</span>!
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Walk-ins welcome. For guaranteed availability during peak hours, we recommend booking in advance.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
