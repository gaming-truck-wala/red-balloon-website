import Banner from '@/components/Banner'
import CTA from '@/components/CTA'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import React from 'react'
import MainLayout from './_layout'

const testimonials = [
    [
        [
            {
              body: 'I booked their canvas painting and archery stalls for a carnival, and it was a hit! Everything was organized perfectly, and the team was so professional.',
              author: {
                name: 'Amanpreet Kaur',
                handle: 'Parent',
                // imageUrl:
                  // 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
            },
            // More testimonials...
          ],
          [
            {
              body: 'The Red Balloon team exceeded our expectations. The slime station was a favorite among the kids, and the decor matched our theme perfectly. Worth every penny!',
              author: {
                name: 'Neha Gupta',
                handle: 'Parent',
                // imageUrl:
                  // 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
            },
            
            // More testimonials...
          ],
        ],
        [
          [
            {
              body: 'Such a creative and fun experience for the kids! The staff was friendly, and the activities were safe and engaging. Everyone at the party had a great time. Thank you!',
              author: {
                name: 'Karan Arora',
                handle: 'Parent',
                // imageUrl:
                  // 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
            },
            // More testimonials...
          ],
          [
            {
              body: 'Our carnival was a success, all thanks to The Red Balloon! The activities were unique, and the kids were thrilled. Highly professional and organized team.',
              author: {
                name: 'Tanya Malhotra',
                handle: 'Event Organiser',
                // imageUrl:
                  // 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
              },
            },
            // More testimonials...
          ],
    ],
  ]
  const featuredTestimonial = {
    body: 'My dream is to bring joy and create special memories for every celebration. Watching kids smile and have fun with our activities, makes all the hard work worth it. We put our hearts into making every event unforgettable. Thank you for letting us be part of your celebrations!',
    author: {
        name: 'Gaurav Seth',
        handle: 'The Red Balloon',
        imageUrl:
            '/gaurav.webp',
        logoUrl: '/fulllogo.webp',
    },
  }

const PricingPage = () => {
    return (
        <MainLayout>
            <Banner />
            <Pricing />
            <Testimonials
            featuredTestimonial={featuredTestimonial} testimonials={testimonials} />
            <CTA header='The Red Balloon' 
      subheader='Dont miss the chance to celebrate your events with us'
      primaryLink ={
          {slug :'/pricing', 
          name : "Book Now"}
      }
          secondaryLink={
          {slug :'tel:9530677035', 
          name : "Call Now"}
      } />
        </MainLayout>
    )
}

export default PricingPage