import React from 'react'
import MainLayout from './_layout'
// import ContactForm from '@/components/ContactForm'
import FAQs from '@/components/FAQs'

const faqs = [
    {
        question: "What is The Red Balloon?",
        answer:
            "We are an event service provider specializing in kids' activities, theme decor, and fun-filled games for birthdays, carnivals, and celebrations.",
    },
    {
        question: "Where are you located?",
        answer:
            "We’re based in Jalandhar, Punjab, and currently serve events in the surrounding areas.",
    },
    {
        question: "What activities do you offer?",
        answer:
            "We offer a variety of activities like face painting, slime stations, canvas painting, gaming truck, bounce house, archery station, popcorn stations, and more.",
    },
    {
        question: "Do you provide themed decor?",
        answer:
            "Yes! We design customized decor to match the theme of your event.",
    },
    {
        question: "Are your activities suitable for all age groups?",
        answer:
            "Absolutely! We have activities and games for kids, teens, and even adults.",
    },
    {
        question: "How much space is needed for your setups?",
        answer:
            "Our setups are flexible and can be customized to fit the space available at your venue.",
    },
    {
        question: "Do you provide staff to manage the activities?",
        answer:
            "Yes, our trained staff ensures every activity runs smoothly and safely.",
    },
    {
        question: "What is the cost of your services?",
        answer:
            "Our pricing varies based on the activities and services you choose. Contact us for customized packages.",
    },
    
    {
        question: "Can we book individual activities?",
        answer:
            "Yes, you can select individual activities as per your preference.",
    },
    {
        question: "How far in advance should we book?",
        answer:
            "We recommend booking at least 2-3 weeks in advance to secure your date.",
    },
    {
        question: "Do you provide food services?",
        answer:
            "Yes, we offer treats like popcorn, cotton candy, and more!",
    },
    {
        question: "Can you cater to outdoor events?",
        answer:
            "Yes, we provide services for both indoor and outdoor events.",
    },
    // {
    //     question: "What is the power source required to operate the Game Truck?",
    //     answer:
    //         "To operate the Game Truck, we need a nearby 16 Amp switch. In case it is not feasible, we have a backup generator available at extra cost.",
    // },
    {
        question: "Do you offer customization options for activities?",
        answer:
            "Absolutely! We can tailor activities and setups to suit your event theme.",
    },
    {
        question: "Are your materials safe for kids?",
        answer:
            "Yes, all our materials are non-toxic and kid-friendly.",
    },
    {
        question: "How do I book your services?",
        answer:
            "Simply reach out to us via phone, or instagram to discuss your requirements and confirm your booking.",
    },
    {
        question: "Do you provide services outside Jalandhar?",
        answer:
            "Currently, we’re based in Jalandhar but can accommodate nearby cities.",
    },
    {
        question: "Can parents participate in the activities?",
        answer:
            "Of course! Many of our activities are family-friendly and encourage participation from all ages.",
    },
    {
        question: "How can I learn more about your offerings?",
        answer:
            "Contact us directly for detailed information about our services.",
    },
    {
        question: "Do you provide party invitations or return gifts?",
        answer:
            "Yes, we provide beautifully designed party invitations that can be customized to match your theme and preferences. Additionally, we offer a variety of return gift options to suit different age groups and occasions, ensuring your guests leave with a memorable token of the celebration. Let us know your requirements, and we’ll handle the rest!",
    },
    {
        question: "Can we mix and match activities from different packages?",
        answer:
            "Yes, you can customize your package by selecting the activities you prefer.",
    },
    {
        question: "Is there a minimum or maximum guest limit for your services?",
        answer:
            "No, we cater to events of all sizes, from small gatherings to large celebrations.",
    },
    {
      question: "Can we include unique activities not listed on your website?",
      answer:
          "Let us know your ideas, and we’ll do our best to accommodate them!",
    },
  ]

const Faqs = () => {
    return (
        <>
            <MainLayout>
                {/* <ContactForm /> */}
                <FAQs
                header='Frequently Asked Questions'
                faqs={faqs}/>
            </MainLayout>
        </>
    )
}

export default Faqs