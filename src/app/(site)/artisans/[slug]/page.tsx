import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Award, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getArtisanBySlug } from "@/payload/queries";
import { getMediaUrl } from "@/payload/client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artisan = await getArtisanBySlug(slug).catch(() => null);
  
  return {
    title: artisan ? `${artisan.name} | IndieMax` : "Artisan | IndieMax",
    description: artisan?.shortBio || "Meet the master craftsperson behind our handcrafted pieces.",
  };
}

export default async function ArtisanPage({ params }: Props) {
  const { slug } = await params;
  const artisan = await getArtisanBySlug(slug).catch(() => null);
  
  if (!artisan) {
    notFound();
  }
  
  // Transform data
  const photo = getMediaUrl(artisan.photo) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80';
  
  // Extract text from rich text story field
  const storyText = artisan.story?.root?.children
    ?.map((node: any) => node.children?.map((child: any) => child.text).join(''))
    .filter(Boolean)
    .join('\n\n') || '';
  
  const craftProcess = (artisan.craftProcess || []).map((step: any) => ({
    step: step.step || '',
    description: step.description || '',
    image: getMediaUrl(step.image) || 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
  }));
  
  const products = (artisan.products || []).map((product: any) => ({
    name: product.name,
    slug: product.slug,
    image: getMediaUrl(product.images?.[0]) || 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    price: product.price || 0,
    stock: product.stock || 0,
    collectionName: typeof product.collection === 'object' ? product.collection?.name : '',
  }));
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
                src={photo}
                alt={artisan.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
                {artisan.craft}
              </span>
              <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
                {artisan.name}
              </h1>
              <p className="text-xl text-stone mb-8">
                {artisan.shortBio}
              </p>
              
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-sand">
                <div>
                  <MapPin className="w-5 h-5 text-terracotta mb-2" />
                  <p className="text-sm text-stone">Region</p>
                  <p className="font-medium text-charcoal">{artisan.region}</p>
                </div>
                <div>
                  <Award className="w-5 h-5 text-terracotta mb-2" />
                  <p className="text-sm text-stone">Craft</p>
                  <p className="font-medium text-charcoal">{artisan.craft}</p>
                </div>
                <div>
                  <Clock className="w-5 h-5 text-terracotta mb-2" />
                  <p className="text-sm text-stone">Experience</p>
                  <p className="font-medium text-charcoal">{artisan.experience || 0} years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      {storyText && (
        <section className="py-16 md:py-24 bg-sand">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm tracking-wider uppercase text-terracotta mb-6">
              The Story
            </h2>
            <div className="prose prose-lg text-stone">
              {storyText.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Craft Process */}
      {craftProcess.length > 0 && (
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
              {craftProcess.map((step: any, index: number) => (
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
      )}

      {/* Products by Artisan */}
      {products.length > 0 && (
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
                Shop Their Work
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-charcoal">
                Pieces by {artisan.name}
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {products.map((product: any) => (
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
      )}
    </div>
  );
}
