"use client";



import React from "react";

import { motion } from "framer-motion";

import TopBar from "@/components/TopBar";

import Navigation from "@/components/Navigation";

import Footer from "@/components/Footer";

import { Card, CardContent } from "@/components/ui/card";

import {

  Award,

  Users,

  Leaf,

  Target,

  Microscope,

  CheckCircle2,

  Sprout,

  Globe,

  Quote,

  Clock,

  ZoomIn,
  PlayCircle, // Added for gallery interaction

} from "lucide-react";



// Animation Variants

const fadeInUp = {

  hidden: { opacity: 0, y: 30 },

  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },

};



const staggerContainer = {

  hidden: { opacity: 0 },

  visible: {

    opacity: 1,

    transition: { staggerChildren: 0.15 },

  },

};



const values = [

  {

    icon: Leaf,

    title: "Sustainability",

    description:

      "Improved rural livelihoods and sustainable food systems in the global South.",

    color: "text-green-500",

    bg: "bg-green-500/10",

  },

  {

    icon: Award,

    title: "Quality First",

    description:

      "Every product undergoes rigorous testing to ensure the highest standards of excellence.",

    color: "text-blue-500",

    bg: "bg-blue-500/10",

  },

  {

    icon: Users,

    title: "Customer Focus",

    description:

      "Respect and value for local knowledge, innovations, and the environment.",

    color: "text-orange-500",

    bg: "bg-orange-500/10",

  },

  {

    icon: Target,

    title: "Innovation",

    description:

      "Promoting agroecological principles and rural entrepreneurship through development.",

    color: "text-purple-500",

    bg: "bg-purple-500/10",

  },

];



const stats = [

  { value: "25+", label: "Years Experience", icon: Clock },

  { value: "10K+", label: "Happy Farmers", icon: Users },

  { value: "200+", label: "Product Range", icon: Sprout },

  { value: "ISO", label: "9001:2015 Certified", icon: Award },

];



// DUMMY GALLERY DATA - Replace src with your local paths (e.g., "/assets/gallery1.jpg")

const galleryImages = [

  {
    id: 1,
    type: "image",
    src: "/assets/gallery/photo1.jpg",
    alt: "Field Inspection",
  },

   {
    id: 2,
    type: "image",
    src: "/assets/gallery/photo2.jpg",
    alt: "Wheat Harvest",
  },
  {
    id: 3,
    type: "image",
    src: "/assets/gallery/photo3.jpg",
    alt: "Laboratory Testing",
  },

   {
    id: 4,
    type: "image",
    src: "/assets/gallery/photo4.jpg",
    alt: "Organic Growth",
  },

  {

    id: 5,

    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=600",

    alt: "Farmer Meeting",

  },

  {

    id: 6,

    src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=600",

    alt: "Modern Farming",

  },

   // CHANGED TO VIDEO
  {
    id: 7,
    type: "video",
    src: "/assets/gallery/video1.mp4",
    alt: "Modern Farming Process",
  },
  // CHANGED TO VIDEO
  {
    id: 8,
    type: "video",
    src: "/assets/gallery/video2.mp4",
    alt: "Greenhouse Walkthrough",
  },

  {

    id: 9,

    src: "https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?auto=format&fit=crop&q=80&w=600",

    alt: "Equipment",

  },

  {

    id: 10,

    src: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=600",

    alt: "Harvest Season",

  },

];



