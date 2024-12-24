'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: '123 Design Street, Creative City, ST 12345',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (555) 123-4567',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'contact@interiordesign.com',
  },
];

export default function Contact() {
  return (
    <Section id="contact" variant="default">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-muted-foreground md:text-lg max-w-[800px]"
          >
            Ready to transform your space? Reach out to us through any of these
            channels.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                },
              }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
