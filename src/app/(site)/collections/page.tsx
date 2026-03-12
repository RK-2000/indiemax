import { Metadata } from "next";
import CollectionCard from "@/components/CollectionCard";
import { getAllCollections } from "@/payload/queries";
import { getMediaUrl } from "@/payload/client";

export const metadata: Metadata = {
  title: "Collections | IndieMax",
  description: "Explore our curated collections of handcrafted Indian heritage prints. Each collection tells a unique story.",
};

export default async function CollectionsPage() {
  const collections = await getAllCollections().catch(() => []);

  // Transform collections data for display
  const collectionsList = collections.map((collection: any) => ({
    name: collection.name,
    slug: collection.slug,
    tagline: collection.tagline || '',
    image: getMediaUrl(collection.coverImage) || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
    craftTechnique: collection.craftTechnique || '',
    productCount: 0,
  }));

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
          {collectionsList.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {collectionsList.map((collection: any) => (
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
          ) : (
            <div className="text-center py-16">
              <p className="text-stone text-lg">No collections available yet.</p>
              <p className="text-taupe mt-2">Check back soon for new collections!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
