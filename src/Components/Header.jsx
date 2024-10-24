import React from 'react'
import Logo from "../assets/images/Consult-logo.png"
function Header() {
  return (
    <div>
        <header className='p-7'>
          <div className="logo flex items-center w-fit mx-8">
            <img src={Logo} className="mx-4" alt="" />

            <h2 className='font-extrabold text-3xl text-dr-bg'>On Consult</h2>
            </div>
            <nav>
                <ul className="flex gap-x-6">
                    <li><a href="#" className='font-medium text-sm text-dr-bg'>Home</a></li>
                    <li><a href="#" className='font-medium text-sm text-dr-bg'>About</a></li>
                    <li><a href="#" className='font-medium text-sm text-dr-bg'>Services</a></li>
                    <li><a href="#" className='font-medium text-sm text-dr-bg'>Contact</a></li>
                    <li><a href="#" className='font-medium text-sm text-dr-bg'>More</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header