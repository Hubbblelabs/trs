"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, Search, Map } from "lucide-react";
import { propertiesData } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Page Header */}
      <div className="bg-slate-950 text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4 text-xs text-white/80 font-medium"
          >
            <Map className="h-3.5 w-3.5" />
            Land & Real Estate Listings
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Explore Land &amp; Plots
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-2xl"
          >
            Discover India&apos;s most premium, title-verified land parcels — residential plots, agricultural land, commercial real estate, and more.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-28">
            <div className="flex items-center gap-2 mb-6 text-foreground font-serif text-xl font-bold">
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              <h2>Filters</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="text" 
                    placeholder="Keywords, location, city" 
                    className="pl-9 bg-slate-50 border-slate-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Location</label>
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-200">
                    <SelectValue placeholder="All Cities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="nashik">Nashik</SelectItem>
                    <SelectItem value="gurugram">Gurugram</SelectItem>
                    <SelectItem value="raigad">Raigad</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Land Type</label>
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-200">
                    <SelectValue placeholder="Any Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential-plot">Residential Plot</SelectItem>
                    <SelectItem value="agricultural">Agricultural Land</SelectItem>
                    <SelectItem value="commercial">Commercial Land</SelectItem>
                    <SelectItem value="farm-land">Farm Land</SelectItem>
                    <SelectItem value="industrial">Industrial Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Plot Size</label>
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-200">
                    <SelectValue placeholder="Any Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-2000">Under 2,000 sq.ft</SelectItem>
                    <SelectItem value="2000-5000">2,000 - 5,000 sq.ft</SelectItem>
                    <SelectItem value="5000-10000">5,000 - 10,000 sq.ft</SelectItem>
                    <SelectItem value="10000-plus">10,000+ sq.ft</SelectItem>
                    <SelectItem value="1-acre">1 Acre+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Budget Range</label>
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-200">
                    <SelectValue placeholder="Any Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50l">Under ₹50 Lakh</SelectItem>
                    <SelectItem value="50l-1cr">₹50 Lakh - ₹1 Cr</SelectItem>
                    <SelectItem value="1-3">₹1 Cr - ₹3 Cr</SelectItem>
                    <SelectItem value="3-5">₹3 Cr - ₹5 Cr</SelectItem>
                    <SelectItem value="5-10">₹5 Cr - ₹10 Cr</SelectItem>
                    <SelectItem value="over-10">Above ₹10 Cr</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Zoning</label>
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-200">
                    <SelectValue placeholder="Any Zoning" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="na-residential">NA Residential</SelectItem>
                    <SelectItem value="agricultural">Agricultural</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial MIDC</SelectItem>
                    <SelectItem value="tourism">Tourism Zone</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator className="bg-slate-100" />

              <Button className="w-full">Apply Filters</Button>
              <Button variant="ghost" className="w-full text-slate-500 hover:text-slate-800">Clear All</Button>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground font-medium">Showing {propertiesData.length} land listings</p>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground hidden sm:inline">Sort by:</span>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[160px] bg-white border-slate-200">
                  <SelectValue placeholder="Sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="area-large">Area: Largest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {propertiesData.map((property) => (
              <motion.div key={property.id} variants={fadeUp}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Placeholder */}
          <div className="mt-12 flex justify-center gap-2">
            <Button variant="outline" disabled className="border-slate-200">Previous</Button>
            <Button className="bg-primary text-white">1</Button>
            <Button variant="outline" className="border-slate-200">2</Button>
            <Button variant="outline" className="border-slate-200">3</Button>
            <Button variant="outline" className="border-slate-200">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
