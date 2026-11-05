import { useEffect, useState } from 'react'

const phone = '9492958698'
const whatsappUrl =
  'https://wa.me/919492958698?text=Hello%20Sneha%20Fancy%20Store%2C%20I%20would%20like%20to%20enquire%20about%20your%20products%2FLIC%20services.'
const mapUrl =
  'https://maps.google.com/?q=Sneha+Fancy+Store+Morampalli+Banjar+Bhadrachalam'

const categories = [
  'Footwear',
  'Stationery',
  'Gift articles',
  'Luggage bags',
  'Plastic items',
  'Bangles',
  'Jewellery',
  'Cosmetics',
  'LIC insurance',
  'Fino banking',
]

const gallery = [
  { title: 'Bangles Collection', image: 'bangles.jpg', className: 'gallery-tall' },
  { title: 'Bridal Jewellery', image: 'bridal-jewellery.jpg', className: '' },
  { title: 'Cosmetics', image: 'cosmetics.jpg', className: '' },
  { title: 'Inside the Store', image: 'store.jpg', className: 'gallery-wide' },
  {
    title: 'Footwear',
    image: 'footwear.jpg',
    className: '',
  },
  {
    title: 'Stationery & Books',
    image: 'stationery.jpg',
    className: '',
  },
  {
    title: 'Plastic Items',
    image: 'plastic-items.jpg',
    className: '',
  },
]

const products = [
  { mark: '✳', title: 'Footwear', text: 'School shoes, sandals and casual styles for men, women and kids.' },
  { mark: '⌁', title: 'Stationery & Books', text: 'School books, notebooks, pens and all your study essentials.' },
  { mark: '◈', title: 'Plastic Items', text: 'Useful household plasticware and everyday items for your home.' },
  { mark: '▱', title: 'Luggage Bags', text: 'School bags, travel bags, trolleys, handbags and more.' },
  { mark: '❋', title: 'Gift Articles', text: 'Thoughtful gifts, décor and keepsakes for every occasion.' },
  { mark: '♡', title: 'Anything on Order', text: 'Looking for something special? Ask us and we’ll source it.' },
]

const bankingServices = [
 'New account opening',
 'AEPS / Aadhaar banking',
 'Cash deposit & withdrawal',
 'Money transfer',
 'Bill payments & recharge',
 'ATM / Mini ATM',
 'Government schemes & pension',
]

type ServiceOffer = {
  mark: string
  slug: string
  title: string
  text: string
  intro: string
  description: string
  images: { image: string; alt: string }[]
  highlights: string[]
}

