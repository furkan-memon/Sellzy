import React from 'react'
import Button from './Button'
import  Home  from './Home'
import AbouteUs from './AbouteUs'
import Shop from './Shop'
import Sellers from './Sellers'
import MegaMenu from './Megamenu'
import Blog from './Blog'
import Pages from './Pages'
import Contact from './Contact'
import Support from './Support'
const Bottamh = () => {
  return (
   <>
   <div className='my-4 flex items-center  justify-between ' >
    <div >
    <Button />
    </div>
    <ui className="flex font-medium list-none gap-5
     text-[16px] ">
      <Home />
      <AbouteUs />
      <Shop />
      <Sellers />
      <MegaMenu />
      <Blog />
      <Pages />
      <Contact />
    </ui>
    <div>
      <Support />
    </div>
   </div>
    <div className="absolute left-1/2  w-screen -translate-x-1/2 border-b border-gray-300"></div>
    
    </>
  )
}

export default Bottamh