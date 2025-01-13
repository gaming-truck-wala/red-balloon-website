import React from 'react'
import MainLayout from './_layout'

const EnquiryPage = () => {
    return (
        <>
            <MainLayout>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfiiwMnu6tHAHi34MwoQQLgbGbdt-jWlm2UxKiIBc2pUbbhHw/viewform?embedded=true"
                    width={'100%'}

                    className='w-full h-full min-h-[900px]'
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}>
                    Loading…
                </iframe>
            </MainLayout>
        </>
    )
}

export default EnquiryPage