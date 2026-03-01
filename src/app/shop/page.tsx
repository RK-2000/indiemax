import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop | IndieMax",
  description: "Browse our collection of handcrafted Indian heritage prints. Each piece is one-of-a-kind.",
};

// Sample data - In production, this would come from Sanity CMS
const sampleProducts = [
  {
    name: "Azure Block Print Kurta",
    slug: "azure-block-print-kurta",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    price: 4500,
    stock: 3,
    collectionName: "Rajasthan Reverie",
  },
  {
    name: "Terracotta Ajrak Dress",
    slug: "terracotta-ajrak-dress",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
    price: 5200,
    originalPrice: 6500,
    stock: 5,
    collectionName: "Gujarat Whispers",
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
  {
    name: "Kantha Embroidered Top",
    slug: "kantha-embroidered-top",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&q=80",
    price: 3800,
    stock: 0,
    isSoldOut: true,
    collectionName: "Bengal Threads",
  },
  {
    name: "Kalamkari Print Saree",
    slug: "kalamkari-print-saree",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    price: 8500,
    stock: 4,
    collectionName: "Kalamkari Chronicles",
  },
  {
    name: "Ikat Weave Kurta",
    slug: "ikat-weave-kurta",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
    price: 4200,
    stock: 6,
    collectionName: "Ikat Impressions",
  },
  {
    name: "Block Print Palazzo Set",
    slug: "block-print-palazzo-set",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    price: 5600,
    stock: 3,
    collectionName: "Rajasthan Reverie",
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Kurtas", value: "kurtas" },
  { label: "Dresses", value: "dresses" },
  { label: "Sarees", value: "sarees" },
  { label: "Dupattas", value: "dupattas" },
  { label: "Co-ords", value: "coords" },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
            Shop
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-4">
            All Pieces
          </h1>
          <p className="text-lg text-stone max-w-xl mx-auto">
            Each garment is handcrafted by master artisans. Limited quantities, no restocks.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-sand sticky top-16 md:top-20 bg-cream z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                    category.value === "all"
                      ? "bg-charcoal text-cream"
                      : "bg-transparent text-charcoal hover:bg-sand"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <span className="text-sm text-stone hidden md:block">
              {sampleProducts.length} items
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                slug={product.slug}
                image={product.image}
                price={product.price}
                originalPrice={product.originalPrice}
                stock={product.stock}
                isSoldOut={product.isSoldOut}
                collectionName={product.collectionName}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
