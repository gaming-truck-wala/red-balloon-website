import { ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

interface Product {
    name: string
    description: string
    imageSrc: string
    imageAlt: string
}


export default function Products({ products }: { products: Product[] }) {
    const [showAll, setShowAll] = useState(false)
    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 lg:max-w-none ">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Inside The Gaming Truck Wala
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Our gaming truck is your passport to an unparalleled adventure at your doorstep, offering:
                        </p>
                    </div>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 lg:space-y-0">
                        {showAll ? products.map((product) => (
                            <div key={product.name} className="relative rounded-lg overflow-hidden ring-1 ring-neutral-200">
                                <div className="relative h-[550px] w-full overflow-hidden bg-white">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div
                                className="p-4 pt-0"
                                >
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <span className="absolute inset-0" />
                                        {product.name}
                                    </h3>
                                    <p className="text-lg font-semibold text-gray-900">{product.description}</p>
                                </div>
                            </div>
                        ))
                            : products.slice(0, 3).map((product) => (
                                <div key={product.name} className="relative">
                                    <div className="relative h-[550px] w-full overflow-hidden rounded-lg bg-white">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <span className="absolute inset-0" />
                                        {product.name}
                                    </h3>
                                    <p className="text-lg font-semibold text-gray-900">{product.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full text-center mt-20">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-base font-semibold leading-6 text-red-500">
                          {!showAll?
                          (
                            <>
                            Show More <ChevronDownIcon className="inline w-4 h-4" />
                            </>
                          )
                          :(
                            <>
                            Show Less <ChevronUpIcon className="inline w-4 h-4" />
                            </>

                        )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