const About = () => {

  return (

    <div className="min-h-screen bg-background selection:bg-primary/20">

      <TopBar />

      <Navigation />



      {/* Background Ambience */}

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-60" />

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-accent/10 rounded-full blur-[100px] opacity-60" />

      </div>



      {/* Hero Section */}

      <section className="relative pt-8 pb-0 overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">

          <motion.div

            initial="hidden"

            animate="visible"

            variants={fadeInUp}

            className="max-w-4xl mx-auto text-center"

          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">

              <Award className="w-4 h-4" />

              <span>ISO 9001:2015 Certified Company</span>

            </div>



            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">

              Cultivating the{" "}

              <span className="text-primary relative">

                Future

                <svg

                  className="absolute w-full h-3 -bottom-1 left-0 text-lime-accent opacity-50"

                  viewBox="0 0 100 10"

                  preserveAspectRatio="none"

                >

                  <path

                    d="M0 5 Q 50 10 100 5"

                    stroke="currentColor"

                    strokeWidth="4"

                    fill="none"

                  />

                </svg>

              </span>

            </h1>



            <div className="relative p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl max-w-2xl mx-auto shadow-lg">

              <p className="text-3xl md:text-4xl font-bold text-foreground/80 italic font-serif mb-2">

                "किसान बढ़ेगा तो देश बढ़ेगा"

              </p>

              <div className="w-16 h-1 bg-primary mx-auto my-4 rounded-full" />

              <p className="text-xl text-muted-foreground">

                "When farmers grow, the nation grows"

              </p>

            </div>

          </motion.div>

        </div>

      </section>



      {/* Stats Section */}

      <section className="py-12 bg-primary relative overflow-hidden">

        <div className="absolute inset-0 opacity-10 pattern-grid-lg" />



        <div className="container mx-auto px-4 relative z-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {stats.map((stat, index) => {

              const Icon = stat.icon;

              return (

                <motion.div

                  key={index}

                  initial={{ opacity: 0, scale: 0.8 }}

                  whileInView={{ opacity: 1, scale: 1 }}

                  viewport={{ once: true }}

                  transition={{ delay: index * 0.1, duration: 0.5 }}

                  className="text-center group"

                >

                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">

                    <Icon className="w-6 h-6" />

                  </div>

                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">

                    {stat.value}

                  </div>

                  <div className="text-primary-foreground/80 font-medium">

                    {stat.label}

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>



      {/* FOUNDER & STORY SECTION */}

      <section className="py-24">

        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Founder Image */}

            <motion.div

              initial="hidden"

              whileInView="visible"

              viewport={{ once: true }}

              variants={fadeInUp}

              className="lg:col-span-5 relative"

            >

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] group">

                <img

                  src="/assets/profile.jpeg"

                  alt="Founder"

                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

                />



                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />



                <div className="absolute bottom-0 left-0 w-full p-8 text-white z-20">

                  <div className="bg-primary/90 backdrop-blur-md inline-block px-4 py-1 rounded-full text-xs font-bold mb-3">

                    VISIONARY LEADERSHIP

                  </div>

                  <h3 className="text-3xl font-bold mb-1">

                   DR. BHUPENDRA KUMAR SINGH

                  </h3>

                  <p className="text-white/80 font-medium text-lg">

                    Founder & Chairman

                  </p>

                  <p className="mt-4 text-white/70 text-sm italic border-l-2 border-primary pl-3">

                    "Our mission is not just to sell products, but to cultivate

                    a legacy of trust with every farmer in India."

                  </p>

                </div>

              </div>



              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-10" />

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-lime-accent/20 rounded-full blur-xl -z-10" />

            </motion.div>



            {/* STORY TEXT */}

            <motion.div

              initial="hidden"

              whileInView="visible"

              viewport={{ once: true }}

              variants={staggerContainer}

              className="lg:col-span-7 flex flex-col justify-center h-full"

            >

              <motion.div variants={fadeInUp}>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">

                  Our <span className="text-primary">Story</span>

                </h2>



                <div className="prose prose-lg text-muted-foreground space-y-6 mb-10">

                  <p>

                    Rolex New Biotech is a professionally managed leader in

                    micro-nutrients and bio-fertilizers. As an ISO 9001:2015

                    certified entity, we specialize in manufacturing, trading,

                    and importing a vast array of agricultural solutions—from

                    Plant Growth Regulators to Bio-Pesticides.

                  </p>



                  <p>

                    Our state-of-the-art facility in{" "}

                    <strong>Sikandrabad, Buland Sahar</strong>, is the heart of

                    our innovation.

                  </p>



                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl border border-border">

                    <Quote className="w-8 h-8 text-primary/40 flex-shrink-0" />

                    <p className="italic text-foreground/80 text-base">

                      "We exercise flexible and open-door business policies that

                      help us listen to our esteemed customers' suggestions and

                      continuously improve."

                    </p>

                  </div>

                </div>

              </motion.div>



              {/* Highlights */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {[

                  {

                    title: "Advanced Manufacturing",

                    desc: "State-of-the-art unit equipped with sophisticated machinery.",

                    icon: Microscope,

                  },

                  {

                    title: "Global Standards",

                    desc: "ISO 9001:2015 certified processes and quality control.",

                    icon: Globe,

                  },

                  {

                    title: "Product Diversity",

                    desc: "From Humic Acid to Bio Insecticides, we cover it all.",

                    icon: Sprout,

                  },

                ].map((item, idx) => (

                  <motion.div key={idx} variants={fadeInUp}>

                    <Card className="border-none shadow-sm bg-card hover:bg-card/80 transition-colors duration-300 h-full">

                      <CardContent className="p-5 flex items-start gap-3">

                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">

                          <item.icon className="w-5 h-5" />

                        </div>

                        <div>

                          <h3 className="text-lg font-bold text-foreground">

                            {item.title}

                          </h3>

                          <p className="text-muted-foreground text-sm leading-tight mt-1">

                            {item.desc}

                          </p>

                        </div>

                      </CardContent>

                    </Card>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>



      {/* NEW SECTION: GALLERY */}

      <section className="py-20 relative bg-muted/20">

        <div className="container mx-auto px-4">

          <motion.div

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true }}

            variants={fadeInUp}

            className="text-center mb-12"

          >

            <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary mb-3">

              <Leaf className="w-4 h-4" />

              <span className="uppercase tracking-wide">In The Field</span>

            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground">

              Glimpses of Excellence

            </h2>

          </motion.div>



          {/* Grid Layout - 5 columns on desktop for "small" feel */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {galleryImages.map((media) => (
              <motion.div
                key={media.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-3xl aspect-square shadow-sm cursor-pointer bg-black"
              >
                {/* Check Media Type */}
                {media.type === "video" ? (
                  <div className="relative w-full h-full">
                    <video
                      src={media.src}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute top-2 right-2 z-10">
                      <PlayCircle className="w-6 h-6 text-white/80" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={media.src}
                    alt={media.alt}
                    onError={(e) => {
                      // Fallback to a placeholder if remote image fails
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=300";
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {media.type === "video" ? (
                      <PlayCircle className="w-8 h-8 text-white mb-2 mx-auto" />
                    ) : (
                      <ZoomIn className="w-8 h-8 text-white mb-2 mx-auto" />
                    )}
                    <p className="text-white text-xs font-bold px-2 text-center uppercase tracking-wider">
                      {media.alt}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>



      {/* Values */}

      <section className="py-24 bg-muted/30 relative">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />



        <div className="container mx-auto px-4 relative z-10">

          <motion.div

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true }}

            variants={fadeInUp}

            className="text-center mb-16"

          >

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">

              Our Core Values

            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">

              The principles that guide everything we do and every product we

              create.

            </p>

          </motion.div>



          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true }}

            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

          >

            {values.map((value, index) => {

              const Icon = value.icon;

              return (

                <motion.div key={index} variants={fadeInUp}>

                  <Card className="h-full border-none shadow-lg bg-card hover:-translate-y-2 transition-transform duration-300">

                    <CardContent className="p-8 text-center h-full flex flex-col items-center">

                      <div

                        className={`w-16 h-16 rounded-2xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}

                      >

                        <Icon className={`w-8 h-8 ${value.color}`} />

                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3">

                        {value.title}

                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed">

                        {value.description}

                      </p>

                    </CardContent>

                  </Card>

                </motion.div>

              );

            })}

          </motion.div>

        </div>

      </section>



      {/* CTA */}

      <section className="py-20 border-t border-border">

        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">Ready to grow with us?</h2>

          <div className="flex flex-wrap justify-center gap-4">

            <div className="flex items-center gap-2 text-muted-foreground">

              <CheckCircle2 className="w-5 h-5 text-primary" />

              <span>Trusted Quality</span>

            </div>

            <div className="flex items-center gap-2 text-muted-foreground">

              <CheckCircle2 className="w-5 h-5 text-primary" />

              <span>Expert Support</span>

            </div>

            <div className="flex items-center gap-2 text-muted-foreground">

              <CheckCircle2 className="w-5 h-5 text-primary" />

              <span>Best Prices</span>

            </div>

          </div>

        </div>

      </section>



      <Footer />

    </div>

  );

};



export default About;