import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Maximize, CalendarDays, Check, Phone, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { propertiesData } from "@/data/properties";
import { notFound } from "next/navigation";

// Since it's App Router Next.js 15, we define `params` properly
export default async function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const property = propertiesData.find((p) => p.id === resolvedParams.id);

  if (!property) {
    notFound();
  }

  const amenities = [
    "Swimming Pool", "24/7 Security", "Clubhouse", "Gymnasium", 
    "Power Backup", "Car Parking", "Landscaped Gardens", "Vaastu Compliant"
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Link */}
        <Link href="/properties" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Properties
        </Link>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1 font-semibold text-sm">
                {property.status}
              </Badge>
              <Badge variant="outline" className="text-slate-600 border-slate-300 font-medium px-3 py-1 text-sm">
                {property.type}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              {property.title}
            </h1>
            <div className="flex items-center text-slate-500 text-lg">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              {property.location}, {property.city}
            </div>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-sm text-slate-500 font-medium tracking-widest uppercase mb-1">Asking Price</p>
            <p className="text-4xl md:text-5xl font-bold text-primary">₹{property.price}</p>
          </div>
        </div>

        {/* Main Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <div className="md:col-span-2 relative h-full">
            <Image 
              src={property.image} 
              alt={property.title}
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden md:flex flex-col gap-4 h-full">
            <div className="relative flex-1">
              <Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Interior 1" fill className="object-cover" />
            </div>
            <div className="relative flex-1">
              <Image src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Interior 2" fill className="object-cover" />
              <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center cursor-pointer hover:bg-slate-900/40 transition-colors">
                <span className="text-white font-medium text-lg">+12 Photos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-2/3 space-y-12">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex flex-col items-center justify-center text-center p-4 border-r border-slate-100 last:border-0 md:last:border-r-0">
                <BedDouble className="h-8 w-8 text-primary mb-3" />
                <span className="text-2xl font-bold text-slate-900">{property.bedrooms}</span>
                <span className="text-sm text-slate-500">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 border-r border-slate-100 last:border-0 md:last:border-r-0">
                <Bath className="h-8 w-8 text-primary mb-3" />
                <span className="text-2xl font-bold text-slate-900">{property.bathrooms}</span>
                <span className="text-sm text-slate-500">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 border-r border-slate-100 last:border-0 md:last:border-r-0">
                <Maximize className="h-8 w-8 text-primary mb-3" />
                <span className="text-2xl font-bold text-slate-900">{property.area}</span>
                <span className="text-sm text-slate-500">Sq. Ft.</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4">
                <CalendarDays className="h-8 w-8 text-primary mb-3" />
                <span className="text-2xl font-bold text-slate-900">2024</span>
                <span className="text-sm text-slate-500">Built Year</span>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 text-slate-900">Property Overview</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  Experience the pinnacle of luxury living in this exquisite {property.type.toLowerCase()} located in the prestigious neighborhood of {property.location}, {property.city}. 
                  Meticulously designed with an emphasis on space, natural light, and premium ventilation, this home offers a sanctuary away from the hustle and bustle of city life.
                </p>
                <p>
                  The residence features sweeping living spaces, Italian marble flooring, and panoramic views of the skyline. The gourmet kitchen comes fully equipped with state-of-the-art appliances, while the primary suite includes a spa-like bathroom and a massive walk-in closet. 
                  Every detail has been thoughtfully curated for those who appreciate the finer things in life.
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 text-slate-900">Premium Amenities</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                {amenities.map((item, index) => (
                  <div key={index} className="flex items-center text-slate-700">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 text-slate-900">Location Map</h2>
              <div className="w-full h-80 bg-slate-200 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-300">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=India&zoom=14&size=800x400&sensor=false')] opacity-30 bg-cover bg-center grayscale" />
                <div className="relative z-10 flex flex-col items-center bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200">
                  <MapPin className="h-10 w-10 text-primary mb-2 animate-bounce" />
                  <p className="font-semibold text-slate-900">{property.location}, {property.city}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200">
              <h3 className="text-xl font-bold font-serif mb-2">Request Information</h3>
              <p className="text-sm text-slate-500 mb-6">Fill out the form below and our senior advisor will contact you shortly.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Full Name</label>
                  <Input type="text" placeholder="e.g. Rahul Sharma" className="bg-slate-50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Phone Number</label>
                  <Input type="tel" placeholder="+91 98765 43210" className="bg-slate-50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Email Address</label>
                  <Input type="email" placeholder="rahul@example.com" className="bg-slate-50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Message</label>
                  <textarea 
                    className="w-full min-h-[120px] rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 resize-y"
                    placeholder={`I am interested in learning more about ${property.title}.`}
                  />
                </div>
                <Button className="w-full h-12 text-base mt-2">Send Enquiry</Button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <h4 className="font-semibold text-slate-900 mb-4">Or Contact Directly</h4>
                <div className="space-y-3">
                  <a href="tel:+918005551234" className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-primary/50 hover:bg-primary/5 transition-colors group">
                    <div className="bg-primary/10 p-2 rounded-md group-hover:bg-primary transition-colors">
                      <Phone className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium tracking-wide">SALES TEAM</p>
                      <p className="text-sm font-semibold text-slate-900">+91 800 555 1234</p>
                    </div>
                  </a>
                  <a href="mailto:sales@trsrealty.in" className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-primary/50 hover:bg-primary/5 transition-colors group">
                    <div className="bg-primary/10 p-2 rounded-md group-hover:bg-primary transition-colors">
                      <Mail className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium tracking-wide">EMAIL US</p>
                      <p className="text-sm font-semibold text-slate-900">sales@trsrealty.in</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
