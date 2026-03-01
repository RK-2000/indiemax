import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Award, Clock } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Artisan | IndieMax",
  description: "Meet the master craftsperson behind our handcrafted pieces.",
};

// Sample data - In production, this would come from Sanity CMS based on the slug
const sampleArtisan = {
  name: "Ramji Bhai Khatri",
  slug: "ramji-bhai-khatri",
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  craft: "Block Printing",
  region: "Bagru, Rajasthan",
  experience: 35,
  shortBio: "Third-generation block printer preserving traditional Dabu techniques.",
  story: `Ramji Bhai Khatri learned the art of block printing at his father's side when he was just eight years old. In the dusty lanes of Bagru, a village that has been synonymous with this craft for over 500 years, he perfected the rhythmic motion of pressing hand-carved wooden blocks onto fabric.

"My grandfather used to say that the dye remembers everything," Ramji Bhai recalls. "The mood of the printer, the quality of the water, even the direction of the wind. Our job is not just to print patterns—it is to have a conversation with the cloth."

Today, at 55, Ramji Bhai is considered one of the finest practitioners of Dabu printing, a technique that involves applying mud resist before dyeing. His workshop, a modest open-air space shaded by a neem tree, has produced thousands of meters of fabric that have traveled to homes across the world.

Despite the pressures of modern manufacturing, Ramji Bhai refuses to compromise on traditional methods. He still sources natural indigo from Madhya Pradesh, extracts red from pomegranate rinds, and yellow from turmeric. "Synthetic dyes are faster," he admits, "but they don't have soul."`,
  craftProcess: [
    {
      step: "Block Carving",
      description: "Each wooden block is hand-carved from teak wood, a process that can take days for intricate designs.",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    },
    {
      step: "Fabric Preparation",
      description: "The fabric is washed, treated with natural mordants, and dried under the sun.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    },
    {
      step: "Mud Resist (Dabu)",
      description: "A mixture of mud, gum, and lime is applied to areas that will remain unprinted.",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
    },
    {
      step: "Block Printing",
      description: "Colors are applied using hand-carved wooden blocks, layer by layer.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc3f17?w=600&q=80",
    },
  ],
  products: [
    {
      name: "Azure Block Print Kurta",
      slug: "azure-block-print-kurta",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      price: 4500,
      stock: 3,
      collectionName: "Rajasthan Reverie",
    },
    {
      name: "Indigo Dabu Print Set",
      slug: "indigo-dabu-print-set",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      price: 6800,
      stock: 2,
      collectionName: "Indigo Dreams",
    },
    {
      name: "Natural Dye Cotton Dupatta",
      slug: "natural-dye-cotton-dupatta",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc3f17?w=800&q=80",
      price: 1800,
      stock: 8,
      collectionName: "Rajasthan Reverie",
    },
  ],
};

export default function ArtisanPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/artisans"
          className="inline-flex items-center gap-2 text-sm text-stone hover:text-charcoal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All Artisans
        </Link>
      </div>

      {/* Hero */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={sampleArtisan.photo}
                alt={sampleArtisan.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
                {sampleArtisan.craft}
              </span>
              <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
                {sampleArtisan.name}
              </h1>
              <p className="text-xl text-stone mb-8">
                {sampleArtisan.shortBio}
              </p>
              
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-sand">
                <div>
                  <MapPin className="w-5 h-5 text-terracotta mb-2" />
                  <p className="text-sm text-stone">Region</p>
                  <p className="font-medium text-charcoal">{sampleArtisan.region}</p>
                </div>
                <div>
                  <Award className="w-5 h-5 text-terracotta mb-2" />
                  <p className="text-sm text-stone">Craft</p>
                  <p className="font-medium text-charcoal">{sampleArtisan.craft}</p>
                </div>
                <div>
                  <Clock className="w-5 h-5 text-terracotta mb-2" />
                  <p className="text-sm text-stone">Experience</p>
                  <p className="font-medium text-charcoal">{sampleArtisan.experience} years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm tracking-wider uppercase text-terracotta mb-6">
            The Story
          </h2>
          <div className="prose prose-lg text-stone">
            {sampleArtisan.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              How It&apos;s Made
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sampleArtisan.craftProcess.map((step, index) => (
              <div key={index}>
                <div className="relative aspect-square overflow-hidden bg-sand mb-4">
                  <Image
                    src={step.image}
                    alt={step.step}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-8 h-8 bg-terracotta text-cream flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-medium text-charcoal mb-2">{step.step}</h3>
                <p className="text-sm text-stone">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Artisan */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
              Shop Their Work
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Pieces by {sampleArtisan.name}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {sampleArtisan.products.map((product) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                slug={product.slug}
                image={product.image}
                price={product.price}
                stock={product.stock}
                collectionName={product.collectionName}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
