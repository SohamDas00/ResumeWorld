import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();
    const homePage=()=>{
        navigate("/")
    }
    const user={name:"Soham Das"}
  return (
    <>
        <div className='flex justify-between px-24 py-5'>
            <img src="/Logo.svg" alt="logo" />
            <div className='flex justify-center items-center gap-5'>
                <p>Hi, {user.name}</p>
                <button onClick={homePage} className='hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900'>
                    Logout
                </button>
            </div>
        </div>
        <hr className='border-none h-1 drop-shadow-md bg-gray-200'/>
    </>
  )
}

export default Navbar