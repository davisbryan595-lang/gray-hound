import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Trophy, Lightbulb } from "lucide-react";
import teamTraining from "@/assets/team-training.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            About <span className="text-gradient">The Grayhound Group</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just athletic training — we develop the complete athlete through our holistic
            approach to Brain, Body, and Behavior.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              What began as a place to help athletes physically quickly evolved into something much more
              profound. As we worked with young athletes, conversations naturally shifted beyond physical
              training to encompass nutrition, spirituality, mental health, and personal development.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              This organic evolution led to the birth of The Grayhound Group — an organization dedicated
              to training individuals to be sound in Brain, Body, and Behavior.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we use a comprehensive holistic approach supported by a diverse staff of therapists,
              counselors, mentors, trainers, coaches, and trained volunteers — all committed to
              developing not just better athletes, but better human beings.
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <img
              src={teamTraining}
              alt="Team Training Session"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 glass-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Mission & Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card p-6 hover:scale-105 transition-transform">
              <Target className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Purpose</h3>
              <p className="text-muted-foreground">
                To develop complete athletes who excel in mind, body, and character.
              </p>
            </Card>

            <Card className="glass-card p-6 hover:scale-105 transition-transform">
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                We care deeply about each athlete's journey and personal growth.
              </p>
            </Card>

            <Card className="glass-card p-6 hover:scale-105 transition-transform">
              <Trophy className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in everything we do.
              </p>
            </Card>

            <Card className="glass-card p-6 hover:scale-105 transition-transform">
              <Lightbulb className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously evolve our methods to serve athletes better.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Our <span className="text-gradient">Holistic Approach</span>
          </h2>

          <div className="space-y-8">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Brain</h3>
              <p className="text-lg text-muted-foreground">
                Mental coaching goes beyond game strategy. We help athletes develop critical thinking
                skills, emotional intelligence, and the mental fortitude needed to overcome challenges
                both on and off the court. Our approach includes mindfulness practices, visualization
                techniques, and cognitive training.
              </p>
            </Card>

            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Body</h3>
              <p className="text-lg text-muted-foreground">
                Physical training is the foundation of athletic excellence. We focus on building
                strength, speed, agility, and endurance through scientifically-backed training methods.
                Our programs are tailored to each athlete's unique needs, incorporating nutrition
                guidance and injury prevention strategies.
              </p>
            </Card>

            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Behavior</h3>
              <p className="text-lg text-muted-foreground">
                Character development is what sets our athletes apart. We emphasize leadership,
                accountability, teamwork, and integrity. Through mentorship and counseling, we help
                athletes develop the behavioral skills that lead to success in all areas of life.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Serving Athletes Across <span className="text-gradient">Multiple States</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            North Carolina • Virginia • Florida • Washington DC • and more
          </p>
          <div className="glass-card p-8 inline-block rounded-lg">
            <p className="text-lg">
              Our reach extends across the East Coast, bringing world-class training to athletes
              wherever they are.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
