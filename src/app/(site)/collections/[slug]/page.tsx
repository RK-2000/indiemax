import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ArtisanCard from "@/components/ArtisanCard";
import { getCollectionBySlug } from "@/payload/queries";
import { getMediaUrl } from "@/payload/client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug).catch(() => null);
  
  return {
    title: collection ? `${collection.name} | IndieMax` : "Collection | IndieMax",
    description: collection?.tagline || "Explore this unique collection of handcrafted Indian heritage prints.",
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug).catch(() => null);
  
  if (!collection) {
    notFound();
  }
  
  // Transform data
  const coverImage = getMediaUrl(collection.coverImage) || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&q=80';
  const artisans = (collection.artisans || []).map((artisan: any) => ({
    name: artisan.name,
    slug: artisan.slug,
    photo: getMediaUrl(artisan.photo) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    craft: artisan.craft || '',
    region: artisan.region || '',
    shortBio: artisan.shortBio || '',
  }));
  
  const products = (collection.products || []).map((product: any) => ({
    name: product.name,
    slug: product.slug,
    image: getMediaUrl(product.images?.[0]) || 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    price: product.price || 0,
    originalPrice: product.originalPrice,
    stock: product.stock || 0,
  }));
  const story = collection.story || '';
  
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={coverImage}
          alt={collection.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 w-full text-cream">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-sm text-cream/80 hover:text-cream mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>
            <span className="text-sm tracking-wider uppercase text-gold-light mb-3 block">
              {collection.craftTechnique} • {collection.region}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
              {collection.name}
            </h1>
            <p className="text-xl text-cream/80 max-w-2xl">
              {collection.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Story */}
      {story && (
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm tracking-wider uppercase text-terracotta mb-6">
              The Story
            </h2>
            <div className="prose prose-lg text-stone">
              {story.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Artisans */}
      {artisans.length > 0 && (
        <section className="py-16 md:py-24 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
                The Makers
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-charcoal">
                Artisans Behind This Collection
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {artisans.map((artisan: any) => (
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
      )}

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
              {products.length} Pieces
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Shop the Collection
            </h2>
          </div>
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {products.map((product: any) => (
                <ProductCard
                  key={product.slug}
                  name={product.name}
                  slug={product.slug}
                  image={product.image}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  stock={product.stock}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-stone">No products in this collection yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
