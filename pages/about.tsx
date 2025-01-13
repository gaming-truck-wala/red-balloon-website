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
            'A team, who saw the potential to transform gaming into an immersive, on-the-go experience.',
        href: '/contact',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Our Vision',
        description:
            'To redefine gaming and entertainment through innovation and entrepreneurship, bringing the gaming cafe experience right to your doorstep.',
        href: '/contact',
        icon: LightBulbIcon,
    },
    
    {
        name: 'Join the Movement',
        description:
            'Whether you are seeking a gaming venture or an extraordinary event experience, Gaming Truck Wala is here to rewrite the rules of entertainment and bring the gaming cafe to your doorstep. ',
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
                subheader='Gaming Truck Wala'
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