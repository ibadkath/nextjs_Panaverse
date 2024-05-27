
import { FC } from 'react'

// Its a component which is used to give same space to every section/widget. 

const Wrapper: FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className=' max-w-screen-custom mx-auto px-4'>{children}</div>
  )
}

export default Wrapper
