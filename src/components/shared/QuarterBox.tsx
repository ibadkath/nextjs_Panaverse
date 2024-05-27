 
import React, { FC } from 'react'

interface Iprops{
  header: string
  description: string
  number: number
  borderHave ?:boolean
  paddingHave ?: boolean
}

const QuarterBox: FC<Iprops> = ({header,description,number, borderHave=true, paddingHave= true}) => {
  return (
  
    <div className={` rounded-md flex-1 relative py-16 ${borderHave ? "border" : ""} ${paddingHave ? " px-8": ""}`}>
      <h4 className='font-bold text-xs sm:text-lg'>{header} </h4>
      <p className='mt-2 text-slate-600'>{description}</p>
      <div className='absolute text-gray-200 -top-8 right-10 text-[170px] font-bold -z-10'>{number}</div>
    </div>

  )
}

export default QuarterBox
