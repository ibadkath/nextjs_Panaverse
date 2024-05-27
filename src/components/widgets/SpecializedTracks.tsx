'use client';

import React, { useState } from 'react'
import Wrapper from '@/components/shared/Wrapper'
import QuarterBox from '../shared/QuarterBox'
import Web3Img from "@/assets/Images/metaverse.webp"
import AiImg from "@/assets/Images/AI.jpeg"
import CloudImg from "@/assets/Images/CNC.jpeg"
import AmbImg from "@/assets/Images/Ambient.jpeg"
import BioImg from "@/assets/Images/genomics.jpeg"
import NetImg from "@/assets/Images/Network.jpg"
import Outcome from "@/assets/Images/Panaverse Dao_files/outcome-poster.png"
import Image from 'next/image'

export const programsData=[
  {
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description: "This Web3.0, AI and Metaverse specialization focuses on developing full-stack application experiences for the next generation of the internet by specializing in building worlds that merge cutting edge decentralized distributed blockchains with 3D metaverse client experiences. ",
    image: Web3Img,
    slug:"WMD",
    quarters: [
      {
        header: "Quarter IV",
        description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4
      },
      {
        header: "Quarter V",
        description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5
      }
    ]
  },
  {
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description: "The AI and Deep Learning Specialization focuses on building and deploying intelligents ApIs using OpenAI models and building custom Deep Learning Tensorflow models. ",
    image: AiImg,
    slug:"AI",
    quarters: [
      {
        header: "Quarter IV",
        description:"AI-351: Developing Planet-Scale INtelligents APIs and Python Programming",
        number: 4
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOPs",
        number: 5
      }
    ]
  },
  {
    header: "Cloud-Native Computing Specialization",
    description: " The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: CloudImg,
    slug:"CNC",
    quarters:[
      {
        header: "Quarter IV",
        description:"CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4
      },
      {
        header: "Quarter V",
        description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5
      }
    ]
  },
  {
    header: "Ambient Computing and IoT Specialization",
    description: " The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: AmbImg,
    slug:"AC",
    quarters: [
      {
        header: "Quarter IV",
        description:"AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5
      }
    ]
  },
  {
    header: "Genomics and Bioinformatics Specialization",
    description: " Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. ",
    image: BioImg,
    slug:"Bio",
    quarters:[
      {
        header: "Quarter IV",
        description:"Bio-351: Python for Biologists",
        number: 4
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5
      }
    ]
  },
  {
    header: "Network Programmability and Automation Specialization",
    description: " More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile.",
    image: NetImg,
    slug:"NPA",
    quarters:[
      {
        header: "Quarter IV",
        description:"NPA-351: CCNA 200-301 Certification",
        number: 4
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5
      }
    ]
  },
]

const SpecializedTracks = () => {

  const[selectedItems, setSelectedItems]= useState("AI");
  const selectedItemData= programsData.find((item)=> item.slug === selectedItems)
  

  return (
    <section>
        <Wrapper>
            {/* Header */}
         <div>
            <h2 className='text-4xl font-bold mt-2 whitespace-pre-line'> Specialized Tracks: </h2>
            <p className='text-lg mt-5 text-slate-600 max-w-screen-md'> After completing the first three quarters the participants will select one or more specializations consisting of two courses each</p>
         </div>

         <div className='my-10 flex flex-col-reverse lg:flex-row gap-x-10 gap-y-8 '>
            {/* Content Left */}
        <div className='border border-slate-200 sticky top-28 self-start basis-8/12 rounded-xl shadow-xl px-8 py-6'>
           <h4 className='text-md text-teal-700 font-semibold'>Specialized Program</h4>
           <h3 className='mt-3 text-2xl font-bold'>{selectedItemData?.header}</h3>
           <p className='mt-3 text-slate-600 text-lg'>{selectedItemData?.description} </p>
           <button className='text-teal-700 font-medium underline mt-4'>Learn More</button>

           <div className='flex flex-col sm:flex-row '>
            {
              selectedItemData?.quarters.map((item)=>(
                <QuarterBox
            header={item.header}
            description={item.description}
            number={item.number}
             borderHave={false}
             paddingHave={false}
            />
              ))
            }
            
           </div>
        </div>
            {/* Content Right */}
            <div className='bg-slate-100 px-6 py-8 basis-4/12 flex-1 space-y-8 rounded-xl'>

            {
              programsData.map((item,i)=>(
                <div onClick={()=> setSelectedItems(item.slug)} key={item.slug} className='flex items-center gap-x-4 cursor-pointer'>
                <div className=' flex-shrink-0 hover:scale-95 duration-300'>
                  {/* <div className='w-20 h-16 rounded bg-blue-300'></div> */}
                  <Image src={item.image} alt={item.header} className=' h-24 w-36 object-cover rounded-md'/>
                </div>
                <div>
                  <h5 className=' text-teal-700 font-semibold '>Specialized Program</h5>
                  <h3 className=' text-xl font-bold'>{item.header}</h3>
                </div>
                
                
               </div>
              ))
            }
               
            </div>
            </div>


           
        </Wrapper>
    </section>
  )
}

export default SpecializedTracks