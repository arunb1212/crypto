import React from 'react'
import { FaChartColumn } from "react-icons/fa6";


const Features = ({para,logo}) => {
  return (
    <div >        
        <div className='flex w-[300px] flex-col  items-center  p-[10px] rounded-xl bg-[#433283]  text-center border'>
            <div className='scale-[2] mt-[10px] mb-[10px]'>
                {
                    logo 
                }
            </div>
{/* <FaChartColumn className='scale-[2] mt-[10px] mb-[10px]'/> */}
<p className='font-bold mb-[10px]'>{para}</p>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus assumenda exercitationem dolor perferendis alias.</p>

        
        </div>
        
        </div>
  )
}

export default Features