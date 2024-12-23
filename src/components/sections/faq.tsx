'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What interior design services do you offer?',
    answer:
      'We offer a comprehensive range of interior design services including space planning, color consultation, furniture selection, lighting design, custom cabinetry, material selection, and full project management for both residential and commercial spaces.',
  },
  {
    question: 'How long does a typical interior design project take?',
    answer:
      'Project timelines vary depending on scope and complexity. A single room refresh might take 4-6 weeks, while a complete home renovation could take 3-6 months. During our initial consultation, we will provide a detailed timeline specific to your project.',
  },
  {
    question: 'What is your design process like?',
    answer:
      'Our design process begins with an initial consultation, followed by concept development, space planning, and material selection. We then present our design proposals, make refinements based on your feedback, and oversee implementation to ensure every detail meets our high standards.',
  },
  {
    question: 'Do you work with clients existing furniture and decor?',
    answer:
      'Absolutely! We are happy to incorporate your existing pieces into the new design. We will assess your current items and suggest ways to blend them with new pieces to create a cohesive and personalized space.',
  },
  {
    question: 'How do you handle project budgeting?',
    answer:
      'We work with you to establish a clear budget at the beginning of the project and provide detailed cost breakdowns. Our transparent pricing ensures there are no surprises, and we can adjust our design recommendations to align with your budget constraints.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We primarily serve the greater metropolitan area and surrounding suburbs. For special projects, we are also available for remote consultations and can travel to other locations.',
  },
  {
    question: 'How can I get started with your services?',
    answer:
      'Getting started is easy! Simply contact us through our website or phone to schedule an initial consultation. During this meeting, we will discuss your vision, needs, budget, and timeline to determine the best approach for your project.',
  },
  {
    question: 'Do you provide 3D visualization of the design?',
    answer:
      'Yes, we provide detailed 3D renderings and visualizations of your space. This helps you better understand our design proposals and make informed decisions about your project.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function FAQ() {
  return (
    <Section id="faq" variant="default">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-10">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Find answers to common questions about our interior design services and process."
            alignment="center"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none mb-4"
                  >
                    <AccordionTrigger className="bg-secondary/20 px-6 rounded-xl hover:no-underline data-[state=open]:rounded-b-none">
                      <span className="text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="bg-secondary/20 px-6 pb-4 rounded-b-xl">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-muted-foreground">
              Still have questions? We are here to help!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
