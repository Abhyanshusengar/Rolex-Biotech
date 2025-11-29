import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const testimonials = [
  {
    id: 1,
    title: "Client Garden Experiences",
    content: "Arcu taciti turpis diam montes est nisl. Diam id augue sociosqu euismod imperdiet. Sed finibus ad pellentesque ante congue curabitur leo molestie. Amet aliquet venenatis fusce varius parturient",
    author: "David Leafman",
    role: "GREEN DESIGNER",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    title: "Planting Success Stories",
    content: "Himenaeos etiam platea mauris dictum fermentum duis elit. Interdum urna taciti luctus finibus cras molestie parturient. Tristique primis cursus ad, habitasse tristique vivamus elementum",
    author: "Jessica Sprout",
    role: "INDOOR GARDENER",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    title: "Amazing Garden Results",
    content: "Outstanding service and products! Our garden has never looked better. The fertilizers are organic and highly effective. Highly recommended for anyone serious about gardening.",
    author: "Michael Green",
    role: "LANDSCAPE ARCHITECT",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    title: "Professional Quality Service",
    content: "The team's expertise and dedication to sustainable gardening practices is commendable. Their products have transformed our commercial landscape into a thriving ecosystem.",
    author: "Sarah Garden",
    role: "COMMERCIAL GROWER",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 2));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 2);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm">✦</span>
              </div>
              <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                Their Experiences!
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Hear From Our Clients
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-foreground text-background hover:bg-foreground/90 border-0 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-foreground text-background hover:bg-foreground/90 border-0 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-8 relative bg-card hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                "{testimonial.title}"
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground font-medium tracking-wide">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <Quote className="w-16 h-16 text-primary/20" strokeWidth={3} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
