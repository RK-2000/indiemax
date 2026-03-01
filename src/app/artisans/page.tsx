import { Metadata } from "next";
import ArtisanCard from "@/components/ArtisanCard";

export const metadata: Metadata = {
  title: "Artisans | IndieMax",
  description: "Meet the master craftspeople behind our handcrafted pieces. Preserving India's textile heritage.",
};

// Sample data - In production, this would come from Sanity CMS
const sampleArtisans = [
  {
    name: "Ramji Bhai Khatri",
    slug: "ramji-bhai-khatri",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    craft: "Block Printing",
    region: "Bagru, Rajasthan",
    shortBio: "Third-generation block printer preserving traditional Dabu techniques. His family has been practicing this craft for over 80 years.",
  },
  {
    name: "Lakshmi Devi",
    slug: "lakshmi-devi",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    craft: "Bandhani",
    region: "Kutch, Gujarat",
    shortBio: "Master of the intricate tie-dye technique. Known for creating patterns with over 50,000 tiny knots in a single piece.",
  },
  {
    name: "Mohammed Siddiq",
    slug: "mohammed-siddiq",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    craft: "Ajrakh",
    region: "Ajrakhpur, Gujarat",
    shortBio: "Keeper of the ancient Ajrakh tradition. Uses natural dyes and a 14-step printing process passed down through 7 generations.",
  },
  {
    name: "Sumitra Ben",
    slug: "sumitra-ben",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    craft: "Kantha Embroidery",
    region: "Shantiniketan, Bengal",
    shortBio: "Transforms simple running stitches into storytelling masterpieces. Each piece takes months to complete.",
  },
  {
    name: "Vijay Kumar",
    slug: "vijay-kumar",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    craft: "Kalamkari",
    region: "Srikalahasti, Andhra Pradesh",
    shortBio: "Hand-paints intricate mythological scenes using natural dyes. His work adorns museums worldwide.",
  },
  {
    name: "Geeta Devi",
    slug: "geeta-devi",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    craft: "Natural Dyeing",
    region: "Sanganer, Rajasthan",
    shortBio: "Expert in extracting vibrant colors from local plants and minerals. Specializes in indigo and pomegranate dyes.",
  },
  {
    name: "Abdul Rehman",
    slug: "abdul-rehman",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    craft: "Ikat Weaving",
    region: "Pochampally, Telangana",
    shortBio: "Master weaver creating mesmerizing geometric patterns through resist-dyeing yarns before weaving.",
  },
  {
    name: "Kamala Bai",
    slug: "kamala-bai",
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&q=80",
    craft: "Chikankari",
    region: "Lucknow, Uttar Pradesh",
    shortBio: "Practices the delicate white-on-white embroidery tradition. Her needlework is renowned for its finesse.",
  },
];

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

export default function ArtisansPage() {
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {sampleArtisans.map((artisan) => (
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
