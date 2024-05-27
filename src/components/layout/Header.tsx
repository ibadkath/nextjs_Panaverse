import Link from "next/link"
import Logo from "/public/logo.png"
import Image from "next/image"
import Wrapper from "@/components/shared/Wrapper"


const Header = () => {
  return (
    <header className=" sticky top-0 z-10">
    <Wrapper>
    <div className="flex justify-between bg-white py-5 items-center">
    {/* Logo */}
        <div>
            <Image src={Logo} alt="Panaverse Dao logo"
            width={100}
            />
        {/* <h2 className=" text-xl font-bold">Panaverse Dao</h2> */}
        </div>
           {/* Navigation bar */}
        <ul className="flex space-x-8 font-medium">
      
          <Link href={"/"}>
            <li> Home</li>
            </Link>

            <Link href={"/courses"}>
            <li> Courses</li>
            </Link>
        </ul>
    </div>
   </Wrapper>
   </header>
  )
}

export default Header
