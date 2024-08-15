import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center 
        justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>
                    IT'S TIME TO GET
                </p>
            </div>
            <h1 className='uppercase 
            font-semibold text-4xl sm:text-5xl 
            md:text-6xl lg:text-7xl'>
                Enor<span className='text-blue-400'>mous</span>
            </h1>
            <p className='text-sm md:text-base font-light'>
                I hereby acknowledgement
                that I may become
                <span className='text-blue-400 font-medium'> unbelievably big big big </span>
                and accept all risks of becoming the local
                <span className='text-blue-400 font-medium'> mass montrosity</span>,
                afflicted with severe body dismorphia, unable to fit through doors
            </p>
            <Button text={"Accept and Begin"} />
        </div>
    )
}
