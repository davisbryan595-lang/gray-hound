import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, User, Trophy, Calendar, Clock, DollarSign } from "lucide-react";
import privateTraining from "@/assets/private-training.jpg";
import groupTraining from "@/assets/group-training.jpg";

const Services = () => {
  const services = [
    {
      title: "Private Training",
      icon: User,
      image: privateTraining,
      description: "Personalized 1-on-1 or 2-on-1 training sessions tailored to your specific needs and goals.",
      features: [
        "Customized training plans",
        "Individual attention from expert coaches",
        "Flexible scheduling",
        "Rapid skill development",
        "Video analysis and feedback",
      ],
      pricing: "Contact for pricing",
      ratio: "1:1 or 2:1",
    },
    {
      title: "Semi-Private Group Lessons",
      icon: Users,
      image: groupTraining,
      description: "Small group training with 3-6 athletes for intensive skill development in a collaborative environment.",
      features: [
        "Small group dynamics",
        "Competitive training atmosphere",
        "Skill-specific focus",
        "Peer motivation",
        "Cost-effective option",
      ],
      pricing: "Contact for pricing",
      ratio: "3-6 athletes",
    },
    {
      title: "Weekday Group Classes",
      icon: Calendar,
      image: groupTraining,
      description: "Structured group classes with an 8:1 athlete-to-coach ratio, focusing on skill-based training.",
      features: [
        "Skill-based curriculum",
        "8:1 athlete ratio",
        "Consistent weekly schedule",
        "Progressive development",
        "Team building activities",
      ],
      pricing: "Contact for pricing",
      ratio: "8:1",
    },
    {
      title: "Sunday Group Classes",
      icon: Clock,
      image: groupTraining,
      description: "Weekend group sessions with a 10:1 ratio, emphasizing individual skills and fundamentals.",
      features: [
        "Fundamentals focus",
        "10:1 athlete ratio",
        "Weekend convenience",
        "Individual skill work",
        "Game-situation training",
      ],
      pricing: "Contact for pricing",
      ratio: "10:1",
    },
    {
      title: "Team Training",
      icon: Trophy,
      image: groupTraining,
      description: "Customized team training programs for college and professional teams with tailored coaching.",
      features: [
        "Custom team programs",
        "Strategic game planning",
        "Team chemistry building",
        "Advanced tactics",
        "Performance analytics",
      ],
      pricing: "Custom quotes available",
      ratio: "Full team",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Our <span className="text-gradient">Training Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the training program that fits your goals. From individual attention to team
            development, we have options for every athlete.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={`glass-card overflow-hidden hover:scale-[1.02] transition-transform duration-300 ${
                  index % 2 === 0 ? "animate-fade-up" : "animate-fade-up"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-12 h-12 text-accent" />
                      <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-8 mb-6 flex-wrap">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Ratio</p>
                        <p className="text-lg font-semibold text-accent">{service.ratio}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Pricing</p>
                        <p className="text-lg font-semibold">{service.pricing}</p>
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button className="glass-button border-0">Book This Program</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-20 glass-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="text-gradient">Training Philosophy</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every program at The Grayhound Group is built on our core philosophy of Brain, Body, and
              Behavior. No matter which training option you choose, you'll receive comprehensive
              development that goes beyond just physical skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold text-accent mb-2">Brain</div>
                <p className="text-muted-foreground">Mental strategy & decision-making</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">Body</div>
                <p className="text-muted-foreground">Physical conditioning & skill work</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">Behavior</div>
                <p className="text-muted-foreground">Character & leadership development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="glass-card p-12 text-center rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start <span className="text-gradient">Your Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss which training program is right for you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="glass-button border-0 text-lg px-12">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