const offers: ServiceOffer[] = [
  {
    mark: '✺',
    slug: 'bangles-jewellery',
    title: 'Bangles & Jewellery',
    text: 'Glass, lac, kundan and bridal sets, handpicked for every occasion.',
    intro: 'Find the finishing touch for celebrations, traditions and everyday outfits.',
    description: 'Explore colorful bangles, jewellery and bridal-inspired pieces at Sneha Fancy & General Stores. Visit us to see the current collection and find a style that feels just right.',
    images: [
      { image: 'bangles.jpg', alt: 'Colorful bangles arranged in the store' },
      { image: 'bridal-jewellery.jpg', alt: 'Bridal jewellery set with earrings' },
    ],
    highlights: ['Glass and lac bangles', 'Kundan and bridal-style sets', 'Styles for everyday wear and special occasions'],
  },
  {
    mark: '✿',
    slug: 'cosmetics-beauty',
    title: 'Cosmetics & Beauty',
    text: 'Bindis, kumkum, makeup essentials and personal care.',
    intro: 'Little beauty essentials for daily routines and special moments.',
    description: 'Browse beauty and personal-care essentials, including bindis, kumkum and makeup favorites. Product availability may vary, so feel free to ask us about a specific item.',
    images: [{ image: 'cosmetics.jpg', alt: 'Colorful cosmetics and makeup products' }],
    highlights: ['Bindis and kumkum', 'Makeup essentials', 'Personal-care favorites'],
  },
  {
    mark: '❋',
    slug: 'fancy-accessories',
    title: 'Fancy Accessories',
    text: 'Hair clips, bags, gifts and traditional accessories.',
    intro: 'Add a personal touch with accessories, thoughtful gifts and charming finds.',
    description: 'Discover hair accessories, bags, gifts and traditional details for yourself or someone special. Come by to explore the latest pieces in store.',
    images: [{ image: 'fancy-accessories.jpg', alt: 'Decorative hair accessories' }],
    highlights: ['Hair clips and accessories', 'Bags and gift articles', 'Traditional accents for special occasions'],
  },
  {
    mark: '⌂',
    slug: 'general-store',
    title: 'General Store',
    text: 'Everyday essentials and household items for the whole family.',
    intro: 'Useful everyday finds and household essentials, all in one friendly neighborhood store.',
    description: 'From practical household items to small everyday needs, our shelves bring together useful products for the family. Ask in store if you are looking for something specific.',
    images: [
      { image: 'store.jpg', alt: 'Shelves and displays inside Sneha Fancy & General Stores' },
      { image: 'plastic-items.jpg', alt: 'Household storage containers' },
    ],
    highlights: ['Household essentials', 'Useful plasticware and storage items', 'Everyday items for the whole family'],
  },
  {
    mark: '♧',
    slug: 'lic-insurance',
    title: 'LIC Insurance',
    text: 'Authorised LIC Agent offering life insurance and policy guidance.',
    intro: 'Get friendly help understanding LIC policy information and the next steps.',
    description: 'As an authorised LIC agent, we can help you learn about available plans, documentation and application steps. Policy benefits and eligibility depend on LIC terms; please contact us for details.',
    images: [{ image: 'lic-logo.png', alt: 'Life Insurance Corporation of India logo' }],
    highlights: ['Guidance on LIC policy options', 'Help with documentation and application steps', 'Personal assistance with your questions'],
  },
  {
    mark: '₹',
    slug: 'banking-services',
    title: 'Banking Services',
    text: 'Fino banking, Aadhaar services, cash deposits and withdrawals, bill payments and more.',
    intro: 'Convenient everyday banking support, close to home in Morampalli Banjar.',
    description: 'Visit our Fino banking point for help with available Aadhaar-enabled and everyday banking services. Service availability and transaction requirements may vary; bring valid identification and ask us before you visit.',
    images: [{ image: 'banking-services.jpg', alt: 'Mobile phone used for a contactless payment' }],
    highlights: bankingServices,
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function returnToServices(event: React.MouseEvent<HTMLAnchorElement>) {
  const previousPage = document.referrer ? new URL(document.referrer) : null
  if (previousPage?.origin === window.location.origin && !previousPage.searchParams.has('service')) {
    event.preventDefault()
    window.history.back()
  }
}

function ServiceDetailPage({ offer }: { offer: ServiceOffer }) {
  const inquiryUrl = `https://wa.me/919492958698?text=${encodeURIComponent(`Hello Sneha Fancy Store, I would like to know more about ${offer.title}.`)}`

  return (
    <>
      <header className="site-header is-scrolled detail-header">
        <a className="brand" href="./" aria-label="Sneha Fancy Store home">
          <img src="./assets/logo.png" alt="" />
          <span><strong>Sneha</strong><em>FANCY STORE</em></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="./#gallery">Gallery</a>
          <a href="./#products">Products</a>
          <a href="./#services">Services</a>
          <a href="./#about">About</a>
          <a href="./#contact">Contact</a>
        </nav>
        <a className="header-call" href={`tel:${phone}`}><span aria-hidden="true">☎</span> Call Now</a>
      </header>

      <main className="detail-page" id="top">
        <section className="detail-section">
          <a className="detail-back" href="./#services" onClick={returnToServices}><Arrow /> All services</a>
          <div className="detail-layout">
            <div className={`detail-gallery${offer.images.length > 1 ? ' has-secondary' : ''}${offer.slug === 'lic-insurance' ? ' is-logo' : ''}`}>
              {offer.images.map((image) => (
                <figure key={image.image}>
                  <img src={`./assets/${image.image}`} alt={image.alt} />
                  <figcaption>{offer.title} · Sneha Fancy</figcaption>
                </figure>
              ))}
            </div>
            <div className="detail-copy">
              <p className="eyebrow"><span className="detail-mark">{offer.mark}</span> A closer look</p>
              <h1>{offer.title}</h1>
              <p className="detail-intro">{offer.intro}</p>
              <p className="detail-description">{offer.description}</p>
              <h2>Explore this section</h2>
              <ul>{offer.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="detail-actions">
                <a className="button button-gold" href={inquiryUrl} target="_blank" rel="noreferrer">Ask about {offer.title} <Arrow diagonal /></a>
                <a className="text-link" href="./#services" onClick={returnToServices}>Back to all services <Arrow /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="detail-footer"><a href="./">Sneha Fancy &amp; General Stores</a><span>Morampalli Banjar · Bhadrachalam</span></footer>
      <a className="whatsapp-float" href={inquiryUrl} target="_blank" rel="noreferrer" aria-label={`Ask about ${offer.title} on WhatsApp`}><span aria-hidden="true">◉</span><span>Chat with us</span></a>
    </>
  )
}

function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const activeOfferSlug = new URLSearchParams(window.location.search).get('service')
  const activeOffer = offers.find((offer) => offer.slug === activeOfferSlug)

  useEffect(() => {
    const updateHeader = () => setHeaderScrolled(window.scrollY > 40)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    if (!activeOffer) return
    const previousTitle = document.title
    document.title = `${activeOffer.title} | Sneha Fancy & General Stores`
    return () => { document.title = previousTitle }
  }, [activeOffer])

  if (activeOffer) return <ServiceDetailPage offer={activeOffer} />

  return (
    <>
      <header className={`site-header${headerScrolled ? ' is-scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Sneha Fancy Store home">
          <img src="./assets/logo.png" alt="" />
          <span><strong>Sneha</strong><em>FANCY STORE</em></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#gallery">Gallery</a>
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href={`tel:${phone}`}><span aria-hidden="true">☎</span> Call Now</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image" style={{ backgroundImage: 'url("./assets/hero.jpg")' }} aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span /> Morampalli Banjar · Bhadrachalam</p>
              <p className="since">A little shop with a lot of heart</p>
              <h1>Sneha Fancy<br /><span>&amp; General Stores</span></h1>
              <p className="hero-lede">A treasured corner of Bhadrachalam where tradition meets care — bangles, beauty, daily essentials and trusted LIC services for every family.</p>
              <div className="hero-actions">
                <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">◉</span> Chat on WhatsApp</a>
                <a className="button button-outline" href="#products">Explore our store <Arrow /></a>
              </div>
              <div className="hero-trust"><span>✦ Family owned</span><i /> <span>✦ Quality you can trust</span><i /> <span>✦ LIC authorised agent</span></div>
              <div className="hero-note"><span className="note-copy">Made for <strong>every occasion</strong></span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#gallery"><span /> Scroll to explore</a>
        </section>

        <div className="ticker" aria-label="Store categories">
          <div className="ticker-track">{[...categories, ...categories].map((category, index) => <span key={`${category}-${index}`}>{category}<b>✳</b></span>)}</div>
        </div>

        <section className="section gallery-section" id="gallery">
          <div className="section-heading centered">
            <p className="eyebrow">A peek inside</p>
            <h2>A glimpse into<br /><em>our world</em></h2>
            <p>Little things, lovely details, and a store full of stories.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <figure className={`gallery-card ${item.className}`} key={item.title}>
                <img src={`./assets/${item.image}`} alt={item.title} loading="lazy" />
                <figcaption>
                  <span>0{index + 1} <b>·</b> SNEHA FANCY</span>
                  <strong>{item.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Everything you need</p><h2>Stocked with love,<br /><em>sourced on request.</em></h2></div>
            <p>Wander through our shelves — or let us order it in for you. Whatever you need, we’ll do our best to make it happen.</p>
          </div>
          <div className="product-grid">
            {products.map((item, i) => <article className="product-card" key={item.title}>
              <div className="card-top"><span className="icon-disc">{item.mark}</span><span className="card-number">0{i + 1}</span></div>
              <h3>{item.title}</h3><p>{item.text}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Ask about ${item.title}`}>Ask us <Arrow /></a>
            </article>)}
          </div>
          <div className="product-cta"><span>Can’t find what you’re looking for?</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Ask us on WhatsApp <Arrow diagonal /></a></div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading centered">
            <p className="eyebrow">More than a store</p>
            <h2>Thoughtful service<br /><em>for every day.</em></h2>
            <p>From a tiny bindi to a lifelong insurance plan — we’re here for you.</p>
          </div>
          <div className="offer-grid">
            {offers.map((item) => <a className="offer-card" href={`?service=${item.slug}`} key={item.slug} aria-label={`Explore ${item.title}`}>
              <span className="offer-mark">{item.mark}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="offer-arrow">↗</span>
            </a>)}
          </div>
          <div className="lic-feature">
            <div className="lic-logo-wrap"><img src="./assets/lic-logo.png" alt="Life Insurance Corporation of India" width="155" height="87" loading="lazy" /></div>
            <div className="lic-copy"><span className="eyebrow">A promise for tomorrow</span><h3>Protect what<br /><em>matters most.</em></h3><p>As an authorised LIC Agent, we’re happy to help you understand your options and find the right policy for your family.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-link">Talk to us about LIC <Arrow /></a></div>
            <div className="lic-seal"><span>LIC</span><small>AUTHORISED<br />AGENT</small></div>
          </div>
          <div className="fino-feature">
            <div className="fino-intro"><span className="fino-label"><i /> FINO PAYMENTS BANK</span><h3>Banking, made<br /><em>closer to home.</em></h3><p>Authorised banking correspondent — walk in with your Aadhaar and bank with us in minutes.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="fino-link">Ask about Fino services <Arrow /></a></div>
            <div className="banking-list">{bankingServices.map((service, i) => <div key={service}><span>0{i + 1}</span>{service}<b>↗</b></div>)}</div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-image"><img src="./assets/store.jpg" alt="Inside Sneha Fancy & General Stores" loading="lazy" /><span className="image-caption">A warm welcome, always.</span></div>
          <div className="about-copy">
            <p className="eyebrow">Our story</p>
            <h2>A small store<br />with a <em>big heart.</em></h2>
            <p>Nestled in Morampalli Banjar, Sneha Fancy &amp; General Stores is a beloved part of the community — built on warmth, honesty and a deep love for serving families.</p>
            <p>From a daughter’s first pair of bangles to a family’s lifelong insurance plan, every visit feels like coming home. Run with care by our parents, we bring tradition, trust and everyday banking closer to you.</p>
            <div className="stats">
              <div><strong>10<span>+</span></strong><small>Years of love</small></div>
              <div><strong>1000<span>+</span></strong><small>Happy families</small></div>
              <div><strong>100<span>%</span></strong><small>Personal care</small></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-heading"><p className="eyebrow">Come say hello</p><h2>Your neighbourhood store<br /><em>is just around the corner.</em></h2><p>We’d love to welcome you. Drop by, call, or message us anytime.</p></div>
          <div className="contact-grid">
            <article className="contact-card contact-info-card">
              <div className="contact-detail">
                <span className="contact-icon" aria-hidden="true">⌖</span>
                <div><p className="eyebrow">Address</p><address>Sneha Fancy Store, Morampalli Banjar,<br />Bhurghamphad, Bhadrachalam,<br />Bhadradri-Kothagudem, 507114</address><a className="contact-link" href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps <Arrow diagonal /></a></div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon" aria-hidden="true">☎</span>
                <div><p className="eyebrow">Call / WhatsApp</p><a className="phone-number" href={`tel:${phone}`}>{phone}</a><div className="contact-actions"><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Us</a><a href={`tel:${phone}`}>Call Now</a></div></div>
              </div>
            </article>
            <article className="contact-card review-card"><p className="eyebrow">Review us</p><h3>Find us on Google</h3><img src="./assets/google-review-qr.png" alt="Google review QR code for Sneha Fancy Store" loading="lazy" /><span className="review-note">Scan to leave a review</span></article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top"><img src="./assets/logo.png" alt="" /><span><strong>Sneha Fancy</strong><small>&amp; General Stores</small></span></a>
        <p>For every little thing, and every big moment.<br /><span>Morampalli Banjar · Bhadrachalam</span></p>
        <div className="footer-links"><a href="#gallery">Gallery</a><a href="#products">Products</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Sneha Fancy &amp; General Stores</span><span>Made with care in Bhadrachalam <b>♥</b></span></div>
      </footer>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Sneha Fancy on WhatsApp"><span aria-hidden="true">◉</span><span>Chat with us</span></a>
    </>
  )
}

export default App
