import React from 'react'
import MainLayout from './_layout'
// import ContactForm from '@/components/ContactForm'
import FAQs from '@/components/FAQs'

const faqs = [
    {
        question: "How far in advance should I reserve the gaming truck for my event?",
        answer:
            "Booking the gaming truck in advance is highly recommended to ensure availability on your preferred date and time. While we strive to accommodate last-minute requests subject to availability, we strongly recommend booking at least 30 days in advance. This advance booking period allows us to better plan and prepare for your event, ensuring that your gaming experience is seamless and enjoyable. However, feel free to contact us even if your event is closer to discuss the possibilities, as we'll do our best to accommodate your gaming truck needs.",
    },
    {
        question: "What is the initial booking fee required to reserve the gaming truck for my event?",
        answer:
            "To secure your gaming truck reservation, an initial payment of 25% of the selected package price is required. This deposit ensures your booking is confirmed and reserved for your specified date and time.",
    },
    {
        question: "What is the policy for clearing the remaining payment for the gaming truck rental?",
        answer:
            "We kindly request that the remaining payment be cleared at least one week before the scheduled event date. Our team will get in touch with you to facilitate the payment process and ensure everything is in order for your upcoming gaming truck experience.",
    },
    {
        question: "What is the policy for clearing the remaining payment for the gaming truck rental?",
        answer:
            "We kindly request that the remaining payment be cleared at least one week before the scheduled event date. Our team will get in touch with you to facilitate the payment process and ensure everything is in order for your upcoming gaming truck experience.",
    },
    {
        question: "If I book the gaming truck within one week before the event, what is the payment policy regarding the clearance of the full payment?",
        answer:
            "When booking within one week before the event, we first check the availability of the gaming truck. If it is available, according to our payment policy, the full payment should be cleared at the time of booking.",
    },
    {
        question: "What is the refund policy if I need to cancel my gaming truck booking just before the event?",
        answer:
            "If you need to cancel your gaming truck booking just before the event, the booking or reservation amount is not refundable.",
    },
    {
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
    },
    {
        question: "Terms & Conditions applied:",
        answer:
            "By booking the Gaming Truck, the Client acknowledges and agrees to abide by these terms and conditions.",
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