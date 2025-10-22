import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Coach Williams",
      role: "Head Skills Trainer",
      bio: "15+ years of experience developing elite athletes. Specializes in ball handling and footwork.",
      expertise: ["Ball Handling", "Footwork", "Speed Training"],
    },
    {
      name: "Coach Martinez",
      role: "Shooting Specialist",
      bio: "Former collegiate player with a passion for perfecting shooting mechanics and form.",
      expertise: ["Shooting Form", "3-Point Range", "Free Throws"],
    },
    {
      name: "Coach Thompson",
      role: "Strength & Conditioning Coach",
      bio: "Certified strength coach focused on building athletic performance and injury prevention.",
      expertise: ["Strength Training", "Conditioning", "Injury Prevention"],
    },
    {
      name: "Coach Davis",
      role: "Mental Performance Coach",
      bio: "Sports psychologist helping athletes develop mental toughness and game-time confidence.",
      expertise: ["Mental Training", "Visualization", "Confidence Building"],
    },
    {
      name: "Coach Anderson",
      role: "Youth Development Coach",
      bio: "Specialist in teaching fundamentals to young athletes with patience and enthusiasm.",
      expertise: ["Youth Training", "Fundamentals", "Character Development"],
    },
    {
      name: "Coach Johnson",
      role: "Advanced Skills Trainer",
      bio: "Works with college and professional athletes on advanced techniques and game situations.",
      expertise: ["Advanced Moves", "Game Strategy", "1-on-1 Training"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Meet <span className="text-gradient">Our Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team of coaches, trainers, and mentors are committed to your athletic
            development and personal growth.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder avatar with initials */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-4xl font-bold">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
              <p className="text-accent text-center mb-4 font-semibold">{member.role}</p>
              
              <p className="text-muted-foreground text-center mb-6">{member.bio}</p>

              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-center mb-2">Areas of Expertise:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="mailto:thegrayhoundgroupinfo@gmail.com"
                className="flex items-center justify-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">Contact Coach</span>
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 glass-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Support Network</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Beyond our coaching staff, we have a comprehensive support system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Therapists</div>
              <p className="text-muted-foreground">Mental health support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Counselors</div>
              <p className="text-muted-foreground">Personal guidance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Mentors</div>
              <p className="text-muted-foreground">Life coaching</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Volunteers</div>
              <p className="text-muted-foreground">Community support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="glass-card p-12 text-center rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in <span className="text-gradient">Joining Our Team?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for passionate coaches and support staff who share our vision of
            developing complete athletes.
          </p>
          <a href="mailto:thegrayhoundgroupinfo@gmail.com">
            <button className="glass-button px-8 py-3 rounded-lg text-lg font-semibold">
              Contact Us About Opportunities
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
