import React from 'react'
import Logo from "../assets/images/Consult-logo.png";
import CheronDown from "/src/assets/down-chevron-svgrepo-com (1).svg";

function Header() {

  return (
    <div>
        <header className='p-7 pb-4 border-b-2 border-gry-lt flex items-center justify-center '>
            <section className='flex justify-between section'>
          <div className="logo flex items-center w-fit mr-8">
            <img src={Logo} className="mx-4" alt="" />

            <h2 className='font-extrabold text-3xl text-dr-bg'>On Consult</h2>
            </div>
            <nav className='flex  items-center'>
                <ul className="flex gap-x-12">
                    <li><a href="#" className='nav-link font-bold border-b-4 border-dr-bg text-lg flex  text-dr-bg'>Home</a></li>
                    <li><a href="#" className='nav-link font-medium text-lg flex  text-dr-bg'>About</a></li>
                    <li><a href="#" className='nav-link font-medium text-lg flex  text-dr-bg'>Services</a></li>
                    <li><a href="#" className='nav-link font-medium text-lg flex  text-dr-bg'>Contact</a></li>
                    <li><a href="#" className='nav-link font-medium text-lg flex  text-dr-bg'>More <img src={CheronDown} alt="" className='ml-3' /></a></li>
                </ul>

                <div className="flex items-center space-x-6 ml-7">
                    <button className='text-lg btn-h bg-dr-bg px-5 py-2 font-bold hover:bg-transparent hover:text-dr-bg border text-ofw-lt rounded-md'>Buy templates</button>
                    <button className='text-lg bg-gry-lt text-dr-bg px-5 py-2 font-bold  rounded-md'>Cart</button>
                </div>
            </nav>
            </section>
        </header>
    </div>
  )
}

export default Header