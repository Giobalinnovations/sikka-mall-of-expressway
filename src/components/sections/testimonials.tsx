import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { Section } from '@/components/ui/section';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    avatar: '/avatars/sarah.jpg',
    quote:
      'The team transformed our space beyond our expectations. Their attention to detail and creative solutions made our home truly special.',
  },
  {
    name: 'Michael Chen',
    role: 'Property Developer',
    avatar: '/avatars/michael.jpg',
    quote:
      'Professional, innovative, and highly skilled. They delivered exceptional results while staying within budget and timeline.',
  },
  {
    name: 'Emma Davis',
    role: 'Restaurant Owner',
    avatar: '/avatars/emma.jpg',
    quote:
      'Their design expertise helped create the perfect ambiance for our restaurant. The space has received countless compliments from our customers.',
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" variant="alternate">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-[800px]">
            Hear what our clients have to say about their experience working
            with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <Card
              key={testimonial.name}
              className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Quote className="h-8 w-8 text-primary" />
                <p className="text-muted-foreground italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
