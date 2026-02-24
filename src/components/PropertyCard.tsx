import Link from "next/link";
import { MapPin, Maximize, Heart, Ruler, MapPinned, Layers } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface PropertyProps {
  id: string;
  title: string;
  location: string;
  city: string;
  price: string;
  area: number;
  image: string;
  type: string;
  status: "For Sale" | "For Rent";
  featured?: boolean;
  plotArea?: string;
  dimensions?: string;
  zoning?: string;
  bedrooms?: number;
  bathrooms?: number;
}

const typeColorMap: Record<string, string> = {
  "Residential Plot": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Agricultural Land": "bg-lime-50 text-lime-700 border-lime-200",
  "Commercial Land": "bg-blue-50 text-blue-700 border-blue-200",
  "Farm Land": "bg-amber-50 text-amber-700 border-amber-200",
  "Industrial Land": "bg-slate-100 text-slate-700 border-slate-200",
};

export function PropertyCard({ property }: { property: PropertyProps }) {
  const typeClasses = typeColorMap[property.type] || "bg-secondary text-secondary-foreground";

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
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
          {/* Zoning badge at bottom of image */}
          {property.zoning && (
            <div className="absolute bottom-3 left-4">
              <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium border-white/50">
                <Layers className="h-3 w-3 mr-1" />
                {property.zoning}
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <p className="font-semibold text-primary text-lg">
            ₹{property.price}
          </p>
          <p className={`text-xs font-medium px-2.5 py-1 rounded-full border ${typeClasses}`}>
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
          {property.plotArea && (
            <div className="flex items-center gap-1.5 text-sm text-slate-600">
              <Maximize className="h-4 w-4 text-slate-400" />
              <span className="font-medium text-xs">{property.plotArea}</span>
            </div>
          )}
          {property.dimensions && (
            <div className="flex items-center gap-1.5 text-sm text-slate-600">
              <Ruler className="h-4 w-4 text-slate-400" />
              <span className="font-medium text-xs">{property.dimensions}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-sm text-slate-600">
            <MapPinned className="h-4 w-4 text-slate-400" />
            <span className="font-medium text-xs">{property.city}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
