
export default function LogoCloud({ logos }: { logos: string[] }) {
    return (
        <div className="bg-gtw-yellow py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-lg font-semibold leading-8 text-gray-900">
                         Featured in Top Media Channels
                    </h2>
                    <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                        {
                            logos.map((logo: string, index: number) => (
                                <img
                                    key={index}
                                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                                    src={logo}
                                    alt="Transistor"
                                    width={158}
                                    height={48}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}
