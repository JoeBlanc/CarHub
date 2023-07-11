'use client'

import Image from "next/image"
import {CustomButtonProps} from "@/types"

const CustomButton = ({title, containerStyles, btnType, handleClick} : CustomButtonProps ) => {
  return (
    <button
        disabled= {false}
        type = { btnType || "button" }
        className={`${containerStyles} 
        flex flex-row relative justify-center items-center py-3 px-6 outline-none`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton