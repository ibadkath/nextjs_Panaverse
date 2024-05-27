import Image from 'next/image'
import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Logo from "/public/logo.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const programCourses=["Web 3.0 and Metaverse Developer", "Artificial Intelligence", "Cloud-Native Computing", "Ambient Computing and IoT", "Genomics and Bioinformatics", " Network Programmability and Automation"]
const quarter= ["Home","Quarter 1", "Quarter 2", "Quarter 3"]

const Footer = () => {
  return (
    <footer>
        <hr className=' mt-32'/>
        <Wrapper>

            <div className=' flex mt-16 mb-16 gap-x-16 flex-col md:flex-row gap-y-8'>
                {/* Content Left */}
                <div className=' flex-1'>
            <div>
          <Image
           src={Logo}
           alt='Panaverse Dao Logo'
           width={150}
          />
          <p className=' mt-6 text-md text-slate-600 '>Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
            </div>

            <div className=' flex mt-12 text-4xl gap-x-3 text-cyan-600'>
             <FaFacebookSquare/> <FaYoutubeSquare/> <FaGithubSquare/> <FaLinkedin/>
            </div>
            </div>

            {/* Content right */}
            <div className=' flex-1 flex gap-x-8 flex-col md:flex-row gap-y-8'>
                    <div>
                <h3 className=' text-lg font-bold'>Programs</h3>
                {programCourses.map((item,i)=>(
                  <div key={i} className=' mt-2 '>
                    <h4 className=' text-slate-600'>{item}</h4>
                  </div>
                ))}
                  </div>

                  <div>
                    <h3 className=' text-lg font-bold'>Pages</h3>
                    
                    {quarter.map((item,i)=>(
                        <div className=' mt-2' key={i}>
                           <h4 className=' text-slate-600'>{item}</h4>
                    </div>
                    ))}
                  </div>
                
            </div>
            </div>
        </Wrapper>
    </footer>
  )
}

export default Footer