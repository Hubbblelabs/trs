"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MapPin, Landmark, ShieldCheck, TrendingUp, Users, Map, TreePine, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PropertyCard } from "@/components/PropertyCard";
import { propertiesData } from "@/data/properties";
import { testimonialsData } from "@/data/testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const stats = [
  { value: "2,500+", label: "Acres Sold" },
  { value: "850+", label: "Happy Clients" },
  { value: "15+", label: "Cities Covered" },
  { value: "₹1,200 Cr+", label: "Worth Transacted" },
];

export default function HomePage() {
  const featuredProperties = propertiesData.filter(p => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Premium Land & Real Estate"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 text-sm text-white/90 font-medium"
          >
            <Landmark className="inline h-4 w-4 mr-2 -mt-0.5" />
            India&apos;s Trusted Land &amp; Real Estate Advisory
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white max-w-5xl tracking-tight leading-tight mb-6"
          >
            Invest in <span className="text-accent italic pr-2">Land</span> That Grows With You
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl mb-12 font-light"
          >
            Premium plots, agricultural land, and commercial real estate — curated and verified for the discerning investor.
          </motion.p>

          {/* Search Bar Component */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-2xl shadow-2xl border border-white/20"
          >
            <div className="bg-white rounded-xl p-2 md:p-4 flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 w-full flex items-center gap-2 px-3 bg-slate-50 border border-slate-100 rounded-lg h-12">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Location or City (e.g. Pune, Bangalore)" 
                  className="border-none bg-transparent shadow-none focus-visible:ring-0 px-0 h-full text-base" 
                />
              </div>
              <div className="w-full md:w-[200px]">
                <Select>
                  <SelectTrigger className="h-12 border-slate-100 bg-slate-50 rounded-lg text-base">
                    <SelectValue placeholder="Land Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential-plot">Residential Plot</SelectItem>
                    <SelectItem value="commercial-land">Commercial Land</SelectItem>
                    <SelectItem value="agricultural">Agricultural Land</SelectItem>
                    <SelectItem value="farm-land">Farm Land</SelectItem>
                    <SelectItem value="industrial">Industrial Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-[200px]">
                <Select>
                  <SelectTrigger className="h-12 border-slate-100 bg-slate-50 rounded-lg text-base">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50l">Under ₹50 Lakh</SelectItem>
                    <SelectItem value="50l-1cr">₹50 Lakh - ₹1 Cr</SelectItem>
                    <SelectItem value="1-3">₹1 Cr - ₹3 Cr</SelectItem>
                    <SelectItem value="3-5">₹3 Cr - ₹5 Cr</SelectItem>
                    <SelectItem value="5-10">₹5 Cr - ₹10 Cr</SelectItem>
                    <SelectItem value="10+">₹10 Cr+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg" className="w-full md:w-auto h-12 rounded-lg px-8 text-base">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-3xl"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white font-serif">{stat.value}</p>
                <p className="text-sm text-slate-300/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Land Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Explore by Land Type</h2>
            <p className="text-muted-foreground text-lg">From residential plots to sprawling farmlands — find the right real estate for your goals.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Map, title: "Residential Plots", count: "120+ Listings", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
              { icon: TreePine, title: "Agricultural Land", count: "85+ Listings", color: "bg-lime-50 text-lime-600 border-lime-100" },
              { icon: BarChart3, title: "Commercial Land", count: "60+ Listings", color: "bg-blue-50 text-blue-600 border-blue-100" },
              { icon: Landmark, title: "Farm Houses", count: "45+ Listings", color: "bg-amber-50 text-amber-600 border-amber-100" },
            ].map((cat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link href="/properties">
                  <div className={`group relative p-6 md:p-8 rounded-2xl border ${cat.color} cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center`}>
                    <cat.icon className="h-10 w-10 mx-auto mb-4 transition-transform group-hover:scale-110" />
                    <h3 className="font-serif font-bold text-base md:text-lg mb-1">{cat.title}</h3>
                    <p className="text-xs text-slate-500">{cat.count}</p>
                    <ArrowRight className="h-4 w-4 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Featured Land &amp; Plots</h2>
              <p className="text-muted-foreground text-lg">Handpicked land parcels and prime real estate — verified and ready for investment.</p>
            </div>
            <Link href="/properties">
              <Button variant="outline" className="mt-6 md:mt-0 rounded-full group">
                View All Listings 
                <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProperties.map((property) => (
              <motion.div key={property.id} variants={fadeUp}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Why TRS Realty?</h2>
            <p className="text-muted-foreground text-lg">We don&apos;t just sell land; we ensure every parcel is legally clear, investment-worthy, and matched to your vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6 text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Title-Clear Verified</h3>
              <p className="text-muted-foreground">Every land parcel undergoes a rigorous legal title verification, encumbrance check, and zoning compliance audit.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow bg-gradient-to-b from-accent/5 to-transparent border-accent/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="bg-accent/20 p-4 rounded-full mb-6 text-accent-foreground">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Expert Land Advisors</h3>
              <p className="text-muted-foreground">Dedicated relationship managers who understand zoning laws, land appreciation trends, and the nuances of real estate investment.</p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6 text-primary">
                <Landmark className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">20+ Years in Real Estate</h3>
              <p className="text-muted-foreground">Two decades of deep market knowledge across major Indian cities ensuring prime land deals at the best value.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent blur-[100px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Don&apos;t just take our word for it. Here&apos;s what investors and landowners have to say about their experience with TRS Realty.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, i) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative"
              >
                <div className="text-accent text-6xl font-serif absolute top-4 right-6 opacity-20">&quot;</div>
                <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={50} height={50} 
                    className="rounded-full object-cover h-12 w-12 border-2 border-slate-700"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Invest in Prime Land?</h2>
          <p className="text-primary-foreground/90 text-xl font-light mb-10 max-w-2xl mx-auto">
            Schedule a personalized consultation with our senior land &amp; real estate advisors today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-8 h-14 text-lg w-full sm:w-auto">
                Contact Us Now
              </Button>
            </Link>
            <Link href="/properties">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white rounded-full px-8 h-14 text-lg w-full sm:w-auto">
                Browse Land Listings
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
