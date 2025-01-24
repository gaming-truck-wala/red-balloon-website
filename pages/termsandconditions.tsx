import React from 'react'
import MainLayout from './_layout'
// import ContactForm from '@/components/ContactForm'
import FAQs from '@/components/FAQs'

const faqs = [
    {
        question: "Booking and Payments",
        answer:
            "A small deposit of 25% secures your booking, giving you flexibility.",
    },
    {
        question: "Cancellation and Refunds",
        answer:
            "For cancellations, we offer rescheduling or refunds based on circumstances.",
    },
    {
        question: "Client Responsibilities",
        answer:
            "The client is responsible for any damages caused to The Red Balloon's equipment by guests.",
    },
    {
        question: "Weather and Unforeseen Circumstances",
        answer:
            "Outdoor events may be affected by weather conditions. In case of rain or extreme weather, we will attempt to move activities indoors.",
    },
    {
        question: "Intellectual Property",
        answer:
            "All images, logos, and content related to The Red Balloon are the property of our company and may not be used without prior permission.",
    },
    {
        question: "Disputes and Resolution",
        answer:
            "Any disputes will be resolved amicably through mutual discussion.",
    },
    /*{
        question: " Copyright polices w.r.t photographs & videos?",
        answer:
            "Gaming Truck Wala has the rights to any pictures & videos taken at the party. If you don't want them to be used on any of our social pages, kindly inform us while booking the party.",
    },
    {
        question: "Weather Policy?",
        answer:
            "if an event is affected by unsafe weather (tornado warnings, high winds, heavy snow, unsafe roads, or flooding), Gaming Truck Wala reserves the right to reschedule your event. No refund will be issued for this reschedule.",
    },
    {
        question: "Food & Drink policy?",
        answer:
            "In order to provide you with the absolute cleanest and best video game experience possible and protect our equipment, Gaming Truck Wala does not allow any food or drinks into the gaming truck.",
    },
    {
        question: "Damage And/Or Injury?",
        answer:
            "Neither Gaming Truck Wala, nor any of its employees, shall be responsible for any damage to property resulting from a request by the client to position the theater in a specific location. This includes any kind of equipment damage. Additionally, Gaming Truck Wala reserves the right to charge the invoice and the client agrees to pay for damages, theft, or loss to the game theater or equipment resulting from accidental, careless or willful damage by the client’s guests. All liability for damages or injuries is the sole responsibility of the client and/or host.",
    },*/
    {
        question: "Terms & Conditions applied:",
        answer:
            "By booking the Red Balloon, the Client acknowledges and agrees to abide by these terms and conditions.",
    },
  
    // More questions...
  ]

const Termsandconditions = () => {
    return (
        <>
            <MainLayout>
                {/* <ContactForm /> */}
                <FAQs
                header='Terms & conditions' faqs={faqs}/>
            </MainLayout>
        </>
    )
}

export default Termsandconditions