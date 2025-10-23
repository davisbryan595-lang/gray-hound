import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, Heart, Target } from "lucide-react";
import founderImage from "@/assets/ray-gray-founder.png";

const Founder = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Meet the <span className="text-gradient">Visionary</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind The Grayhound Group
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <img
              src={founderImage}
              alt="Ray Gray - CEO & Founder"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ray Gray</h2>
              <p className="text-xl text-accent mb-6">CEO & Founder of The Grayhound Group LLC</p>
              
              <blockquote className="text-2xl italic text-muted-foreground mb-8 border-l-4 border-accent pl-6">
                "True excellence comes from developing the complete athlete — mind, body, and character
                working in harmony."
              </blockquote>

              <p className="text-lg text-muted-foreground mb-4">
                Driven by passion and purpose, Ray Gray built The Grayhound Group to shape future
                athletes — not only physically, but mentally and emotionally. With years of experience
                in coaching and performance development, he continues to inspire young athletes to
                unlock their full potential.
              </p>

              <p className="text-lg text-muted-foreground">
                His vision extends beyond the basketball court, focusing on creating well-rounded
                individuals who carry the lessons learned in training into every aspect of their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Impact */}
      <section className="py-20 glass-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Leadership & <span className="text-gradient">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <Award className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-muted-foreground">Years of Coaching Experience</p>
            </Card>

            <Card className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <Users className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Athletes Mentored</p>
            </Card>

            <Card className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <Heart className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-muted-foreground">Commitment to Excellence</p>
            </Card>

            <Card className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <Target className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">5</h3>
              <p className="text-muted-foreground">States Served</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Coaching <span className="text-gradient">Philosophy</span>
          </h2>

          <div className="space-y-6">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Holistic Development</h3>
              <p className="text-lg text-muted-foreground">
                Ray believes that true athletic excellence comes from nurturing the complete person.
                His approach integrates mental training, physical conditioning, and character
                development to create athletes who excel both on and off the court.
              </p>
            </Card>

            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Individualized Attention</h3>
              <p className="text-lg text-muted-foreground">
                Every athlete is unique, with their own strengths, challenges, and goals. Ray's
                coaching methodology emphasizes personalized training plans that adapt to each
                individual's needs and aspirations.
              </p>
            </Card>

            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Community & Support</h3>
              <p className="text-lg text-muted-foreground">
                Building a supportive community is at the heart of The Grayhound Group. Ray has
                assembled a team of therapists, counselors, mentors, and coaches who work together
                to provide comprehensive support for every athlete's journey.
              </p>
            </Card>

            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Life Beyond Basketball</h3>
              <p className="text-lg text-muted-foreground">
                While basketball skills are important, Ray's ultimate goal is to prepare athletes
                for life beyond the game. The lessons learned through training — discipline,
                resilience, teamwork, and leadership — become tools for lifelong success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="glass-card p-12 text-center rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Vision Forward
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            "My vision for The Grayhound Group is to continue expanding our reach, touching more lives,
            and creating a lasting impact on the next generation of athletes. I want every young person
            who trains with us to leave not just as a better player, but as a better person — equipped
            with the tools to succeed in whatever path they choose."
          </p>
          <p className="text-lg text-accent mt-6 font-semibold">— Ray Gray</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Founder;
