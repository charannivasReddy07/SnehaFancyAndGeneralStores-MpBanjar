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
]

const products = [
  { mark: '✳', title: 'Footwear', text: 'School shoes, sandals and casual styles for men, women and kids.' },
  { mark: '⌁', title: 'Stationery & Books', text: 'School books, notebooks, pens and all your study essentials.' },
  { mark: '◈', title: 'Plastic Items', text: 'Useful household plasticware and everyday items for your home.' },
  { mark: '▱', title: 'Luggage Bags', text: 'School bags, travel bags, trolleys, handbags and more.' },
  { mark: '❋', title: 'Gift Articles', text: 'Thoughtful gifts, décor and keepsakes for every occasion.' },
  { mark: '♡', title: 'Anything on Order', text: 'Looking for something special? Ask us and we’ll source it.' },
]

const offers = [
  { mark: '✺', title: 'Bangles & Jewellery', text: 'Glass, lac, kundan and bridal sets, handpicked for every occasion.' },
  { mark: '✿', title: 'Cosmetics & Beauty', text: 'Bindis, kumkum, makeup essentials and personal care.' },
  { mark: '❋', title: 'Fancy Accessories', text: 'Hair clips, bags, gifts and traditional accessories.' },
  { mark: '⌂', title: 'General Store', text: 'Everyday essentials and household items for the whole family.' },
  { mark: '♧', title: 'LIC Insurance', text: 'Authorised LIC Agent offering life insurance and policy guidance.' },
  { mark: '♡', title: 'Personal Service', text: 'Friendly advice, home delivery on request and doorstep care.' },
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

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function App() {
  return (
    <>
      <header className="site-header">
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
            </div>
            <div className="hero-note"><span className="note-star">✳</span><span>Made for<br /><strong>every occasion</strong></span></div>
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
                <figcaption><span>0{index + 1} <b>·</b> SNEHA FANCY</span><strong>{item.title}</strong></figcaption>
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
            {offers.map((item) => <article className="offer-card" key={item.title}>
              <span className="offer-mark">{item.mark}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="offer-arrow">↗</span>
            </article>)}
          </div>
          <div className="lic-feature">
            <div className="lic-logo-wrap"><img src="./assets/lic-logo.png" alt="Life Insurance Corporation of India" loading="lazy" /></div>
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
            <article className="contact-card address-card"><span className="contact-icon">⌖</span><p className="eyebrow">Find our store</p><h3>Come on in.</h3><address>Sneha Fancy Store<br />Morampalli Banjar, Bhurghamphad<br />Bhadrachalam, Telangana 507114</address><a className="contact-link" href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps <Arrow diagonal /></a></article>
            <article className="contact-card call-card"><span className="contact-icon">↗</span><p className="eyebrow">Call or WhatsApp</p><h3>We’re here<br />to help.</h3><a className="phone-number" href={`tel:${phone}`}>+91 {phone}</a><div className="contact-actions"><a href={`tel:${phone}`}>Call now <Arrow /></a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a></div></article>
            <article className="contact-card review-card"><div className="review-top"><div><p className="eyebrow">A little love goes a long way</p><h3>Find us on<br />Google.</h3><p>Enjoyed your visit? We’d be so grateful if you shared a review.</p></div><img src="./assets/google-review-qr.jpg" alt="QR code to leave a Google review for Sneha Fancy Store" loading="lazy" /></div><span className="review-note">Scan to leave a review <span>✳</span></span></article>
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
