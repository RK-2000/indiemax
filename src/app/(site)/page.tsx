import HeroSection from "@/components/sections/HeroSection";
import FeaturedCollectionSection from "@/components/sections/FeaturedCollectionSection";
import UpcomingDropSection from "@/components/sections/UpcomingDropSection";
import ArtisanSpotlightSection from "@/components/sections/ArtisanSpotlightSection";
import BrandValuesSection from "@/components/sections/BrandValuesSection";
import SectionDivider from "@/components/sections/SectionDivider";
import { getFeaturedCollection, getUpcomingCollection, getAllArtisans } from "@/payload/queries";
import { getMediaUrl } from "@/payload/client";

// Fallback sample data when CMS is empty
const fallbackFeaturedCollection = {
  name: "Rajasthan Reverie",
  slug: "rajasthan-reverie",
  tagline: "A journey through the vibrant textile traditions of the desert state",
  image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&q=80",
  craftTechnique: "Block Printing",
  products: [] as Array<{ name: string; slug: string; image: string; price: number; stock: number; originalPrice?: number }>,
};

const fallbackUpcomingDrop = {
  name: "Gujarat Whispers",
  slug: "gujarat-whispers",
  tagline: "The ancient art of Ajrakh meets contemporary silhouettes",
  image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=1200&q=80",
  dropDate: "2026-03-15T10:00:00+05:30",
  craftTechnique: "Ajrakh Block Printing",
  inspiration: "Inspired by the geometric precision and natural indigo hues of Kutch's master printers.",
};

const fallbackArtisans = [
  {
    name: "Ramji Bhai Khatri",
    slug: "ramji-bhai-khatri",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    craft: "Block Printing",
    region: "Bagru, Rajasthan",
  },
];

export default async function Home() {
  // Fetch data from Payload CMS
  const [featuredCollection, upcomingCollection, artisans] = await Promise.all([
    getFeaturedCollection().catch(() => null),
    getUpcomingCollection().catch(() => null),
    getAllArtisans().catch(() => []),
  ]);

  // Transform featured collection data
  const featured = featuredCollection ? {
    name: featuredCollection.name,
    slug: featuredCollection.slug,
    tagline: featuredCollection.tagline || '',
    image: getMediaUrl(featuredCollection.coverImage) || fallbackFeaturedCollection.image,
    craftTechnique: featuredCollection.craftTechnique || '',
    products: [] as Array<{ name: string; slug: string; image: string; price: number; stock: number; originalPrice?: number }>,
  } : fallbackFeaturedCollection;

  // Transform upcoming collection data
  const upcoming = upcomingCollection ? {
    name: upcomingCollection.name,
    slug: upcomingCollection.slug,
    tagline: upcomingCollection.tagline || '',
    image: getMediaUrl(upcomingCollection.coverImage) || fallbackUpcomingDrop.image,
    dropDate: upcomingCollection.dropDate || fallbackUpcomingDrop.dropDate,
    craftTechnique: upcomingCollection.craftTechnique || '',
    inspiration: upcomingCollection.inspiration || '',
  } : fallbackUpcomingDrop;

  // Transform artisans data
  const artisansList = artisans.length > 0 ? artisans.slice(0, 4).map((artisan: any) => ({
    name: artisan.name,
    slug: artisan.slug,
    photo: getMediaUrl(artisan.photo) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    craft: artisan.craft || '',
    region: artisan.region || '',
  })) : fallbackArtisans;

  return (
    <div className="-mt-16 md:-mt-20">
      <HeroSection
        title="Hand Block Prints · Indian Silhouettes"
        subtitle="Modern Everyday Looks"
      />
      
      <FeaturedCollectionSection
        name={featured.name}
        slug={featured.slug}
        tagline={featured.tagline}
        image={featured.image}
        craftTechnique={featured.craftTechnique}
        products={featured.products}
      />

      <SectionDivider style="craft" fromColor="bg-ivory" />

      <UpcomingDropSection
        name={upcoming.name}
        slug={upcoming.slug}
        tagline={upcoming.tagline}
        image={upcoming.image}
        dropDate={upcoming.dropDate}
        craftTechnique={upcoming.craftTechnique}
        inspiration={upcoming.inspiration}
      />

      <ArtisanSpotlightSection artisans={artisansList} />

      <BrandValuesSection />
    </div>
  );
}
