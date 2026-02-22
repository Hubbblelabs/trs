"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Office Building"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            For over two decades, TRS Realty has been synonymous with trust, luxury, and unparalleled real estate expertise in India.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target className="w-32 h-32" />
            </div>
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary relative z-10">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 relative z-10">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
              To redefine the real estate experience by consistently delivering properties that exceed expectations, maintaining absolute transparency in every transaction, and building lasting relationships grounded in trust.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-10 rounded-2xl border border-slate-800 shadow-sm text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-accent">
              <Eye className="w-32 h-32" />
            </div>
            <div className="bg-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-accent relative z-10">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4 relative z-10">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed relative z-10 text-lg">
              To be India&apos;s most respected and sought-after luxury real estate advisory, known for our integrity, market acumen, and commitment to realizing our clients&apos; dreams of the perfect home and lucrative investments.
            </p>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Core Values</h2>
            <p className="text-slate-500 text-lg">The foundational principles that guide every interaction and transaction at TRS Realty.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Integrity", desc: "We operate with uncompromised ethical standards and full transparency." },
              { icon: Award, title: "Excellence", desc: "We deliver premium quality in both our property selections and our advisory services." },
              { icon: Target, title: "Commitment", desc: "We are deeply committed to understanding and fulfilling our clients' precise needs." },
              { icon: Eye, title: "Foresight", desc: "We anticipate market trends to secure long-term value for our investors." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-slate-700">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold font-serif text-xl mb-3 text-slate-900">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-slate-500 text-lg">Meet the experts behind our two decades of continuous success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Singhania",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Priya Menon",
                role: "Head of Luxury Sales",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Anand Verma",
                role: "Director of Investments",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold font-serif text-slate-900">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
