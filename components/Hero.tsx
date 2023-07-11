'use client'

import Image from 'next/image'
import { CustomButton} from "@/components/index"

const Hero = () => {
    const handleClick = () =>{ 
        const nextSection = document.getElementById('discover');

        if (nextSection) {
            nextSection.scrollIntoView({behavior: 'smooth'})
        }
    }

  return (
    <section className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero_title text-start 2xl:text-[72px] sm:text-[60px] text-[50px] font-extrabold'> 
                Find, book, or rent a car - quickly and easily!
            </h1>
            <p className='hero_subtitle text-[27px] text-black-100 font-light mt-5'>
                Streamline your car rental experience with our effortless booking process.
            </p>
            <CustomButton 
                title="Explore Cars"
                btnType='button'
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleClick}
            />
        </div>
        <div className='hero_image-container xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
            <div className='hero_image relative xl:w-full w-[90%] xl:h-[full] h-[590px] z-o'>
                <Image 
                    src="/hero.png"
                    fill
                    alt='heroImage'
                    className='object-contain'
                />
                <div className='hero__image-overlay ' >

                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero