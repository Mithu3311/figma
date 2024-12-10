import { poppins } from '@/app/ui/fonts'
import React from 'react'

const DeliveryPolicy = () => {
  return (
    <>
        <div className={`${poppins.className} w-full h-[300px] flex justify-evenly `}>
            <div className='w-[376px] h-[108px] flex flex-col justify-start items-start p-8'>
                <h1 className='text-[32px]'>Free Delivery</h1>
                <p className='text-[20px] text-gray-700'>For all oders over $50, consectetur adipim scing elit.</p>
            </div>

            <div className='w-[376px] h-[108px] flex flex-col justify-start items-start p-6'>
                <h1 className='text-[32px]'>90 Days Return</h1>
                <p className='text-[20px] text-gray-700'>If goods have problems, consectetur adipim scing elit.</p>
            </div>

            <div className='w-[376px] h-[108px] flex flex-col justify-start items-start p-6'>
                <h1 className='text-[32px]'>Secure Payment</h1>
                <p className='text-[20px] text-gray-700'>100% secure payment, consectetur adipim scing elit.</p>
            </div>
        </div>
    </>
  )
}

export default DeliveryPolicy
