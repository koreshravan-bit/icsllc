import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@informaticsconsulting.com",
    href: "mailto:contact@informaticsconsulting.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Tech Hub, Innovation City, IC 12345",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: null,
  },
];

const offices = [
  {
    city: "New York",
    address: "350 Fifth Avenue, Suite 5800",
    phone: "+1 (212) 555-0123",
  },
  {
    city: "London",
    address: "100 Liverpool Street, EC2M 2AT",
    phone: "+44 20 7946 0958",
  },
  {
    city: "Singapore",
    address: "1 Raffles Place, #20-61",
    phone: "+65 6123 4567",
  },
];

const Contact = () => {
  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Let's Start a Conversation"
        description="Have a project in mind? We'd love to hear from you. Reach out and let's create something amazing together."
        badge="Get in Touch"
        icon={Mail}
      />

      {/* Main Content */}
      <PageSection>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl glass border border-border/50">
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl glass border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="p-6 rounded-xl glass border border-border/50">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Global Offices */}
      <PageSection variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Offices</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With offices around the world, we're always nearby to serve you better.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
              <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
              <p className="text-sm text-primary">{office.phone}</p>
            </motion.div>
          ))}
        </div>
      </PageSection>
    </Layout>
  );
};

export default Contact;
