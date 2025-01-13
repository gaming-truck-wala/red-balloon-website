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
        name: 'Discover the Gaming Truck Wala Franchise Opportunity',
        description:
            'The Gaming Truck Wala franchise offers an exceptional chance to merge your love for gaming with a thriving business venture. Our gaming trucks bring an unparalleled gaming experience directly to customers, making us the go-to entertainment choice for events and parties.',
        href: '/contact',
        icon: SunIcon,
    },
    {
        name: 'Why Choose Gaming Truck Wala?',
        description:
            'Choosing Gaming Truck Wala means joining a community of like-minded individuals who are passionate about both gaming and entrepreneurship. The gaming industry is growth is undeniable. By investing in a Gaming Truck Wala franchise, you are positioning yourself in an industry with long-term potential. With a concept that resonates with people of all ages, you are securing a future-proof investment that is set to thrive. ',
        href: '/contact',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Franchisee Support',
        description:
            'Comprehensive training is provided to ensure that you are well-versed in operating the gaming trucks, troubleshooting technical issues, and managing customer interactions. Benefit from our proven marketing strategies and branding materials to attract customers and build a loyal fan base in your area. Our technical support team is just a call away to help you with any operational issues you might encounter, ensuring seamless gaming sessions for your customers.',
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
                subheader='Join Our Growing Franchise Family'
                brief='Gaming Truck Wala'
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
                header='Become Our Franchise Partner' 
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