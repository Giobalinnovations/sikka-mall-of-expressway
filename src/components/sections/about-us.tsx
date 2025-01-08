'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AboutUs() {
  return (
    <Section id="about" variant="default" className="overflow-hidden py-16">
      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="space-y-4 mb-12 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-sm font-medium uppercase tracking-wider">
                About Us
              </span>
              <span className="h-px w-8 bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Sikka Mall of Expressway
            </h2>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-lg border bg-card text-center">
              <div className="font-semibold mb-1">Unit Sizes</div>
              <div className="text-muted-foreground">100-500 sq ft</div>
            </div>
            <div className="p-6 rounded-lg border bg-card text-center">
              <div className="font-semibold mb-1">Starting Price</div>
              <div className="text-muted-foreground">₹25 Lakhs</div>
            </div>
            <div className="p-6 rounded-lg border bg-card text-center">
              <div className="font-semibold mb-1">Assured Returns</div>
              <div className="text-muted-foreground">24% per year</div>
            </div>
          </div>

          {/* Content */}
          <div className=" text-muted-foreground space-y-6">
            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sikka Mall of Expressway is a leading commercial development by
              the well-known Sikka Group. It is situated near Pari Chowk in
              Greater Noida. The project has been designed with varied
              commercial spaces that include retail shops, showrooms,
              restaurants, and serviced apartments. These types of businesses
              meet the diversified business needs of clients.
            </motion.p>

            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The mall stretches to around 8,093.71 square meters, where the
              ground, first, and second floors will house retail space. The
              third floor will feature a lively food court, while the fourth
              floor will have luxury studios and service apartments. The size of
              units varies from 100 to 500 square feet. The starting price is at
              ₹25 lakhs.
            </motion.p>

            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The project is located in a prime location, which attracts
              investors. The connectivity through the Noida-Greater Noida
              Expressway, FNG Expressway, and proximity to Jewar International
              Airport makes it an excellent location. The mall is also close to
              a dense residential area and educational institutions, which
              ensures high footfall. Established brands like Haldiram&apos;s and
              Lord of the Drinks have already taken up spaces within the mall,
              which enhances its commercial appeal.
            </motion.p>

            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sikka Group ensures the investor with 24% for the year and the
              flexible payment scheme: 50:50. The project has received an
              Occupancy Certificate (OC). These projects are designed to keep up
              with the building standards. Projects include power backup, 24/7
              security, a prominent parking area, and fire safety measures,
              which will surely help to sustain a flourishing commercial
              ecosystem in it.
            </motion.p>

            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Overall, Sikka Mall of Expressway is a very attractive business
              and investment opportunity for those looking for a strategic
              location with promising returns in the rapidly developing
              commercial landscape of Greater Noida.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
