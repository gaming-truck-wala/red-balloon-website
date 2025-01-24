import Banner from '@/components/Banner'
import CTA from '@/components/CTA'
import ContactForm from '@/components/ContactForm'
import FAQs from '@/components/FAQs'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
// import OfferForm from '@/components/OfferForm'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import { faqs, featuredTestimonial, features, products, testimonials } from '@/data/mainData'
import { useState } from 'react'
import { useEffectOnceWhen } from 'rooks'
import MainLayout from './_layout'
import Products from '@/components/Products'



export default function Home() {
  const [showOfferForm, setShowOfferForm] = useState(false)
  useEffectOnceWhen(() => {
    setTimeout(() => {
      setShowOfferForm(true)
    }, 10000)
  }, !showOfferForm)

  return (
    <MainLayout>
      {/* {showOfferForm && <OfferForm />} */}

      <Banner />
      <Hero />
      {/* <LogoCloud logos={logos} /> */}
      {/* <Stats /> */}
      <Products products={products} />
      <Features
        header='Bookings with The Red Balloon'
        subheader='Booking Made Simple in 3 Steps:'
        brief='To know about activities and more details, give us a call'
        linkheading='Activities'
        features={features}
      />
      {/* <LogoCloud logos={logos} /> */}
      {/* <Pricing /> */}
      <ContactForm />
      {/* <CTA /> */}
      <FAQs header='Frequently Asked Questions' faqs={faqs} />

      {/* <LogoCloud logos={logos} /> */}
      <Testimonials
        featuredTestimonial={featuredTestimonial}
        testimonials={testimonials}
      />
      <CTA
        header='The Red Balloon'
        subheader='Dont miss the chance to celebrate your events with us'
        primaryLink={{
          slug: '/pricing',
          name: 'Book Now',
        }}
        secondaryLink={{
          slug: 'tel:9530677035',
          name: 'Call Now',
        }}
      />
      {/* <Team /> */}
    </MainLayout>
  )
}