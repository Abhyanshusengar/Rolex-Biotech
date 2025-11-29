"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "F-18, Industrial Area, Sikandrabad, Buland Sahar (UP) - 203205",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: Phone,
    title: "Call Us (Toll Free)",
    details: "1800 2740 555",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "rolex.newbiotech@gmail.com",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Fri: 8:00 AM - 6:00 PM",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

const Contact = () => {
  // ---- form state ----
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // stop normal form redirect
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/abhyanshusengar@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phone: phone,
            Subject: subject,
            Message: message,
            _subject: "New enquiry from Rolex New Biotech website",
            _template: "table",
          }),
        }
      );

      if (!res.ok) {
        throw new Error("FormSubmit returned an error");
      }

      const data = await res.json();
      if (data.success !== "true") {
        throw new Error("FormSubmit did not return success");
      }

      setStatus("success");

      // clear fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        "Something went wrong while sending your message. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <TopBar />
      <Navigation />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-accent/10 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              24/7 Support
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our biotechnology solutions? Our agricultural
              experts are ready to help you cultivate success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card
                    className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full group"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <CardContent className="p-8 text-center h-full flex flex-col items-center justify-center">
                      <div
                        className={`w-16 h-16 rounded-2xl ${info.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-8 h-8 ${info.color}`} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {info.details}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form Section */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-none overflow-hidden shadow-2xl bg-card/80 backdrop-blur-md relative">
                {/* Form Header Gradient */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-lime-accent to-primary" />

                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Side: Context */}
                    <div className="lg:col-span-1 space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                          Let's Talk
                        </h2>
                        <p className="text-muted-foreground">
                          Fill out the form and we'll get back to you within 24
                          hours.
                        </p>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="space-y-4">
                        <p className="text-sm font-medium text-foreground">
                          Why contact us?
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Expert Consultation
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Bulk Order Inquiries
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Technical Support
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-2">
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label
                              htmlFor="firstName"
                              className="text-sm font-medium"
                            >
                              First Name
                            </Label>
                            <Input
                              id="firstName"
                              placeholder="John"
                              className="h-11 bg-background/50 focus:bg-background transition-all border-border/50 focus:ring-2 focus:ring-primary/20"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="lastName"
                              className="text-sm font-medium"
                            >
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              placeholder="Doe"
                              className="h-11 bg-background/50 focus:bg-background transition-all border-border/50 focus:ring-2 focus:ring-primary/20"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email Address
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                              className="h-11 bg-background/50 focus:bg-background transition-all border-border/50 focus:ring-2 focus:ring-primary/20"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="phone"
                              className="text-sm font-medium"
                            >
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              className="h-11 bg-background/50 focus:bg-background transition-all border-border/50 focus:ring-2 focus:ring-primary/20"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="subject"
                            className="text-sm font-medium"
                          >
                            Subject
                          </Label>
                          <Input
                            id="subject"
                            placeholder="How can we help you?"
                            className="h-11 bg-background/50 focus:bg-background transition-all border-border/50 focus:ring-2 focus:ring-primary/20"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="message"
                            className="text-sm font-medium"
                          >
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your requirements..."
                            rows={6}
                            className="bg-background/50 focus:bg-background transition-all border-border/50 focus:ring-2 focus:ring-primary/20 resize-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          />
                        </div>

                        {status === "success" && (
                          <p className="text-sm text-emerald-500">
                            ✅ Thank you! Your message has been sent
                            successfully.
                          </p>
                        )}

                        {status === "error" && (
                          <p className="text-sm text-red-500">
                            {errorMsg ||
                              "Something went wrong. Please try again later."}
                          </p>
                        )}

                        <Button
                          type="submit"
                          size="lg"
                          disabled={status === "loading"}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base group shadow-lg shadow-primary/20"
                        >
                          <span className="mr-2">
                            {status === "loading"
                              ? "Sending..."
                              : "Send Message"}
                          </span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Map Wrapper with border effect */}
            <div className="p-2 rounded-3xl bg-gradient-to-br from-border to-border/10 shadow-xl">
              <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-700 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.816768952647!2d77.68571607616604!3d28.424758493494193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf71720801e9%3A0x68d7f3330b2f0996!2sSikandrabad%2C%20Uttar%20Pradesh%20203205!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rolex New Biotech Location"
                  className="w-full h-full"
                />

                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur p-4 rounded-xl shadow-lg hidden md:block">
                  <p className="font-bold text-foreground">
                    Rolex New Biotech
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Industrial Area, Sikandrabad
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
