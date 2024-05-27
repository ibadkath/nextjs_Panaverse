
import React from 'react';
import Wrapper from '@/components/shared/Wrapper'
import OutcomeImg from "@/assets/Images/Panaverse Dao_files/outcome-poster.png"
import Image from 'next/image'
import { IoCheckbox } from "react-icons/io5";


const outcomePoints=["Product Ownership", "Freelancing", "Global Marketing by Panaverse DAO", "Boosting Economy" ]

const Outcome = () => {
  return (
    <section className=' mt-20 md:mt-32'>
        <Wrapper>
  
        <div className=' flex items-center gap-x-8 gap-y-12 flex-col-reverse md:flex-row'>

            {/* Content left */}
            <div className=' flex-1'>
                <Image src={OutcomeImg} alt='Outcome' 
                 width={550}
                />
            </div>

            {/* Content right */}
            <div className=' flex-1'>
                <h3 className=' text-3xl md:text-5xl font-bold'>The Outcome for Participants of the Program</h3>
                <p className=' mt-10 text-slate-600 text-lg'>As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports</p>
                <div className=' grid grid-cols-2 mt-12 gap-x-2 gap-y-4'>
               {
                outcomePoints.map((item,i)=>(
                    <div key={i} className=' flex lg:items-center gap-x-2' >
                      <IoCheckbox className=' text-cyan-500 text-xl flex-shrink-0' />
                      <h3 className=' text-lg font-medium'>{item}</h3>
                </div>
                ))
               }
            </div>
            </div>
        </div>
        </Wrapper>
    </section>
  )
}

export default Outcome