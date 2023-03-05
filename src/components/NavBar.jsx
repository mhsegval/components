import React from 'react'

const NavBar = () => {
  return (
    <div className="bg-black flex mx-auto">
      <div className=" text-white py-5 text-3xl mx-3">Navbar</div>
      <div className="flex text-white ml-auto my-auto text-xl lg:text-2xl">
        <li className='mx-3'>Home</li>
        <li className='mx-3'>About</li>
        <li className='mx-3'>Contact</li>
      </div>
    </div>
  )
}

export default NavBar