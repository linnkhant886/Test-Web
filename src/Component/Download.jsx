import React from 'react'
import {AiFillWindows} from "react-icons/ai"
import {BsApple} from "react-icons/bs"
import {FcLinux} from "react-icons/fc"
import {FaRaspberryPi} from "react-icons/fa"
import {AiFillChrome} from "react-icons/ai"
import {BsAndroid} from "react-icons/bs"

const Download = () => {
  return (
    <div className=' my-40'>
        <div className='  max-w-[1200px] mx-auto '><hr /></div>
      <div className=' container mx-auto'>
      
        <div>
            
            <h1 className='font-bold text-4xl text-center my-4'>Every Operating System Every Device</h1>
            <p className=' font-semibold text-slate-500 text-center'> Vanilla runs native client on all major platform</p>


            <div className=' grid grid-cols-2  md:flex justify-between  gap-10 px-10  mt-14 '>

                <div className=' border border-transparent hover:border-green-500  duration-300  text-center p-7  rounded-3xl '>
                    <AiFillWindows size={75} className=' w-75 mx-auto '></AiFillWindows>
                    <h1 className=' font-bold'>Window</h1>
                </div>

                
                <div className=' border border-transparent hover:border-green-500  duration-300  text-center p-7  rounded-3xl  align-middle '>
                    <BsApple size={75} className=' w-75 mx-auto '></BsApple>
                    <h1 className=' font-bold'>Mac os</h1>
                </div>
                <div className=' border border-transparent hover:border-green-500  duration-300  text-center p-7  rounded-3xl '>
                    <FcLinux size={75} className=' w-75 mx-auto '></FcLinux>
                    <h1 className=' font-bold'>Linux</h1>
                </div>
                <div className=' border border-transparent hover:border-green-500  duration-300  text-center p-7  rounded-3xl '>
                    <BsAndroid size={75} className=' w-75 mx-auto '></BsAndroid>
                    <h1 className=' font-bold'>Android</h1>
                </div>
                <div className=' border border-transparent hover:border-green-500  duration-300  text-center p-7  rounded-3xl '>
                    <FaRaspberryPi size={75} className=' w-75 mx-auto '></FaRaspberryPi>
                    <h1 className=' font-bold'>RaspberryPi</h1>
                </div>
                <div className=' border border-transparent hover:border-green-500  duration-300  text-center p-7  rounded-3xl '>
                    <AiFillChrome size={75} className=' w-75 mx-auto '></AiFillChrome>
                    <h1 className=' font-bold'>Chrome</h1>
                </div>
                
            </div>
        </div>

      </div>
    </div>
  )
}

export default Download
