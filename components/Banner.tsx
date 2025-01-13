import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
export default function Banner() {
    const [close, setClose] = useState(false)
    return (
        <div className={
            `items-center gap-x-6 bg-gtw-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ${close ? "hidden" : "flex"}`
        }>
            <p className="text-sm leading-6 text-white">
                <a target="_blank" href="/pricing">
                    {/* <strong className="font-semibold">GeneriCon 2023</strong> */}
                    <strong className="font-semibold">The Red Balloon</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    {/* Join us in Denver from June 7 - 9 to see what&apos;s coming next&nbsp;<span aria-hidden="true">&rarr;</span> */}
                    Unlock non-stop fun and creativity for just Rs 2,490 <span aria-hidden="true">&rarr;</span>
                </a>
            </p>
            <div className="flex flex-1 justify-end">
                <button
                    onClick={() => setClose(true)}
                    type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}
