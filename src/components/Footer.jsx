import React from 'react'
import logo from "../assets/images/logo-white.png"
import phone from "../assets/icons/phone.svg"
import mail from "../assets/icons/mail.svg"
import location from "../assets/icons/map-marker.svg"
import rightArrowoutline from "../assets/icons/right-arrow-outline.svg"

const Footer = () => {
  return (
    <div className='bg-orange w-[1512px] h-[631px] rounded-t-[40px] p-2'>
        <div className='flex justify-around mt-[68px]'>
            <div className=' text-white'>
                <img 
                    src={logo} 
                    alt="logo" 
                    className='w-[291px] h-[80.5px] mt-2 mb-3' 
                />
                <p className='text-[16px]'>
                    Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate<br />ipsum ac pretiumest laoreet porta sed.  
                </p>
                <p className=' text-[48px] mt-20 font-medium'>Ask Us Anything</p>
                <div className='flex mt-10 items-center justify-between'>
                    <div>
                        <textarea 
                            name="textfield" 
                            placeholder='Enter Your Message' >
                        </textarea>
                    </div>
                    <div className="h-14 flex justify-between bg-blue p-4 rounded-full">
                        <img src={rightArrowoutline} alt="" />
                    </div>
                </div>
            </div>

            <div className=' text-white text-[16px] flex flex-col gap-6'>
                <h1>Admissions</h1>
                <h1>Placements</h1>
                <h1>Life@Presidency college</h1>
                <h1>Contact</h1>
                <h1>About</h1>
                <h1>Blogs</h1>
                <h1>Carrers</h1>
            </div>

            <div className='text-white text-[16px] flex flex-col gap-10'>
                <div className='flex gap-4'>
                    <img src={phone} alt="phone" />
                    <p className='underline'>+91-9739222073</p>
                </div>
                <div className='flex gap-4'>
                    <img src={mail} alt ="mail" />
                    <p className='underline'>contact@presidency.edu.in</p>
                </div>
                <div className='flex gap-4'>
                    <img src={location} alt="" />
                    <p className='text-start'>33/2C and 33/2D, Vinayakanagar,<br /> Hebbal Kempapura, Bangalore – <br /> 560024, Karnataka, India</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer