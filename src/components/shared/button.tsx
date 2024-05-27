
import React, { FC } from 'react'

const Button: FC<{text:string}> = ({text}) => {
  return (
    <button className='py-4 px-6 rounded-full bg-cyan-800 text-white hover:shadow-lg font-medium hover:scale-110 duration-300'>{text}</button>
  )
}

export default Button