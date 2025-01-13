
const stats = [
    { id: 1, name: 'Gaming Consoles', value: '4+' },
    { id: 2, name: 'Virtual Reality Setup', value: '2+' },
    { id: 3, name: 'Racing Wheel & Pedals', value: '1+' },
    { id: 4, name: '3D Movie Experience Glasses', value: '20+' },
    { id: 5, name: 'Themes', value: '2+' },
    { id: 6, name: 'Photo Booth & Props', value: '20+' },
    // { id: 7, name: 'Temporary Tattoos', value: '15+' },
    { id: 8, name: 'Camera Recordings (Minutes)', value: '10+' },
    { id: 9, name: 'Timing (Hours)', value: '3+' },
];

export default function Stats() {
    return (
        <div className="bg-white py-24 sm:py-30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Inside The Gaming Truck Wala
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Our gaming truck is your passport to an unparalleled adventure at your doorstep, offering:
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                data-aos='fade-up'
                                data-aos-delay={stat.id *50}
                                key={stat.id} className="flex flex-col bg-gtw-yellow p-8">
                                <dt className="text-sm font-semibold leading-6 text-zinc-800/50">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
