# IndieMax - Handcrafted Heritage Prints

A modern fashion brand website celebrating India's rich textile heritage through artisanal fashion. Built with Next.js and Payload CMS.

![IndieMax](https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80)

## Features

- **Beautiful Heritage Design** - Earthy color palette inspired by Indian textile traditions
- **Collection Showcase** - Display curated collections with stories and artisan credits
- **Artisan Profiles** - Highlight the craftspeople behind each piece
- **Product Catalog** - Full product details with image gallery, sizing, and stock indicators
- **Countdown Timer** - Build anticipation for limited drops
- **Newsletter Signup** - Capture leads for drop notifications
- **Payload CMS** - Self-hosted, TypeScript-native headless CMS
- **Responsive Design** - Optimized for all devices

## Tech Stack

- **Framework**: Next.js (App Router)
- **CMS**: Payload CMS
- **Database**: SQLite (can be switched to PostgreSQL/MongoDB)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### 1. Clone and Install

```bash
cd indiemax
npm install
```

### 2. Set Up Environment

Create a `.env.local` file:

```env
PAYLOAD_SECRET=your-super-secret-key-change-in-production
DATABASE_URI=file:./database.sqlite
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### 4. Access Payload Admin

Visit [http://localhost:3000/admin](http://localhost:3000/admin) to manage content.

On first visit, you'll be prompted to create an admin user.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── collections/       # Collections pages
│   ├── shop/              # Shop page
│   ├── product/           # Product detail pages
│   ├── artisans/          # Artisan pages
│   ├── heritage/          # About/Heritage page
│   ├── contact/           # Contact page
│   └── (payload)/         # Payload Admin
├── components/            # React components
│   ├── sections/          # Page sections (Hero, Featured, etc.)
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   ├── ProductCard.tsx    # Product card component
│   ├── CollectionCard.tsx # Collection card component
│   ├── ArtisanCard.tsx    # Artisan card component
│   └── CountdownTimer.tsx # Countdown for drops
└── payload/
    ├── collections/       # Collection configurations
    ├── globals/           # Global configurations
    ├── payload.config.ts  # Main Payload config
    ├── client.ts          # Payload client utilities
    └── queries.ts         # Data fetching functions
```

## Content Types (Payload Collections)

- **Collection** - Fashion collections with stories, drop dates, artisan credits
- **Product** - Individual pieces with images, pricing, stock, sizing
- **Artisan** - Craftsperson profiles with their stories and craft process
- **Media** - Image uploads and media files
- **Newsletter** - Subscriber list management

## Globals

- **Site Settings** - Global site configuration (logo, contact info, etc.)
- **Announcement** - Homepage banners and alerts

## Customization

### Colors

Edit `src/app/globals.css` to modify the color palette:

```css
:root {
  --terracotta: #C75B39;  /* Primary brand color */
  --indigo: #2C3E6E;      /* Secondary color */
  --gold: #C4A35A;        /* Accent color */
  --cream: #FAF7F2;       /* Background */
  --charcoal: #2D2926;    /* Text color */
}
```

### Content

Use Payload Admin (`/admin`) to:
- Create and manage collections
- Add products with images and details
- Create artisan profiles
- Update site settings and announcements

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Environment Variables for Production

```env
PAYLOAD_SECRET=generate-a-secure-random-string
DATABASE_URI=file:./database.sqlite
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Note**: For production, consider using PostgreSQL or MongoDB instead of SQLite.

## Future Enhancements

Ready for e-commerce integration:
- Shopify Buy Button
- Snipcart
- Razorpay (for Indian payments)

## License

Private - IndieMax Brand

---

Made with ♥ for India's artisans

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
