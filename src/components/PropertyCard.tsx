import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Maximize, Heart } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface PropertyProps {
  id: string;
  title: string;
  location: string;
  city: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: string;
  status: "For Sale" | "For Rent";
  featured?: boolean;
}

export function PropertyCard({ property }: { property: PropertyProps }) {
  return (
    <Card className="group overflow-hidden rounded-xl border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <CardHeader className="p-0 relative">
        <div className="relative h-64 w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-primary/90 hover:bg-primary text-white font-medium border-none backdrop-blur-sm">
              {property.status}
            </Badge>
            {property.featured && (
              <Badge variant="secondary" className="bg-accent/90 hover:bg-accent text-accent-foreground font-medium border-none backdrop-blur-sm">
                Featured
              </Badge>
            )}
          </div>
          <button className="absolute top-4 right-4 p-2.5 rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-white hover:text-red-500 transition-colors">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <p className="font-semibold text-primary text-lg">
            ₹{property.price}
          </p>
          <p className="text-xs text-muted-foreground font-medium bg-secondary px-2 py-1 rounded-md">
            {property.type}
          </p>
        </div>
        <Link href={`/properties/${property.id}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-serif text-xl font-semibold line-clamp-1 mb-1" title={property.title}>
            {property.title}
          </h3>
        </Link>
        <div className="flex items-center text-muted-foreground text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1 shrink-0" />
          <span className="line-clamp-1">{property.location}, {property.city}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <BedDouble className="h-4 w-4 text-slate-400" />
            <span className="font-medium">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Bath className="h-4 w-4 text-slate-400" />
            <span className="font-medium">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Maximize className="h-4 w-4 text-slate-400" />
            <span className="font-medium">{property.area} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
