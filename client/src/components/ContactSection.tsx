"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+94 781290968", href: "tel:+94781290968", color: "text-green-500 dark:text-green-400" },
    { icon: Mail, label: "Email", value: "sithnuwanpramudith2000@gmail.com", href: "mailto:sithnuwanpramudith2000@gmail.com", color: "text-blue-500 dark:text-blue-400" },
    { icon: MapPin, label: "Location", value: "No: 33/D, Gamagewaththa, Kapugama, Devinuwara", href: "#", color: "text-red-500 dark:text-red-400" },
    { icon: Linkedin, label: "LinkedIn", value: "sithnuwan-pramudith", href: "https://www.linkedin.com/in/sithnuwan-pramudith", color: "text-indigo-500 dark:text-indigo-400" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submitted:", formData);

    setTimeout(() => {
      toast({ title: "Message Sent!", description: "Thank you! I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleContactClick = (contact: typeof contactInfo[0]) => {
    if (contact.href !== "#") window.open(contact.href, contact.label === "Email" ? "_self" : "_blank");
  };

  // Motion variants
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-[#0a192f] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Always interested in new opportunities, collaborations, and connections. Feel free to reach out!
          </p>
        </div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={item}>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-[#112240] shadow hover:shadow-lg cursor-pointer transition"
                    onClick={() => handleContactClick(contact)}
                  >
                    <div className={`p-3 rounded-lg bg-muted/20`}>
                      <IconComponent className={`h-6 w-6 ${contact.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{contact.label}</h4>
                      <p className="text-slate-700 dark:text-slate-300 break-all">{contact.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={item}>
              <Card className="hover-elevate transition">
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Currently seeking internship opportunities and open to discussing exciting projects in web development, database management, and IT.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={item}>
            <Card className="hover-elevate transition">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={6} placeholder="Your message..." required />
                  </div>
                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white flex items-center justify-center" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
