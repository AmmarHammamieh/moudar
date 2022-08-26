import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';


function ContactBody() {
  return (
      <div className='flex flex-col' >
          <img src='https://www.modar.nl/img/contact-sm-img.png' className="md:hidden h-full  lg:object-cover lg:absolute" />
          <img src='https://www.modar.nl/img/bg-contct.png' className="hidden lg:block h-full w-screen lg:object-fill lg:absolute" />
          <img src='https://www.modar.nl/img/bg-contct.png' className="hidden md:block lg:hidden h-full  lg:object-cover lg:absolute" />
          <div className=' bg-black h-[48vh] w-full lg:absolute lg:top-1/3 lg:left-52 lg:w-4/6 lg:h-fit lg:bg-transparent lg:flex lg:justify-between md:justify-around'>
              <div className='ml-10 mt-20'>
                  <h1 className='lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-bold text-white mb-3'>CONTACT</h1>
                  <div className=' font-semibold text-white'>
                      <p>info@modar.nl</p>
                      <p>+31 (06) 496 917 90</p>
                  </div>
                  <div className='mt-5'>
                  <p className='font-semibold text-white'>KvK nummer: 62059149</p>
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
              <div className='hidden lg:flex lg:justify-end lg:items-end lg:align-bottom'>
                  <img src='https://www.modar.nl/img/conatct-logo.png' alt='' className=' w-3/5 h-1/2'/>
              </div>
          </div>
          
    </div>
  )
}

export default ContactBody