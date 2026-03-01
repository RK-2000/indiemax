import { Metadata } from "next";
import CollectionCard from "@/components/CollectionCard";

export const metadata: Metadata = {
  title: "Collections | IndieMax",
  description: "Explore our curated collections of handcrafted Indian heritage prints. Each collection tells a unique story.",
};

// Sample data - In production, this would come from Sanity CMS
const sampleCollections = [
  {
    name: "Rajasthan Reverie",
    slug: "rajasthan-reverie",
    tagline: "A journey through the vibrant textile traditions of the desert state",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    craftTechnique: "Block Printing",
    productCount: 12,
  },
  {
    name: "Gujarat Whispers",
    slug: "gujarat-whispers",
    tagline: "The ancient art of Ajrakh meets contemporary silhouettes",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&q=80",
    craftTechnique: "Ajrakh",
    productCount: 8,
  },
  {
    name: "Bengal Threads",
    slug: "bengal-threads",
    tagline: "Kantha embroidery reimagined for the modern wardrobe",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
    craftTechnique: "Kantha",
    productCount: 10,
  },
  {
    name: "Indigo Dreams",
    slug: "indigo-dreams",
    tagline: "Natural indigo dyed pieces celebrating the blue gold of India",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    craftTechnique: "Natural Dyeing",
    productCount: 6,
  },
  {
    name: "Kalamkari Chronicles",
    slug: "kalamkari-chronicles",
    tagline: "Hand-painted stories from Andhra's master artists",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc3f17?w=800&q=80",
    craftTechnique: "Kalamkari",
    productCount: 9,
  },
  {
    name: "Ikat Impressions",
    slug: "ikat-impressions",
    tagline: "The mesmerizing resist-dye craft of Odisha and Telangana",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    craftTechnique: "Ikat",
    productCount: 7,
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-sand py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
            Our Collections
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6">
            Stories Woven in Fabric
          </h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Each collection is a limited edition journey into India&apos;s textile heritage. 
            No repeats, no restocks — just authentic, artisanal pieces that tell a story.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sampleCollections.map((collection) => (
              <CollectionCard
                key={collection.slug}
                name={collection.name}
                slug={collection.slug}
                tagline={collection.tagline}
                image={collection.image}
                craftTechnique={collection.craftTechnique}
                productCount={collection.productCount}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
