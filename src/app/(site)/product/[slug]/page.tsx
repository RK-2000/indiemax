import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { getProductBySlug } from "@/payload/queries";
import { getMediaUrl } from "@/payload/client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug).catch(() => null);
  
  return {
    title: product ? `${product.name} | IndieMax` : "Product | IndieMax",
    description: product?.description?.substring(0, 160) || "Discover this unique handcrafted piece from IndieMax.",
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug).catch(() => null);
  
  if (!product) {
    notFound();
  }
  
  // Transform data for the client component
  const images = (product.images || []).map((img: any) => getMediaUrl(img) || 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80');
  
  // Extract description text from rich text if needed
  const description = typeof product.description === 'string' 
    ? product.description 
    : product.description?.root?.children
        ?.map((node: any) => node.children?.map((child: any) => child.text).join(''))
        .filter(Boolean)
        .join('\n\n') || '';
  
  const productData = {
    name: product.name,
    slug: product.slug,
    images: images.length > 0 ? images : ['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80'],
    price: product.price || 0,
    description,
    stock: product.stock || 0,
    fabric: product.fabric,
    craftDetails: product.craftDetails,
    careInstructions: product.careInstructions || [],
    sizes: product.sizes || [],
    collection: product.collection && typeof product.collection === 'object' ? {
      name: product.collection.name,
      slug: product.collection.slug,
      craftTechnique: product.collection.craftTechnique,
    } : undefined,
    artisan: product.artisan && typeof product.artisan === 'object' ? {
      name: product.artisan.name,
      slug: product.artisan.slug,
      photo: getMediaUrl(product.artisan.photo) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      craft: product.artisan.craft,
      region: product.artisan.region,
      experience: product.artisan.experience,
    } : undefined,
  };
  
  return <ProductDetail product={productData} />;
}
