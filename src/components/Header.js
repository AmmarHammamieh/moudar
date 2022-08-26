import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsList } from 'react-icons/bs';
import { AiOutlineClose} from 'react-icons/ai';

import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
function Header({active}) {
  
  function drawer() {
    document.getElementById('header').classList.add = "hidden lg:block";
    document.getElementById('drawerBody').classList.remove("hidden");
    document.getElementById('drawerBody').classList.add("flex","fixed","h-screen","w-full","bg-transparent","top-0","left-0","lg:hidden","z-10");


  }
  function closeDrawer() {
    document.getElementById('header').style = "display:block";
    document.getElementById('drawerBody').classList.add("hidden");

  }
  useEffect(() => {
    if (active === "Home") {
      document.getElementById('home').classList.remove("text-[#CCCCCC]");
      document.getElementById('home').classList.add("text-[#847244]", "border-b-4", "border-[#847244]")
    } else if (active === "Bio") {
      document.getElementById('bio').classList.remove("text-[#CCCCCC]");
      document.getElementById('bio').classList.add("text-[#847244]", "border-b-4", "border-[#847244]")
    } else if (active === "Arabicrhythm") {
      document.getElementById('arabicrhythm').classList.remove("text-[#CCCCCC]");
      document.getElementById('arabicrhythm').classList.add("text-[#847244]", "border-b-4", "border-[#847244]")
    }else if (active === "Gallery") {
      document.getElementById('gallery').classList.remove("text-[#CCCCCC]");
      document.getElementById('gallery').classList.add("text-[#847244]", "border-b-4", "border-[#847244]")
    }else if (active === "Contact") {
      document.getElementById('contact').classList.remove("text-[#CCCCCC]");
      document.getElementById('contact').classList.add("text-[#847244]", "border-b-4", "border-[#847244]")
    }
  });

  return (
    <div>
      <div id="header" className=' headerHieght bg-[#000000] '>
          <div className='hidden lg:flex justify-evenly items-center W-1/3'>
            <div className=' flex p-2 items-center justify-center'>
              <div> <Link id="home" to="/" className='text-sm  hover:text-[#847244] text-[#CCCCCC] p-4 active:border-b-4  active:border-[#847244] active:text-[#847244] cursor-pointer'>Home</Link></div>
              <div><Link id="bio" to="/Bio" className='text-sm hover:text-[#847244]   text-[#CCCCCC] p-4 active:border-b-4 active:border-[#847244] active:text-[#847244] cursor-pointer'>Bio</Link></div>
              <div><Link id="arabicrhythm" to="/ArabicRhythm" className='text-sm hover:text-[#847244]  text-[#CCCCCC] p-4 active:border-b-4 active:border-[#847244] active:text-[#847244] cursor-pointer'>Arabic Rhythems</Link></div>
              <div><Link  to="/" className='text-sm hover:text-[#847244] text-[#CCCCCC] p-4 active:border-b-4 active:border-[#847244] active:text-[#847244] cursor-pointer' >Exercises</Link></div>
              <div><Link id="gallery" to="/Gallery" className='text-sm hover:text-[#847244]  text-[#CCCCCC] p-4 active:border-b-4 active:border-[#847244] active:text-[#847244] cursor-pointer'>Gallery</Link></div>
              <div><Link id="contact" to="/Contact" className='text-sm hover:text-[#847244]  text-[#CCCCCC] p-4 active:border-b-4 active:border-[#847244] active:text-[#847244] cursor-pointer'>Contact</Link></div>
            </div>
              <Link to="/" className='text-sm m-5 hover:text-[#847244] text-[#CCCCCC]'>Login/Sign up</Link>
      </div>
      <div className='flex h-100 w-1/3 p-2 lg:hidden'>
        <BsList className='text-white text-4xl m-2 cursor-pointer' onClick={()=>drawer()} />
      </div>
      </div>
      {/*  flex absolute h-full w-full bg-transparent top-0 left-0 */}
    <div  id="drawerBody" className=' hidden  '>
        <div id="drawer" className=' w-full bg-black h-full md:w-1/2'>
          <div className='p-4'>
            <AiOutlineClose className='text-xl text-gray-400 cursor-pointer hover:text-[#847244]' onClick={() => closeDrawer()}/>
          </div>
          <div className='flex flex-col justify-center w-full ml-20  h-4/5 text-gray-400 '>
            {/* border-b-2 border-[#847244] */}
            <div className='mb-4 cursor-pointer hover:text-[#847244] text-xl  p-2 w-1/4 border-b-2 border-[#847244]'>
              <Link to="/">Home</Link>
            </div>
            <div className='mb-4 cursor-pointer hover:text-[#847244] text-xl p-2'>
            <Link to="Bio">Bio</Link>
            </div>
            <div className='mb-4 cursor-pointer hover:text-[#847244] text-xl p-2'>
            <Link to='/ArabicRhythm'>Arabic Rhythms</Link>
            </div>
            <div className='mb-4 cursor-pointer hover:text-[#847244] text-xl p-2'>
            <Link to="/Gallery">Gallery</Link>
            </div>
            <div className='mb-4 cursor-pointer hover:text-[#847244]  text-xl p-2'>
            <Link to="/Contact">Contact</Link>
            </div>
            <div className='mb-4 cursor-pointer hover:text-[#847244] text-xl p-2'>
            <Link to="/">Login</Link>
            </div>
            <hr className="h-1 border-0 text-[#847244] bg-[#847244] w-40  " />
            <div>
            <div className='flex mt-3'>
                          <a href='https://www.instagram.com/modar.salama/' target="_blank" className=' cursor-pointer mr-2 border-2 border-gray-500 rounded-xl bg-gray-500'>
                              <AiOutlineInstagram className='m-1 text-lg text-white' />
                          </a>
                          <a href='https://www.facebook.com/modar.salama' target="_blank" className='hover:bg-blue-700 hover:border-blue-700 cursor-pointer mr-2 text-center border-2 border-gray-500 rounded-xl bg-gray-500'>
                          <FaFacebookSquare className='m-1 text-xl text-white' />
                          </a>
                          <a href='https://twitter.com/modarsalama' target="_blank" className='hover:bg-cyan-400 hover:border-cyan-400 cursor-pointer mr-2 border-2 border-gray-500 rounded-xl bg-gray-500'>

                              <AiOutlineTwitter className='m-1 text-xl text-white' />
                              </a>
                          <a href='https://www.youtube.com/channel/UCq5b6BlR9OuB5B-ul4aTTKw' target="_blank" className='hover:bg-red-600 hover:border-red-600 cursor-pointer mr-2 border-2 border-gray-500 rounded-xl bg-gray-500'>
                              
                              <AiFillYoutube className='m-1 text-xl text-white' />
                              </a>
                      </div>
            </div>
          </div>
        </div>
        <div className='hidden sm:block h-full w-full bg-black opacity-40'/>
    </div>
    </div>
  )
}

export default Header