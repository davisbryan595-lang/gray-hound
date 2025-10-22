import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import heroBasketball from "@/assets/hero-basketball.jpg";
import founderCoach from "@/assets/founder-coach.jpg";
import teamTraining from "@/assets/team-training.jpg";
import privateTraining from "@/assets/private-training.jpg";
import groupTraining from "@/assets/group-training.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: heroBasketball,
      title: "Intense Training Session",
      category: "Training",
    },
    {
      src: founderCoach,
      title: "One-on-One Coaching",
      category: "Coaching",
    },
    {
      src: teamTraining,
      title: "Team Practice",
      category: "Team",
    },
    {
      src: privateTraining,
      title: "Private Skills Development",
      category: "Training",
    },
    {
      src: groupTraining,
      title: "Group Session",
      category: "Group",
    },
    {
      src: teamTraining,
      title: "Team Building",
      category: "Team",
    },
    {
      src: heroBasketball,
      title: "Advanced Techniques",
      category: "Training",
    },
    {
      src: founderCoach,
      title: "Mentorship Moment",
      category: "Coaching",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Photo & Video <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capture the energy, dedication, and passion that defines The Grayhound Group experience.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-lg font-bold mb-1">{image.title}</p>
                    <p className="text-sm text-accent">{image.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 glass-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Training <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch our athletes in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map((i) => (
              <Card key={i} className="glass-card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2" />
                    </div>
                    <p className="text-lg">Training Highlight Video {i}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold">Session Highlight</p>
                  <p className="text-sm text-muted-foreground">Watch our athletes develop their skills</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">500+</div>
            <p className="text-muted-foreground">Athletes Trained</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">50+</div>
            <p className="text-muted-foreground">College Commits</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">100+</div>
            <p className="text-muted-foreground">Championships Won</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">15+</div>
            <p className="text-muted-foreground">Years of Excellence</p>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 border-0 bg-transparent">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 p-2 rounded-full glass-card hover:bg-accent transition-colors z-50"
          >
            <X size={24} />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery item"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
