import React from 'react'
import {BiSolidHomeHeart} from "react-icons/bi"
import {MdOutlineMobileFriendly} from "react-icons/md"
import {BiCustomize} from "react-icons/bi"

const Solution = () => {
  return (
    <div className=' my-40'>
      <div className=' container mx-auto'>
            <div className=' '>
                <h1 className=' font-bold text-teal-700 text-center text-4xl'> Vanilla Fit Your Need</h1>


                <div className=' flex flex-col md:flex-row mt-20 gap-12'>


                    <div className=' text-center max-w-sm mx-auto'>
                        <div className=' flex justify-center'>
                        <BiSolidHomeHeart size={75}  className=' text-teal-600'> </BiSolidHomeHeart>
                        </div>
                        <h1 className=' font-bold text-gray-800 text-2xl'>
                            Run in Cloud or Premisses
                        </h1>
                        <p className=' my-4  text-slate-500'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta adipisci nesciunt libero, impedit iste facilis, voluptatibus quae soribus minus explicabo harum.
                        </p>
                        <a href="" className='font-semibold  font-serif text-teal-800 underline'>Learn More</a>
                    </div>

                    <div className=' text-center max-w-sm mx-auto'>
                        <div className=' flex justify-center'>
                        <MdOutlineMobileFriendly size={75} className=' text-teal-600'> </MdOutlineMobileFriendly>
                        </div>
                        <h1 className=' font-bold text-gray-800 text-2xl'>
                            Full mobile Support
                        </h1>
                        <p className=' my-4 text-slate-500'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta adipisci nesciunt libero, impedit iste facilis, voluptatibus quae soribus minus explicabo harum.
                        </p>
                        <a href="" className='font-semibold  font-serif text-teal-800  underline'>Learn More</a>
                    </div>

                    <div className=' text-center max-w-sm mx-auto'>
                        <div className=' flex justify-center'>
                        <BiCustomize size={75}  className=' text-teal-600'> </BiCustomize>
                        </div>
                        <h1 className=' font-bold text-gray-800 text-2xl'>
                            flexibility and Customization
                        </h1>
                        <p className=' my-4  text-slate-500'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta adipisci nesciunt libero, impedit iste facilis, voluptatibus quae soribus minus explicabo harum.
                        </p>
                        <a href="" className='font-semibold  underline font-serif text-teal-800  '>Learn More</a>
                    </div>


                </div>
            </div>
      </div>
    </div>
  )
}

export default Solution
