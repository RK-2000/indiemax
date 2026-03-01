import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'All Collections', href: '/collections' },
    { name: 'Shop All', href: '/shop' },
    { name: 'Limited Drops', href: '/shop?filter=limited' },
  ],
  about: [
    { name: 'Our Story', href: '/heritage' },
    { name: 'Artisans', href: '/artisans' },
    { name: 'Craft Process', href: '/heritage#craft' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-sand border-t border-stone/20">
      {/* Newsletter Section */}
      <div className="border-b border-stone/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[11px] tracking-[0.25em] uppercase text-terracotta mb-4 block font-serif">
              Stay Connected
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
              Be the First to Know
            </h3>
            <p className="text-walnut mb-8 font-serif italic">
              New drops, artisan stories, and exclusive previews — delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-ivory border border-stone/30 text-charcoal placeholder:text-taupe focus:border-terracotta focus:outline-none transition-colors text-sm"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-charcoal text-cream hover:bg-walnut transition-colors text-sm tracking-[0.1em] uppercase"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.jpeg"
                alt="IndieMax"
                width={80}
                height={80}
                className="w-14 h-14 object-contain mb-2"
              />
              <span className="block text-xl font-light tracking-[0.15em] text-charcoal">
                INDIEMAX
              </span>
            </Link>
            <p className="text-walnut text-sm leading-relaxed mb-8 max-w-sm">
              Hand Block Prints · Indian Silhouettes · Modern Everyday Looks
              <br /><br />
              Handmade & Handstitched with love in India.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-stone/40 hover:border-terracotta hover:bg-terracotta-soft transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-walnut" />
              </a>
              <a
                href="mailto:hello@indiemax.com"
                className="w-10 h-10 flex items-center justify-center border border-stone/40 hover:border-terracotta hover:bg-terracotta-soft transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-walnut" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.15em] mb-6 text-taupe uppercase">Shop</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-walnut hover:text-terracotta transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.15em] mb-6 text-taupe uppercase">About</h4>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-walnut hover:text-terracotta transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.15em] mb-6 text-taupe uppercase">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-walnut hover:text-terracotta transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-taupe">
            © {new Date().getFullYear()} Indiemax. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-xs text-taupe hover:text-charcoal transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-taupe hover:text-charcoal transition-colors">
              Terms
            </Link>
            <span className="text-xs text-taupe">
              Crafted in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
