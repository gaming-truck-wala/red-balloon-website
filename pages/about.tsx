import React from 'react'
import MainLayout from './_layout'
import Features from '@/components/Features'
import Team from '@/components/Team'
import CTA from '@/components/CTA'
import {LightBulbIcon, QuestionMarkCircleIcon, UserGroupIcon} from '@heroicons/react/20/solid'
const features = [
    {
        name: 'Who We Are',
        description:
            'We are the same creative minds behind the successful Gaming Truck Wala startup, known for delivering thrilling gaming experiences to events. Building on that success, we launched The Red Balloon to expand into a world of fun-filled activities and celebrations for all ages.',
        href: '/contact',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Our Vision',
        description:
            'Our vision is simple yet powerful—to spread smiles everywhere we go. We believe every event is an opportunity to create happiness, foster creativity, and bring people together.',
        href: '/contact',
        icon: LightBulbIcon,
    },
    
    {
        name: 'Join the Movement',
        description:
            'Celebrations are more than just events; they’re memories in the making. Join us in spreading joy, laughter, and unforgettable moments. Whether you’re planning a party, a carnival, or a special event, The Red Balloon is here to make it magical!',
        href: '/contact',
        icon: UserGroupIcon,
    },
]
const About = () => {
    return (
        <>

            <MainLayout>
                <Features
                header='Team'
                subheader='The Red Balloon'
                brief=''
                linkheading='Contact Us'
                features={features} />
                {/* <Team /> */}
                {/* <CTA
                 header='Be our franchise partner' 
                 subheader='Join the family of aspiring entrepreneurs'
                 primaryLink ={
                     {slug :'https://wa.me/919530677035', 
                     name : "Whatsapp"}
                 }
                     secondaryLink={
                     {slug :'tel:9530677035', 
                     name : "Call Now"}
                 } /> */}
            </MainLayout></>
    )
}

export default About