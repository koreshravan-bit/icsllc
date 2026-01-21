import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@informaticsconsulting.com",
    href: "mailto:contact@informaticsconsulting.com",
    description: "We typically respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
    description: "Speak directly with our team",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Tech Hub, Innovation City, IC 12345",
    href: null,
    description: "Our headquarters location",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: null,
    description: "Eastern Time Zone (ET)",
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

      {/* Main CTA Section */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          {/* Primary Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-2xl glass border border-border/50 text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you leverage AI and data-driven solutions. 
              Send us an email or give us a call to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild className="group">
                <a href="mailto:contact@informaticsconsulting.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-xl glass border border-border/50 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-6 rounded-xl glass border border-border/50 text-center"
          >
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3 justify-center">
              <motion.a 
                href="#" 
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="mailto:contact@informaticsconsulting.com" 
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
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
              className="group p-6 rounded-2xl bg-background/50 border border-border/50 text-center hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
              <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
              <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-sm text-primary hover:underline">
                {office.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </PageSection>
    </Layout>
  );
};

export default Contact;
