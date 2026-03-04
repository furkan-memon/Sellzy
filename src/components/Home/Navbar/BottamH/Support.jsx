import { Headset } from 'lucide-react'
import React from 'react'

const Support = () => {
  return (
    <div className='flex items-center gap-2'>
        <span className='bg-gray-200 p-3 rounded-full'>
            <Headset />
        </span>
        <div className='flex flex-col'>
        <p>24/7 Support</p>
        <p>
            888-777-99
        </p>
        </div>
    </div>
  )
}

export default Support