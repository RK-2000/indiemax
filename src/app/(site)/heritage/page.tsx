import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hand, Heart, Leaf, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Heritage | IndieMax",
  description: "Discover the story behind IndieMax. Celebrating India's rich textile heritage through artisanal fashion.",
};

const values = [
  {
    icon: Hand,
    title: "Handcrafted Excellence",
    description: "Every piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations. No machines, no shortcuts.",
  },
  {
    icon: Heart,
    title: "Artisan First",
    description: "We work directly with master craftspeople, ensuring fair wages, safe conditions, and the preservation of their invaluable heritage skills.",
  },
  {
    icon: Sparkles,
    title: "Limited Editions",
    description: "Each collection is a unique story with no repeats. When it's gone, it's gone — making every piece truly special and collectible.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Natural dyes, organic fabrics, and slow fashion principles guide our commitment to the environment and future generations.",
  },
];

const milestones = [
  { year: "2021", title: "The Beginning", description: "IndieMax was founded with a mission to bring authentic Indian craft to the modern wardrobe." },
  { year: "2022", title: "First Collection", description: "Launched 'Rajasthan Reverie' featuring 50 handcrafted pieces from Bagru artisans." },
  { year: "2023", title: "Artisan Network", description: "Expanded our network to 25 master craftspeople across 5 states of India." },
  { year: "2024", title: "Recognition", description: "Featured in Vogue India's 'Brands Preserving Heritage' and won the Sustainable Fashion Award." },
  { year: "2025", title: "Growing Impact", description: "Directly supported 100+ artisan families while launching 8 new collections." },
];

export default function HeritagePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&q=80"
          alt="Indian textile heritage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full text-cream">
            <span className="text-sm tracking-wider uppercase text-gold-light mb-3 block">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-3xl">
              Weaving Heritage Into Everyday Life
            </h1>
            <p className="text-xl text-cream/80 max-w-2xl">
              IndieMax exists to celebrate India&apos;s extraordinary textile traditions 
              while empowering the artisans who keep them alive.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6">
                Bridging Tradition and Tomorrow
              </h2>
              <div className="space-y-4 text-stone leading-relaxed">
                <p>
                  India&apos;s textile heritage spans millennia. From the indigo-dyed fabrics of the 
                  Indus Valley to the intricate Mughal-era embroideries, our ancestors created 
                  techniques that are still unmatched by modern machinery.
                </p>
                <p>
                  Yet today, these crafts face an uncertain future. Young people migrate to cities, 
                  drawn by the promise of steady wages. Master artisans grow older with no one to 
                  pass their knowledge to. Ancient techniques risk being lost forever.
                </p>
                <p>
                  IndieMax was born from a simple belief: that these traditions are too precious to 
                  lose. By creating a market for authentic handcrafted fashion, we ensure that 
                  artisans can earn a dignified living while practicing their ancestral crafts.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
                alt="Artisan at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-indigo text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm tracking-wider uppercase text-gold-light mb-3 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-light">
              What We Stand For
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold/30 rounded-full">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-light mb-3">{value.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section id="craft" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
              The Craft
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4">
              Techniques We Celebrate
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Each technique represents hundreds of years of refinement and cultural significance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Block Printing",
                description: "Hand-carved wooden blocks are dipped in natural dyes and stamped onto fabric. Each impression is unique.",
                image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
              },
              {
                title: "Bandhani",
                description: "The art of tie-dye where fabric is pinched and bound with thread before dyeing, creating intricate patterns.",
                image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
              },
              {
                title: "Kalamkari",
                description: "Literally 'pen work', this technique involves hand-painting fabric with natural dyes using a bamboo pen.",
                image: "https://images.unsplash.com/photo-1599643478518-a784e5dc3f17?w=600&q=80",
              },
            ].map((craft, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={craft.image}
                    alt={craft.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl text-charcoal mb-2">{craft.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{craft.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Milestones
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-light text-terracotta">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-terracotta" />
                  {index !== milestones.length - 1 && (
                    <div className="w-px h-full bg-terracotta/30 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-medium text-charcoal mb-1">{milestone.title}</h3>
                  <p className="text-stone">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6">
            Join the Heritage Movement
          </h2>
          <p className="text-lg text-stone mb-8">
            Every purchase supports traditional artisans and keeps ancient crafts alive. 
            Explore our collections and become part of the story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections"
              className="px-8 py-4 bg-terracotta text-cream hover:bg-terracotta-dark transition-colors tracking-wider inline-flex items-center justify-center gap-2"
            >
              EXPLORE COLLECTIONS
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/artisans"
              className="px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-colors tracking-wider"
            >
              MEET THE ARTISANS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
