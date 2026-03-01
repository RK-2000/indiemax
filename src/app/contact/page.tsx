'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send the form data to an API
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-sand py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm tracking-wider uppercase text-terracotta mb-3 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-stone max-w-xl mx-auto">
            Have questions about our collections, need sizing help, or want to learn more 
            about our artisans? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-light text-charcoal mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-transparent border border-sand focus:border-terracotta focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-transparent border border-sand focus:border-terracotta focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-sand focus:border-terracotta focus:outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Inquiry</option>
                    <option value="sizing">Sizing Help</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border border-sand focus:border-terracotta focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-charcoal text-cream hover:bg-charcoal/90 transition-colors tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="text-2xl font-light text-charcoal mb-8">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">WhatsApp</h3>
                    <p className="text-stone mb-2">Fastest response for order inquiries</p>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terracotta hover:text-terracotta-dark transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-terracotta text-cream rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Email</h3>
                    <p className="text-stone mb-2">For detailed inquiries and collaborations</p>
                    <a
                      href="mailto:hello@indiemax.com"
                      className="text-terracotta hover:text-terracotta-dark transition-colors"
                    >
                      hello@indiemax.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo text-cream rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Phone</h3>
                    <p className="text-stone mb-2">Mon - Sat, 10am - 7pm IST</p>
                    <a
                      href="tel:+919876543210"
                      className="text-terracotta hover:text-terracotta-dark transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Instagram</h3>
                    <p className="text-stone mb-2">Follow for behind-the-scenes & new drops</p>
                    <a
                      href="https://instagram.com/indiemax"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terracotta hover:text-terracotta-dark transition-colors"
                    >
                      @indiemax
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-olive text-cream rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Studio</h3>
                    <p className="text-stone mb-2">Visit by appointment only</p>
                    <address className="text-stone not-italic">
                      42, Crafts Colony Road<br />
                      Civil Lines, Jaipur<br />
                      Rajasthan 302006, India
                    </address>
                  </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="mt-12 p-6 bg-sand">
                <h3 className="font-medium text-charcoal mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-sm text-stone mb-4">
                  Find answers to common questions about shipping, sizing, care instructions, and more.
                </p>
                <a
                  href="/faq"
                  className="text-sm text-terracotta hover:text-terracotta-dark transition-colors"
                >
                  View FAQs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
