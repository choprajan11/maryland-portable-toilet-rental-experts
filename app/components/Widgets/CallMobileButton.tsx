'use client'
import React, { useState } from 'react'
import ContactInfo from "@/components/Content/ContactInfo.json";
import { BiPhoneCall } from 'react-icons/bi';

const CallMobileButton = () => {
    const [active, setActive] = useState(false);


    const handleClick = () => {
        if (active) {
            setActive(true);
        } else {
            setActive(false);
        }
    }
    return (
        <div>
            <div className=" flex -bottom-2 z-10 fixed h-20  justify-around visible md:hidden w-screen items-center bg-main">
                <div className="text-center p-2 w-fit">
                    <a id='cta-id' href={`tel:${ContactInfo.tel}`}><div className="text-sm sm:text-xl px-4 text-white font-bold text-center">Call Now</div>
                        <div className="text-2xl w-full text-white font-bold  "> {ContactInfo.No}</div></a>

                </div>
            </div>
            <div className='w-full fixed z-10 md:visible collapse '>
                <a id='cta-id' href={`tel:${ContactInfo.tel}`}>
                    <div onClick={handleClick} className=" hover:bg-minor bg-main hover:scale-125 group ease-in duration-200 h-10 w-10 md:h-16 md:w-16 flex justify-center items-center  bottom-10 right-4 fixed rounded-full">
                        <div className=" text-white/80 ">
                            {!active ? <BiPhoneCall className=" md:text-3xl group-hover:rotate-45   text-xl  ease-in duration-300" /> : <BiPhoneCall className="ease-in duration-300" />}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CallMobileButton
