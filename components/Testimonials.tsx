const featuredTestimonial = {
    body: 'my dream is to bring joy and create special memories for every celebration. Watching kids smile and have fun with our activities, makes all the hard work worth it. We put our hearts into making every event unforgettable. Thank you for letting us be part of your celebrations!',
    author: {
        name: 'Gaurav Seth',
        handle: 'The Red Balloon',
        imageUrl:
            '/gaurav.webp',
        logoUrl: '/fulllogo.webp',
    },
}
// const testimonials = [
//     [
//         [
//             {
//                 body: 'I cant believe it, a truck filled with games! This is going to be the coolest thing ever! I cant wait to play all my favorite games with my friends!',
//                 author: {
//                     name: 'Manvir Singh',
//                     handle: 'Student',
//                     imageUrl:
//                         'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//                 },
//             },
//             // More testimonials...
//         ],
//         [
//             {
//                 body: 'Back in my day, we never had anything like this! The Gaming Truck Wala sounds like a blast, and I cant wait to see my grandkids enjoy something so innovative.',
//                 author: {
//                     name: 'Ved Prakash Puri',
//                     handle: 'Grand Parent',
//                     imageUrl:
//                         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//                 },
//             },
//             // More testimonials...
//         ],
//     ],
//     [
//         [
//             {
//                 body: 'Finally, a unique and safe entertainment option for our kids! The Gaming Truck Wala is exactly what we needed to make parties stress-free and enjoyable.',
//                 author: {
//                     name: 'Sneha Sharma',
//                     handle: 'Parent',
//                     imageUrl:
//                         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//                 },
//             },
//             // More testimonials...
//         ],
//         [
//             {
//                 body: 'Before the Gaming Truck Wala is even launched, I can already imagine the excitement it will bring to weddings. Kids who used to feel bored will now be looking forward to weddings because of this surprise. I cant wait to see the happiness it will create!',
//                 author: {
//                     name: 'Ananya',
//                     handle: 'Event Manager',
//                     imageUrl:
//                         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
//                 },
//             },
//             // More testimonials...
//         ],
//     ],
// ]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Testimonials({featuredTestimonial, testimonials}:{featuredTestimonial: any,testimonials:any[]}) {
    return (
        <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
            <div
                className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-20 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#DA291C] to-[#FFC72C]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-20 blur-3xl sm:pt-40 xl:justify-end"
                aria-hidden="true"
            >
                <div
                    className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#FFC72C] to-[#DA291C] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-gtw-red">
                        Pre-Launch Buzz</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Excitement Builds for Gaming Truck Wala Launch!
                    </p>
                </div>
                <div 
                    
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure
                     data-aos='fade-up'
                     data-aos-delay='200'
                     className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                        <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                            <p>{`“${featuredTestimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                            <img
                                
                                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                                src={featuredTestimonial.author.imageUrl}
                                alt=""
                            />
                            <div className="flex-auto">
                                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                                {/* <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div> */}
                                <div className="text-gray-600">{`${featuredTestimonial.author.handle}`}</div>
                            </div>
                            <img className="h-12 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
                        </figcaption>
                    </figure>
                    {testimonials.map((columnGroup, columnGroupIdx) => (
                        <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                            {columnGroup.map((column: any, columnIdx: number) => (
                                <div
                                    key={columnIdx}
                                    className={classNames(
                                        (columnGroupIdx === 0 && columnIdx === 0) ||
                                            (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                            ? 'xl:row-span-2'
                                            : 'xl:row-start-1',
                                        'space-y-8'
                                    )}
                                >
                                    {column.map((testimonial:any) => (
                                        <figure
                                        data-aos='fade-up'
                                        data-aos-delay='350'
                                            key={testimonial.author.handle}
                                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                                        >
                                            <blockquote className="text-gray-900">
                                                <p>{`“${testimonial.body}”`}</p>
                                            </blockquote>
                                            <figcaption className="mt-6 flex items-center gap-x-4">
                                                {/* <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" /> */}
                                                <div>
                                                    <div className="font-semibold">{testimonial.author.name}</div>
                                                    <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                                                    {/* <div className="text-gray-600">{`@${testimonial.author.handle}`}</div> */}
                                                </div>
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
