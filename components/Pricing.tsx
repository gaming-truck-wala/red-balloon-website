import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
    { value: 'jal', label: 'Jalandhar', priceSuffix: '' },
    // { value: 'ldh', label: 'Ludhiana', priceSuffix: '' },
    // { value: 'yearly', label: 'Amritsar', priceSuffix: '' },
    { value: 'others', label: 'Others', priceSuffix: 'Contact for price' },
]
const tiers: any = [
    {
        "name": "Archery Station 🎯",
        "id": "tier-startup",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "3500",
                "original": "2000"
            },
            // "ldh": {
            //    "fake": "22990",
            //     "original": "17990"
           // },
            // "others": {
            //     "fake": "11990",
            //     "original": "14990"
            // }
        },
        "description": "Our Archery Stall is the perfect choice to keep your guests entertained and engaged! Whether it’s a birthday party, carnival, or a family get-together, this exciting activity will leave everyone talking about your celebration for weeks!",
        "features": [
            "Fun for kids, teens, and adults.",
            "Safe setup with lightweight bows and soft-tipped arrows.",
            "Trained supervisors ensure safety and guide players.",
            "Interactive and engaging for all guests.",
            "Perfect for friendly competitions and challenges.",
            "Creates fun photo-worthy moments.",
            "Improves focus and hand-eye coordination.",
            "Ideal for birthdays, carnivals, and events.",
            //"Basic Red, Black, and Blue Spider-Man Themed Interior",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            //"Video Recording",
            //"Custom Invitation Card (Digital)",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },
    
    {
        name: "Canvas Painting 🎨",
        id: "tier-freelancer",
        href: "tel:9530677035",
        "price": {
            "jal": {
                "fake": "8000",
                "original": "6000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "21990"
            // }
        },
        "description": "Add a splash of creativity to your celebrations with our Canvas Painting activity, designed to engage guests of all ages! With vibrant paints, brushes, and quality canvases provided, everyone can enjoy creating their own masterpiece to take home.",
        "features": [
            "Suitable for kids and adults alike.",
            "Guests take home their own artwork.",
            "High-quality art supplies provided.",
            "Encourages creativity and self-expression.",
            "Promotes fine motor skill development.",
            "Fun, interactive, and engaging.",
            "Perfect for birthdays, carnivals, and more.",
            "Great bonding activity for families and friends.",
            "Vibrant and colorful setups for photos.",
            "Professional staff to guide participants.",
            "Enhances the overall party experience.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            //"Video Recording",
            //"Custom Invitation Card (Digital)",
            //"Photo Booth & Props",
            // "Temporary Tattoos",
            
        ],
        "mostPopular": false
    },

    {
        "name": "Bounce House 🏰",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "12000",
                "original": "8000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Bounce House from The Red Balloon is a fun-filled, safe, and exciting addition to any event, perfect for kids to enjoy. It’s the perfect way to bring joy and laughter to any celebration!",
        "features": [
            "Ideal for birthday parties, carnivals, and festivals.",
            "Spacious enough for multiple kids to play simultaneously.",
            "Safe and secure design with sturdy walls.",
            "Provides hours of bouncing fun and entertainment.",
            "Adds an energetic and playful vibe to the event.",
            "Encourages physical activity.",
            "Completely supervised and managed by trained staff for a worry-free experience.",
            "Perfect for both indoor and outdoor events, adaptable to different spaces.",
            "The Bounce House can be paired with other exciting games and activities.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            "With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Bounce House",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "12000",
                "original": "8000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Bounce House from The Red Balloon is a fun-filled, safe, and exciting addition to any event, perfect for kids to enjoy. It’s the perfect way to bring joy and laughter to any celebration!",
        "features": [
            "Ideal for birthday parties, carnivals, and festivals.",
            "Spacious enough for multiple kids to play simultaneously.",
            "Safe and secure design with sturdy walls.",
            "Provides hours of bouncing fun and entertainment.",
            "Adds an energetic and playful vibe to the event.",
            "Encourages physical activity.",
            "Completely supervised and managed by trained staff for a worry-free experience.",
            "Perfect for both indoor and outdoor events, adaptable to different spaces.",
            "The Bounce House can be paired with other exciting games and activities.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            "With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Bounce House",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "12000",
                "original": "8000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Bounce House from The Red Balloon is a fun-filled, safe, and exciting addition to any event, perfect for kids to enjoy. It’s the perfect way to bring joy and laughter to any celebration!",
        "features": [
            "Ideal for birthday parties, carnivals, and festivals.",
            "Spacious enough for multiple kids to play simultaneously.",
            "Safe and secure design with sturdy walls.",
            "Provides hours of bouncing fun and entertainment.",
            "Adds an energetic and playful vibe to the event.",
            "Encourages physical activity.",
            "Completely supervised and managed by trained staff for a worry-free experience.",
            "Perfect for both indoor and outdoor events, adaptable to different spaces.",
            "The Bounce House can be paired with other exciting games and activities.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            "With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Bounce House",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "12000",
                "original": "8000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Bounce House from The Red Balloon is a fun-filled, safe, and exciting addition to any event, perfect for kids to enjoy. It’s the perfect way to bring joy and laughter to any celebration!",
        "features": [
            "Ideal for birthday parties, carnivals, and festivals.",
            "Spacious enough for multiple kids to play simultaneously.",
            "Safe and secure design with sturdy walls.",
            "Provides hours of bouncing fun and entertainment.",
            "Adds an energetic and playful vibe to the event.",
            "Encourages physical activity.",
            "Completely supervised and managed by trained staff for a worry-free experience.",
            "Perfect for both indoor and outdoor events, adaptable to different spaces.",
            "The Bounce House can be paired with other exciting games and activities.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            "With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Bounce House",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "12000",
                "original": "8000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Bounce House from The Red Balloon is a fun-filled, safe, and exciting addition to any event, perfect for kids to enjoy. It’s the perfect way to bring joy and laughter to any celebration!",
        "features": [
            "Ideal for birthday parties, carnivals, and festivals.",
            "Spacious enough for multiple kids to play simultaneously.",
            "Safe and secure design with sturdy walls.",
            "Provides hours of bouncing fun and entertainment.",
            "Adds an energetic and playful vibe to the event.",
            "Encourages physical activity.",
            "Completely supervised and managed by trained staff for a worry-free experience.",
            "Perfect for both indoor and outdoor events, adaptable to different spaces.",
            "The Bounce House can be paired with other exciting games and activities.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            "With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Bounce House",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "12000",
                "original": "8000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Bounce House from The Red Balloon is a fun-filled, safe, and exciting addition to any event, perfect for kids to enjoy. It’s the perfect way to bring joy and laughter to any celebration!",
        "features": [
            "Ideal for birthday parties, carnivals, and festivals.",
            "Spacious enough for multiple kids to play simultaneously.",
            "Safe and secure design with sturdy walls.",
            "Provides hours of bouncing fun and entertainment.",
            "Adds an energetic and playful vibe to the event.",
            "Encourages physical activity.",
            "Completely supervised and managed by trained staff for a worry-free experience.",
            "Perfect for both indoor and outdoor events, adaptable to different spaces.",
            "The Bounce House can be paired with other exciting games and activities.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            "With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Bounce House",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "12000",
                "original": "8000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Bounce House from The Red Balloon is a fun-filled, safe, and exciting addition to any event, perfect for kids to enjoy. It’s the perfect way to bring joy and laughter to any celebration!",
        "features": [
            "Ideal for birthday parties, carnivals, and festivals.",
            "Spacious enough for multiple kids to play simultaneously.",
            "Safe and secure design with sturdy walls.",
            "Provides hours of bouncing fun and entertainment.",
            "Adds an energetic and playful vibe to the event.",
            "Encourages physical activity.",
            "Completely supervised and managed by trained staff for a worry-free experience.",
            "Perfect for both indoor and outdoor events, adaptable to different spaces.",
            "The Bounce House can be paired with other exciting games and activities.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            "With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    }

]


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-gtw-red">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Pricing plans for events of&nbsp;all&nbsp;sizes
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 ">
                    {/* Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer
                    loyalty, and driving sales. */}
                    Level Up Your party with The Red Balloon!
                    {/* <br/> */}
                    {/* Note: All prices are calculated based on the assumption that the base location is Jalandhar. For services provided outside of Jalandhar, transportation charges will apply. */}
                    {/* and Make The Ordinary events Extraordinary */}
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-gray-400">
                    {/* Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer
                    loyalty, and driving sales. */}

                    Note: Prices are based on Jalandhar as the base location and include transportation charges for other locations.
                    {/* and Make The Ordinary events Extraordinary */}
                </p>
                <div className="mt-16 flex justify-center">
                    <RadioGroup
                        value={frequency}
                        onChange={setFrequency}
                        className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
                    >
                        <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                        {frequencies.map((option) => (
                            <RadioGroup.Option
                                key={option.value}
                                value={option}
                                className={({ checked }) =>
                                    classNames(
                                        checked ? 'bg-gtw-black text-white' : 'text-gray-500',
                                        'cursor-pointer rounded-full px-2.5 py-1'
                                    )
                                }
                            >
                                <span>{option.label}</span>
                            </RadioGroup.Option>
                        ))}
                    </RadioGroup>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier: any) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'ring-2 ring-gtw-black' : 'ring-1 ring-gray-200',
                                'rounded-3xl p-8 xl:p-10'
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3
                                    id={tier.id}
                                    className={classNames(
                                        tier.mostPopular ? 'text-gtw-black' : 'text-gray-900',
                                        'text-lg font-semibold leading-8'
                                    )}
                                >
                                    {tier.name}
                                </h3>
                                {tier.mostPopular ? (
                                    <p className="rounded-full bg-gtw-red/10 px-2.5 py-1 text-xs font-semibold leading-5 text-gtw-red">
                                        Most popular
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">
                                    {tier.price[frequency.value]?.original ? ("₹ " + tier.price[frequency.value]?.original) : ""}
                                </span>
                                <span className="text-sm font-semibold leading-6 text-gray-600">
                                    {frequency.priceSuffix}
                                </span>
                                <span className="text-sm font-semibold leading-6 text-gray-600 line-through">
                                    {tier.price[frequency.value]?.fake ? ("₹ " + tier.price[frequency.value]?.fake) : ""}
                                </span>
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-gtw-black text-white shadow-sm hover:bg-gtw-red'
                                        : 'text-gtw-black ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                Call Now!
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                                {tier.features.map((feature: any) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-gtw-red" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="rounded-half bg-gray-700/5 mx-auto mt-16 max-w-2xl text-center text-lg leading-8 text-gtw-black">
                    {/* Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer
                    loyalty, and driving sales. */}

                    Want to Reserve Gaming Truck Wala for Your School or College Event ?<br /> Call Now!
                    {/* and Make The Ordinary events Extraordinary */}
                </p>
            </div>
        </div>
    )
}
