import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/payload/queries";
import { getMediaUrl } from "@/payload/client";

export const metadata: Metadata = {
  title: "Shop | IndieMax",
  description: "Browse our collection of handcrafted Indian heritage prints. Each piece is one-of-a-kind.",
};

const categories = [
  { label: "All", value: "all" },
  { label: "Kurtas", value: "kurtas" },
  { label: "Dresses", value: "dresses" },
  { label: "Sarees", value: "sarees" },
  { label: "Dupattas", value: "dupattas" },
  { label: "Co-ords", value: "coords" },
];

export default async function ShopPage() {
  const products = await getAllProducts().catch(() => []);

  // Transform products data for display
  const productsList = products.map((product: any) => ({
    name: product.name,
    slug: product.slug,
    image: product.images?.[0]?.image ? getMediaUrl(product.images[0].image) : 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    price: product.price,
    originalPrice: product.originalPrice,
    stock: product.stock,
    isSoldOut: product.isSoldOut,
    collectionName: typeof product.collection === 'object' ? product.collection?.name : '',
  }));

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
              {productsList.length} items
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productsList.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {productsList.map((product: any) => (
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
          ) : (
            <div className="text-center py-16">
              <p className="text-stone text-lg">No products available yet.</p>
              <p className="text-taupe mt-2">Check back soon for new arrivals!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
