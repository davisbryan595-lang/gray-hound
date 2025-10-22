import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent("Training Inquiry from " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:thegrayhoundgroupinfo@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your training journey? Contact us today to learn more about our programs
            and schedule your first session.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <Card className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:9802240484"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      (980) 224-0484
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:thegrayhoundgroupinfo@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      thegrayhoundgroupinfo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-muted-foreground">
                      13016 Eastfield Rd. Suite B200-281<br />
                      Huntersville, NC 28078
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Operating Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 3:00 PM - 9:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: 12:00 PM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
              <p className="text-muted-foreground mb-4">
                We proudly serve athletes across multiple states:
              </p>
              <div className="flex flex-wrap gap-2">
                {["North Carolina", "Virginia", "Florida", "Washington DC", "And More"].map((state) => (
                  <span
                    key={state}
                    className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Card className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-card border-accent/20"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-card border-accent/20"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="glass-card border-accent/20"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your training goals and what program you're interested in..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="glass-card border-accent/20 resize-none"
                  />
                </div>

                <Button type="submit" className="glass-button border-0 w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 glass-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Find <span className="text-gradient">Our Location</span>
          </h2>
          <div className="aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden glass-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.0!2d-80.8433!3d35.4105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI0JzM3LjgiTiA4MMKwNTAnMzUuOSJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Grayhound Group Location"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <Card className="glass-card p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join <span className="text-gradient">The Pack</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter for training tips, program updates, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="glass-card border-accent/20 flex-1"
            />
            <Button type="submit" className="glass-button border-0 sm:w-auto w-full">
              Subscribe
            </Button>
          </form>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
