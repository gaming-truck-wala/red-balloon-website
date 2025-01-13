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
                body: 'I cant believe it, a truck filled with games! This is going to be the coolest thing ever! I cant wait to play all my favorite games with my friends!',
                author: {
                    name: 'Manvir Singh',
                    handle: 'Student',
                    imageUrl:
                        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
        [
            {
                body: 'Back in my day, we never had anything like this! The Gaming Truck Wala sounds like a blast, and I cant wait to see my grandkids enjoy something so innovative.',
                author: {
                    name: 'Ved Prakash Puri',
                    handle: 'Grand Parent',
                    imageUrl:
                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
    ],
    [
        [
            {
                body: 'Finally, a unique and safe entertainment option for our kids! The Gaming Truck Wala is exactly what we needed to make parties stress-free and enjoyable.',
                author: {
                    name: 'Sneha Sharma',
                    handle: 'Parent',
                    imageUrl:
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
        [
            {
                body: 'Before the Gaming Truck Wala is even launched, I can already imagine the excitement it will bring to weddings. Kids who used to feel bored will now be looking forward to weddings because of this surprise. I cant wait to see the happiness it will create!',
                author: {
                    name: 'Ananya',
                    handle: 'Event Manager',
                    imageUrl:
                        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
                },
            },
            // More testimonials...
        ],
    ],
  ]
  const featuredTestimonial = {
    body: 'Our upcoming launch is not just about gaming; its about crafting unforgettable experiences. We are dedicated to bringing joy, laughter, and a new level of excitement to events.',
    author: {
        name: 'Gaurav Seth',
        handle: 'Gaming Truck Wala',
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
            <CTA header='Gaming Truck Wala' 
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