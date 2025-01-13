// import { Fragment, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import {
//     XMarkIcon,
// } from '@heroicons/react/24/outline'

// export default function OfferForm() {
//     const [open, setOpen] = useState(true)

//     return (
//         <Transition.Root show={open} as={Fragment}>
//             <Dialog as='div' className='relative z-10' onClose={setOpen}>
//                 <Transition.Child
//                     as={Fragment}
//                     enter='ease-out duration-300'
//                     enterFrom='opacity-0'
//                     enterTo='opacity-100'
//                     leave='ease-in duration-200'
//                     leaveFrom='opacity-100'
//                     leaveTo='opacity-0'>
//                     <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
//                 </Transition.Child>

//                 <div className='fixed inset-0 z-10 overflow-y-auto'>
//                     <div className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'>
//                         <Transition.Child
//                             as={Fragment}
//                             enter='ease-out duration-300'
//                             enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
//                             enterTo='opacity-100 translate-y-0 sm:scale-100'
//                             leave='ease-in duration-200'
//                             leaveFrom='opacity-100 translate-y-0 sm:scale-100'
//                             leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
//                             <Dialog.Panel className='relative transform overflow-hidden rounded-lg max-h-[500px] bg-white text-left shadow-xl transition-all'>
//                                 <div className='md:flex mx-auto h-full'>
//                                     <img
//                                         src="https://img.freepik.com/free-vector/crazy-diwali-sale-template-design-with-cracker_1017-15774.jpg?1&w=740&t=st=1693083740~exp=1693084340~hmac=ddb1bc2cce37aab97140055e08b79c4a1148c5150fdfab131ead746ccc1c0d48"
//                                         height={800}
//                                         width={800}
//                                         className='h-full w-full max-w-[500px] object-cover'
//                                         alt='/'
//                                     />
//                                     <div
//                                     >
//                                         <div
//                                             onClick={() => {
//                                                 setOpen(false)
//                                             }}
//                                             className='absolute top-2 right-2 bg-white rounded-full p-2 w-10 cursor-pointer text-slate/500 float-right mr-3 mt-3'>
//                                             <XMarkIcon strokeWidth={2} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Dialog.Panel>
//                         </Transition.Child>
//                     </div>
//                 </div>
//             </Dialog>
//         </Transition.Root>
//     )
// }