import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier'
import { SCHEMES } from '../utils/swoldier'


function Header(props) {
    const { index, title, description } = props

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {
    const [showModal, setShowModal] = useState(false)
    const [poison, setPoison] = useState('individual')
    const [muscle, setMuscle] = useState('[]')
    const [goals, setGoals] = useState('strength_power')

    function toggleModal() {
        setShowModal(!showModal)
    }

    return (
        <SectionWrapper header={"generate your workout"}
            title={['It\'s', ' Huge', 'o\'clock']}>
            <Header index={'01'}
                title={'Pick your poison'}
                description={'Select your Workout you wish to endure'} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => setPoison(type)} className=
                            {'bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600'
                                + (type === poison ? ' border-blue-600' : ' border-blue-400')
                            /* a bug where u have to put a space before assigning a value lol*/}
                            key={typeIndex}>
                            <p className='capitalize'>
                                {type.replaceAll('_', " ")}
                            </p>
                        </button>
                    )
                })}
            </div>

            <Header index={'02'}
                title={'Lock on Targets'}
                description={'Select the muscles judged for annihilation'} />
            <div className='bg-slate-950 border flex flex-col border-solid border-blue-400 rounded-lg'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p>Select muscle groups</p>
                    <i className="fa-solid fa-arrow-down
                    absolute right-3 top-1/2 -translate-y-1/2"></i>
                </button>

                {showModal && (
                    <div>
                        Modal in the middle
                    </div>
                )}
            </div>

            <Header index={'03'}
                title={'Become Juggarnaut'}
                description={'Select your ultimate objective'} />
            <div className='grid grid-cols-3'>

                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => setGoals(scheme)} className=
                        {'bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600'
                            + (scheme === goals ? ' border-blue-600' : ' border-blue-400')
                        } key={schemeIndex}>
                            <p className='capitalize'>
                                {scheme.replaceAll('_', " ")}
                            </p>
                        </button>
                    )
                })}
            </div>



        </SectionWrapper>
    )
}
