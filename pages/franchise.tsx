import React from 'react'
import MainLayout from './_layout'
import Features from '@/components/Features'
import ContactForm from '@/components/ContactForm'
import CTA from '@/components/CTA'
import { PhoneIcon, SunIcon, QuestionMarkCircleIcon} from '@heroicons/react/20/solid'
import Testimonials from '@/components/Testimonials'


// const testimonials = [
//     [
//         [
//             {
//                 body: 'I cant believe it, a truck filled with games! This is going to be the coolest thing ever! I cant wait to play all my favorite games with my friends!',
//                 author: {
//                     name: 'Manvir Singh',
//                     handle: 'Student',
//                     imageUrl:
//                         'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//                 },
//             },
//             // More testimonials...
//         ],
//         [
//             {
//                 body: 'Back in my day, we never had anything like this! The Gaming Truck Wala sounds like a blast, and I cant wait to see my grandkids enjoy something so innovative.',
//                 author: {
//                     name: 'Ved Prakash Puri',
//                     handle: 'Grand Parent',
//                     imageUrl:
//                         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//                 },
//             },
//             // More testimonials...
//         ],
//     ],
//     [
//         [
//             {
//                 body: 'Friday aa , entertainment ka option use kro raat tak gaming truck wala',
//                 author: {
//                     name: 'Sneha Sharma',
//                     handle: 'Parent',
//                     imageUrl:
//                         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//                 },
//             },
//             // More testimonials...
//         ],
//         [
//             {
//                 body: 'Before the Gaming Truck Wala is even launched, I can already imagine the excitement it will bring to weddings. Kids who used to feel bored will now be looking forward to weddings because of this surprise. I cant wait to see the happiness it will create!',
//                 author: {
//                     name: 'Ananya',
//                     handle: 'Event Manager',
//                     imageUrl:
//                         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
//                 },
//             },
//             // More testimonials...
//         ],
//     ],
//   ]
//   const featuredTestimonial = {
//     body: 'testing ',
//     author: {
//         name: 'Gaurav Seth',
//         handle: 'Gaming Truck Wala',
//         imageUrl:
//             '/gaurav.webp',
//         logoUrl: '/fulllogo.webp',
//     },
// }
const features = [
    {
        name: 'Discover The Red Balloon Partner Opportunity',
        description:
            'At The Red Balloon, we believe in spreading smiles through unique and exciting celebrations. To continue growing and expanding our services, we are looking for passionate individuals and businesses to join us as partners. If you have a creative skill like canvas painting, tattoo artistry, or any unique activity idea, or if you can arrange fun and engaging activities, this is your chance to collaborate with us. Together, we can revolutionize the event industry and create unforgettable memories for families and communities.',
        href: '/contact',
        icon: SunIcon,
    },
    {
        name: 'Why Choose The Red Balloon?',
        description:
            'As the same team behind the successful Gaming Truck Wala startup, we’ve proven our expertise in delivering joyful experiences. Now, with The Red Balloon, we’re expanding into new cities and adding more innovative activities to our offerings. By becoming our partner, you’ll be part of a trusted and growing brand that values creativity, quality, and customer satisfaction. We provide a well-established platform, access to a growing customer base, and opportunities to showcase your talent or services to a larger audience.',
        href: '/contact',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Business Support and Growth Opportunities',
        description:
            'When you partner with The Red Balloon, you’re not just joining a business—you’re becoming part of a supportive and collaborative community. We offer marketing, operational, and logistical support to ensure mutual growth and success. Whether you’re a tattoo artist, a skilled craftsman, or someone with a new activity idea, we’ll work together to integrate your expertise into our events. As we expand into new cities and innovate our offerings, this partnership is your chance to grow with us and be part of a movement that spreads joy everywhere.',
        href: '/contact',
        icon: PhoneIcon,
    },
]
// const featuresBelow = [
//     {
//         name: 'Push to deploy',
//         description:
//             'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
//         href: '/contact',
//         icon: CloudArrowUpIcon,
//     },
//     {
//         name: 'SSL certificates',
//         description:
//             'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
//         href: '/contact',
//         icon: LockClosedIcon,
//     },
//     {
//         name: 'Simple queues',
//         description:
//             'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
//         href: '/contact',
//         icon: ArrowPathIcon,
//     },
// ]
const FranchisePage = () => {
    return (
        <>

            <MainLayout>
                <Features 
                header='Launching Soon!'
                subheader='Join Our Growing Business Family'
                brief='The Red Balloon'
                linkheading='Contact Us'
                features={features} />
                
                {/* <ContactForm /> */}
                {/* <Features 
                header=''
                subheader='nhi kuch hi'
                brief='patanhi 9566'
                linkheading='contact us'
                features={featuresBelow} /> */}

                <CTA 
                header='Become Our Business Partner' 
                subheader='Join the family of aspiring entrepreneurs'
                primaryLink ={
                    {slug :'https://wa.me/919530677035', 
                    name : "Whatsapp"}
                }
                    secondaryLink={
                    {slug :'tel:9530677035', 
                    name : "Call Now"}
                }

                />

                {/* <Testimonials
                featuredTestimonial={featuredTestimonial}
                testimonials={testimonials}/> */}
            </MainLayout></>
    )
}

export default FranchisePage