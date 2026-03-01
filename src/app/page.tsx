import HeroSection from "@/components/sections/HeroSection";
import FeaturedCollectionSection from "@/components/sections/FeaturedCollectionSection";
import UpcomingDropSection from "@/components/sections/UpcomingDropSection";
import ArtisanSpotlightSection from "@/components/sections/ArtisanSpotlightSection";
import BrandValuesSection from "@/components/sections/BrandValuesSection";

// Sample data - In production, this would come from Sanity CMS
const sampleFeaturedCollection = {
  name: "Rajasthan Reverie",
  slug: "rajasthan-reverie",
  tagline: "A journey through the vibrant textile traditions of the desert state",
  image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&q=80",
  craftTechnique: "Block Printing",
  products: [
    {
      name: "Azure Block Print Kurta",
      slug: "azure-block-print-kurta",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      price: 4500,
      stock: 3,
    },
    {
      name: "Terracotta Ajrak Dress",
      slug: "terracotta-ajrak-dress",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
      price: 5200,
      originalPrice: 6500,
      stock: 5,
    },
    {
      name: "Indigo Dabu Print Set",
      slug: "indigo-dabu-print-set",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      price: 6800,
      stock: 2,
    },
    {
      name: "Natural Dye Cotton Dupatta",
      slug: "natural-dye-cotton-dupatta",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc3f17?w=800&q=80",
      price: 1800,
      stock: 8,
    },
  ],
};

const sampleUpcomingDrop = {
  name: "Gujarat Whispers",
  slug: "gujarat-whispers",
  tagline: "The ancient art of Ajrakh meets contemporary silhouettes",
  image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=1200&q=80",
  dropDate: "2026-03-15T10:00:00+05:30",
  craftTechnique: "Ajrakh Block Printing",
  inspiration: "Inspired by the geometric precision and natural indigo hues of Kutch's master printers. Each piece undergoes 14 stages of printing and washing, honoring a craft that dates back to the Indus Valley civilization.",
};

const sampleArtisans = [
  {
    name: "Ramji Bhai Khatri",
    slug: "ramji-bhai-khatri",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    craft: "Block Printing",
    region: "Bagru, Rajasthan",
  },
  {
    name: "Lakshmi Devi",
    slug: "lakshmi-devi",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    craft: "Bandhani",
    region: "Kutch, Gujarat",
  },
  {
    name: "Mohammed Siddiq",
    slug: "mohammed-siddiq",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    craft: "Ajrakh",
    region: "Ajrakhpur, Gujarat",
  },
  {
    name: "Sumitra Ben",
    slug: "sumitra-ben",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    craft: "Kantha Embroidery",
    region: "Shantiniketan, Bengal",
  },
];

export default function Home() {
  return (
    <div className="-mt-16 md:-mt-20">
      <HeroSection
        title="Handcrafted Heritage"
        subtitle="Celebrating India's rich textile traditions through artisanal fashion. Each piece tells a story of craftsmanship, culture, and conscious creation."
      />
      
      <FeaturedCollectionSection
        name={sampleFeaturedCollection.name}
        slug={sampleFeaturedCollection.slug}
        tagline={sampleFeaturedCollection.tagline}
        image={sampleFeaturedCollection.image}
        craftTechnique={sampleFeaturedCollection.craftTechnique}
        products={sampleFeaturedCollection.products}
      />

      <UpcomingDropSection
        name={sampleUpcomingDrop.name}
        slug={sampleUpcomingDrop.slug}
        tagline={sampleUpcomingDrop.tagline}
        image={sampleUpcomingDrop.image}
        dropDate={sampleUpcomingDrop.dropDate}
        craftTechnique={sampleUpcomingDrop.craftTechnique}
        inspiration={sampleUpcomingDrop.inspiration}
      />

      <ArtisanSpotlightSection artisans={sampleArtisans} />

      <BrandValuesSection />
    </div>
  );
}
