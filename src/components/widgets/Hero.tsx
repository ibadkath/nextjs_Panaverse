import Wrapper from "@/components/shared/Wrapper"
import HeroPoster from "@/assets/Images/Hero Poster Panaverse.png"
import Image from "next/image"
import Button from "@/components/shared/button"

const Hero = () => {
  return (
    <section className="">
      {/* Hero section is used in home page */}
    <Wrapper>
      <div className="flex flex-col md:flex-row items-center">
        {/* left side */}
        <div className=" flex-1">
      <h4 className=" text-lg text-teal-700 font-semibold mt-4">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
      <h1 className=" text-4xl md:text-6xl font-bold mt-8 md:mt-5">Certified Cloud Applied Generative AI Engineer</h1>  
      <p className=" mt-6 text-xl">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
         Consolidating Cloud Computing, Generative AI,Ambient Computing/IoT, Network Automation, amd Bioinformatics Texhnologies.
        </p>  

      <div className="mt-5"> 
       <Button text="Enroll Now"></Button>
        </div>

        </div>
        {/* right side */}
        <div className=" flex-1">
          <Image src={HeroPoster} alt="Hero section"
           className=" w-[450px] md:w-[600px]"
          />
        </div>
      </div>
    </Wrapper>
    </section>
  )
}

export default Hero