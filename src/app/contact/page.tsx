"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Header Section */}
      <div className="bg-slate-950 text-white py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Whether you&apos;re looking to buy, sell, or invest in premium real estate, our expert advisors are here to help.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div className="w-full lg:w-5/12 space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Reach out to us directly through any of our channels or visit our corporate headquarters. We ensure a response within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Head Office</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Level 4, Prestige Trade Tower,<br />
                      Palace Road, Vasanth Nagar,<br />
                      Bangalore, Karnataka 560001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Phone Numbers</h3>
                    <p className="text-slate-600">Sales: +91 800 555 1234</p>
                    <p className="text-slate-600">Support: +91 800 555 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email Addresses</h3>
                    <p className="text-slate-600">hello@trsrealty.in</p>
                    <p className="text-slate-600">investments@trsrealty.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Send us a Message</h2>
              <p className="text-slate-500 mb-8">Fill out the form and our team will get back to you promptly.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <Input type="text" placeholder="Rahul" className="bg-slate-50 border-slate-200 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <Input type="text" placeholder="Sharma" className="bg-slate-50 border-slate-200 h-12" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <Input type="email" placeholder="rahul@example.com" className="bg-slate-50 border-slate-200 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone Number</label>
                    <Input type="tel" placeholder="+91 98765 43210" className="bg-slate-50 border-slate-200 h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Inquiry Type</label>
                  <select className="w-full h-12 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary text-slate-600">
                    <option value="buy">I want to buy a property</option>
                    <option value="sell">I want to sell my property</option>
                    <option value="invest">I am looking for investment opportunities</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea 
                    className="w-full min-h-[150px] rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-y"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <Button className="w-full h-14 text-lg">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
