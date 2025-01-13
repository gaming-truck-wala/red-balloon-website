import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
    { value: 'jal', label: 'Jalandhar', priceSuffix: '' },
    { value: 'ldh', label: 'Ludhiana', priceSuffix: '' },
    // { value: 'yearly', label: 'Amritsar', priceSuffix: '' },
    { value: 'others', label: 'Others', priceSuffix: 'Contact for price' },
]
const tiers: any = [
    {
        "name": "Birthday Wala",
        "id": "tier-startup",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "17990",
                "original": "13490"
            },
            "ldh": {
                "fake": "22990",
                "original": "17990"
            },
            // "others": {
            //     "fake": "11990",
            //     "original": "14990"
            // }
        },
        "description": "Create unforgettable birthday memories for kids with the excitement of Gaming Truck Wala.",
        "features": [
            "Gaming Truck with AC and Comfy Sofa for 3 Hours",
            "4 Playstations",
            "2 VRs",
            "Car Racing GT7 Simulation with Racing Wheel & Floor Pedals",
            "VR Roller Coaster Experience",
            "Sword VR Gameplay",
            "2+ Game Coach",
            "All Friends of the Birthday Boy/Girl Can Enjoy the Gaming Truck Vibes",
            "Basic Red, Black, and Blue Spider-Man Themed Interior",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            "Video Recording",
            "Custom Invitation Card (Digital)",
            "Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": true
    },
    
    {
        name: "Shaadi Wala",
        id: "tier-freelancer",
        href: "tel:9530677035",
        "price": {
            "jal": {
                "fake": "29990",
                "original": "24990"
            },
            "ldh": {
                "fake": "31990",
                "original": "27990"
            },
            // "others": {
            //     "fake": "26990",
            //     "original": "21990"
            // }
        },
        "description": "Elevate your wedding festivities with our enchanting Gaming Truck Wala experience, delighting all guests with non-stop entertainment.",
        "features": [
            "Gaming Truck with AC and Comfy Sofa for 5 Hours",
            "4 Playstations",
            "2 VRs",
            "Car Racing GT7 Simulation with Racing Wheel & Floor Pedals",
            "VR Roller Coaster Experience",
            "Sword VR Gameplay",
            "4+ Game Coach",
            "Unlimited Gaming Fun for All Wedding Guests!",
            "Basic Red, Black, and Blue Spider-Man Themed Interior",
            "Prewedding Photoshoots in Our Gaming Truck",
            "Home Function Highlights on Gaming Truck Outer Screens",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            "Video Recording",
            "Custom Invitation Card (Digital)",
            "Photo Booth & Props",
            // "Temporary Tattoos",
            
        ],
        "mostPopular": false
    },

    {
        "name": "Corporate Wala",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "29990",
                "original": "24990"
            },
            "ldh": {
                "fake": "31990",
                "original": "27990"
            },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Bring families closer at corporate events with Gaming Truck Wala, where Gamers have a blast while employees connect",
        "features": [
            "Gaming Truck with AC and Comfy Sofa for 5 Hours",
            "4 Playstations",
            "2 VRs",
            "Car Racing GT7 Simulation with Racing Wheel & Floor Pedals",
            "VR Roller Coaster Experience",
            "Sword VR Gameplay",
            "4+ Game Coach",
            "Unlimited Gaming Fun for Your Corporate Family Event!",
            "Basic Red, Black, and Blue Spider-Man Themed Interior",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            "Video Recording",
            "Custom Invitation Card (Digital)",
            "Photo Booth & Props",
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
                    Level Up Your Entertainment with Gaming Truck Wala!
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
                        className="grid grid-cols-3 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
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
