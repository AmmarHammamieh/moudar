import React from 'react'
import Header from './Header'

function BioBody() {
  return (
      <div>

         
          <div className='w-[100%] h-[100%] '>
              <div className='w-screen h-screen bg-cyan-300 flex flex-col '>
              <img src="https://www.modar.nl/img/bg-sm-bio.png" className='w-screen h-screen  object-cover bg-center' />
              </div>
              <div className=' lg:w-3/6 lg:h-fit lg:absolute lg:left-64 lg:top-1/4 lg:opacity-90 relative bg-[#1F1F1F] left-0 top-0 w-screen h-fit'>
                  <h1 className='text-4xl font-semibold text-white p-4 ml-7' >BIOGRAPHY</h1>
                  <div className='m-2 bg-[#1F1F1F] px-8 py-8'>
                  <hr className="h-0.5 border-0 text-[#847244] bg-[#847244] w-40 ml-2 " ></hr>
                  <p className='text-md font-semibold mt-5 text-[#CCCCCC] p-2 '>Modar Salama is a drummer and percussionist, born in Damascus and based in Amsterdam. He studied classical and Oriental percussion at the Higher Institute of Music in Damascus and started to build his career as a drummer in Jazz and Latin music, while at the same time keeping in touch with his classical and Arabic roots. He played with the Syrian National Orchestra, the Syrian Big Band and many other international projects in China, Jordan, Malaysia, Tunisia, Austria, Germany, Lebanon, Denmark and Egypt. Modar worked in the field of Music Theatre, performing a huge number of plays in Syria and the Arabic world. He is now working on a number of projects as an Arabic percussion player and drummer and he is creating his own style influenced by the soul of the Orient.</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default BioBody