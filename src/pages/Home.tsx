import { ArrowRight, Brain, Dumbbell, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamTraining from "@/assets/team-training.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://grayhoundgroup.org/wp-content/uploads/2024/10/Website-Loop-Wide.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary/80 via-primary-dark/85 to-background/90" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-up">
            Train Smart. <span className="text-gradient">Play Hard.</span>
            <br />
            Elevate Your Game.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Developing Athletes — Mind, Body & Behavior
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/services">
              <Button size="lg" className="glass-button border-0 text-lg px-8">
                Join a Class <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-accent text-lg px-8 hover:bg-accent/20">
                Contact a Coach
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Philosophy</span>
          </h2>
          <p className="text-xl text-muted-foreground">Brain + Body + Behavior</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card p-8 hover:scale-105 transition-transform duration-300">
            <Brain className="w-16 h-16 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-3">Brain</h3>
            <p className="text-muted-foreground">
              Mental coaching and strategic thinking to sharpen decision-making on and off the court.
            </p>
          </Card>

          <Card className="glass-card p-8 hover:scale-105 transition-transform duration-300">
            <Dumbbell className="w-16 h-16 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-3">Body</h3>
            <p className="text-muted-foreground">
              Physical training and conditioning to build strength, agility, and endurance.
            </p>
          </Card>

          <Card className="glass-card p-8 hover:scale-105 transition-transform duration-300">
            <Users className="w-16 h-16 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-3">Behavior</h3>
            <p className="text-muted-foreground">
              Character development and leadership skills to create well-rounded athletes.
            </p>
          </Card>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">The Grayhound Group</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              What began as a place to help athletes physically quickly turned into conversations about
              nutrition, spirituality, and mental health. The Grayhound Group uses a holistic approach
              supported by therapists, counselors, mentors, trainers, and coaches.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We train individuals to be sound in Brain, Body, and Behavior — creating not just better
              athletes, but better people.
            </p>
            <Link to="/about">
              <Button className="glass-button border-0">
                Learn More About Us <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img
              src={teamTraining}
              alt="Team Training"
              className="rounded-lg shadow-2xl animate-float"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 glass-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Athletes Trained</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">5</div>
              <div className="text-muted-foreground">States Covered</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Expert Coaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="text-gradient">Athletes Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">Hear from our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="glass-card p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The Grayhound Group transformed not just my game, but my entire approach to life.
                The coaches here care about developing the whole person."
              </p>
              <div className="font-semibold">Athlete Name</div>
              <div className="text-sm text-muted-foreground">Position • Team</div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="glass-card p-12 text-center rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Join The Pack?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey with The Grayhound Group today and unlock your full potential.
          </p>
          <Link to="/contact">
            <Button size="lg" className="glass-button border-0 text-lg px-12">
              Start Training Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
