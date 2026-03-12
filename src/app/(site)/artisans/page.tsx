import { Metadata } from "next";
import ArtisanCard from "@/components/ArtisanCard";
import { getAllArtisans } from "@/payload/queries";
import { getMediaUrl } from "@/payload/client";

export const metadata: Metadata = {
  title: "Artisans | IndieMax",
  description: "Meet the master craftspeople behind our handcrafted pieces. Preserving India's textile heritage.",
};

const crafts = [
  "All Crafts",
  "Block Printing",
  "Bandhani",
  "Ajrakh",
  "Kantha",
  "Kalamkari",
  "Ikat",
  "Chikankari",
];

export default async function ArtisansPage() {
  const artisans = await getAllArtisans().catch(() => []);
  
  // Transform artisans data for display
  const artisansList = artisans.map((artisan: any) => ({
    name: artisan.name,
    slug: artisan.slug,
    photo: getMediaUrl(artisan.photo) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    craft: artisan.craft || '',
    region: artisan.region || '',
    shortBio: artisan.shortBio || '',
  }));
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-indigo text-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm tracking-wider uppercase text-gold-light mb-3 block">
            The Makers
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Our Artisans
          </h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Behind every piece is a master craftsperson keeping centuries-old traditions alive. 
            Meet the hands that create your garments.
          </p>
        </div>
      </section>

      {/* Craft Filter */}
      <section className="border-b border-sand sticky top-16 md:top-20 bg-cream z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {crafts.map((craft) => (
              <button
                key={craft}
                className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                  craft === "All Crafts"
                    ? "bg-charcoal text-cream"
                    : "bg-transparent text-charcoal hover:bg-sand"
                }`}
              >
                {craft}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {artisansList.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {artisansList.map((artisan: any) => (
                <ArtisanCard
                  key={artisan.slug}
                  name={artisan.name}
                  slug={artisan.slug}
                  photo={artisan.photo}
                  craft={artisan.craft}
                  region={artisan.region}
                  shortBio={artisan.shortBio}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-stone text-lg">No artisans available yet.</p>
              <p className="text-taupe mt-2">Check back soon to meet our artisans!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sand py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6">
            Supporting Artisan Communities
          </h2>
          <p className="text-lg text-stone mb-8">
            When you purchase from IndieMax, you directly support these artisans and their families. 
            We ensure fair wages, safe working conditions, and the preservation of their traditional skills.
          </p>
          <a
            href="/heritage"
            className="inline-block px-8 py-4 bg-terracotta text-cream hover:bg-terracotta-dark transition-colors tracking-wider"
          >
            LEARN ABOUT OUR MISSION
          </a>
        </div>
      </section>
    </div>
  );
}
