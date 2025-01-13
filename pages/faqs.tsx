import React from 'react'
import MainLayout from './_layout'
// import ContactForm from '@/components/ContactForm'
import FAQs from '@/components/FAQs'

const faqs = [
    {
        question: "What is a gaming truck?",
        answer:
            "A gaming truck is like a big video game party on wheels. It has TVs and game consoles inside. ",
    },
    {
        question: "How many friends can play in a gaming truck?",
        answer:
            "Our gaming truck can accommodate up to 6 players for single-player games and up to 16 players for multiplayer games.",
    },
    {
        question: "Can I choose the games I want to play?",
        answer:
            "Yes, you can usually pick from a bunch of games.",
    },
    {
        question: "Can I have a gaming truck at my school event?",
        answer:
            "Yes, you can have a gaming truck at your school event.",
    },
    {
        question: "How early should I book a gaming truck?",
        answer:
            "Try to book it as soon as you know the date of your event, so you can make sure it's available.",
    },
    {
        question: "Is a gaming truck just for kids?",
        answer:
            "No, adults can also have fun in a gaming truck too!",
    },
    {
        question: "Can I eat and drink inside the gaming truck?",
        answer:
            "I apologize, but eating and drinking inside the gaming truck are not allowed due to concerns about the interior and electronic devices.",
    },
    {
        question: "Do I have to be really good at video games to play in a gaming truck?",
        answer:
            "Not at all! Gaming truck Wala is for people of all skill levels.",
    },
    
    {
        question: "What is the maximum number of people that can be seated in Gaming Truck Wala's Truck?",
        answer:
            "Our Gaming Truck is capable of accommodating 12-16 Gamers inside it.",
    },
    {
        question: "Does the truck get driven around while the party is going on?",
        answer:
            "The Gaming Truck remains entirely stationary during the party.",
    },
    {
        question: "Is there a minimum or maximum age requirement for individuals who can use the Game Truck for gaming?",
        answer:
            "Our recommended minimum age for using the Game Truck is 7 years old.",
    },
    {
        question: "Is it necessary to have a large parking space for the Gaming Truck?",
        answer:
            "For proper parking and setup of the Game Truck, a minimum area of 22ft x 10ft is required.",
    },
    // {
    //     question: "What is the power source required to operate the Game Truck?",
    //     answer:
    //         "To operate the Game Truck, we need a nearby 16 Amp switch. In case it is not feasible, we have a backup generator available at extra cost.",
    // },
    {
        question: "Is it necessary for parents or guardians to oversee the party?",
        answer:
            "Although parental supervision is not compulsory, It is advisable to have at least one adult available to help our game coach supervise children aged seven or younger.",
    },
    {
        question: "What all gaming consoles does the Gaming Truck Wala offer?",
        answer:
            "Gaming Truck Wala offers Play Station 5, Oculus VR Setups and Logitech Racing Wheel & Floor Pedals",
    },
    {
        question: "For what events Gaming Truck Wala is an excellent choice?",
        answer:
            "Gaming trucks for epic parties perfect for birthdays, weddings, get-togethers, farewells, corporate events, and more! ",
    },
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
    // {
    //     question: "How does the refund policy apply if there's an emergency that requires a last-minute cancellation of my gaming truck booking?",
    //     answer:
    //         "If you need to cancel your gaming truck booking just before the event, the booking or reservation amount is generally not refundable. However, we understand that genuine emergencies can arise. In such cases, our company will verify the circumstances, and if a legitimate emergency or unforeseen situation is confirmed, we will proceed accordingly and may consider exceptions to our standard cancellation policy. Your satisfaction and understanding are important to us, and we will work to find a fair resolution based on the situation. Please reach out to us as soon as possible in case of such emergencies.",
    // },
  
    // More questions...
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