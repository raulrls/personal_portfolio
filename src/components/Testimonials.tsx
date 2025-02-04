import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "John's expertise in BI transformed our decision-making process. His solutions not only provided insights but drove real business value.",
    author: "Sarah Chen",
    role: "Chief Data Officer",
    company: "Tech Innovations Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80"
  },
  {
    id: 2,
    quote: "Working with John was a game-changer for our analytics capabilities. His technical skills and business acumen are truly exceptional.",
    author: "Michael Rodriguez",
    role: "VP of Analytics",
    company: "Global Solutions Corp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80"
  },
  {
    id: 3,
    quote: "The dashboards and reporting systems John developed have become integral to our operations. His work consistently exceeds expectations.",
    author: "Emily Thompson",
    role: "Director of Operations",
    company: "DataDrive Analytics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="relative z-10 min-h-screen bg-background/95 px-4 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">Testimonials</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background/50">
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary opacity-50" />
                <p className="mb-6 text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;