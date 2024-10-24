import React from 'react'
import HeroImage from '../assets/images/Hero.jpg'
function Hero() {
  return (
    <div className='flex items-center justify-center'>
        <section className="section hero p-24 relative">
            <div className="hero-container rounded-3xl height flex items-center bg-dr-bg pl-16">
                <div className="hero-content w-1/2">

                <h1 className='text-7xl text-ofw-lt mb-6 '>Boost your<br /> business through <span className='text-tx-green'>online</span> marketing</h1>

                <p className='w-1/2 tracking-wide text-ofw-lt text-lg mb-6'> Hey there! i'm Jessica Parker. Digital <br />
                    business consultant focussed on online marketing and advertising.
                </p>

                <div className="buttons flex space-x-5">
                    <a href="#" className="btn-p">Let's talk</a>
                    <a href="#" className="btn-s ">See case studies
                    </a>
                </div>
                </div>
            </div>
            <img className='absolute  ' src={HeroImage} alt="" />
        </section>
    </div>
  )
}

export default Hero