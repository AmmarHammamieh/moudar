import React from 'react'

function GalleryBody() {
  return (
      <div className="flex flex-col items-center justify-center ">
          <div className='w-full h-fit '>
              <img src="https://www.modar.nl/img/gallery-sm.png" alt="" className="w-full h-fit" />
          </div>
          <div className="w-full bg-[url('https://www.modar.nl/img/gallery-sm-2.png')] bg-cover  bg-no-repeat lg:bg-[url('https://www.modar.nl/img/gallery-2.png')] ">
          <div className='grid grid-cols-3 h-fit gap-5 bg-transparent w-3/4 m-auto p-10 pr-20'>
              <div className='w-100  '>
                  <img src='https://www.modar.nl/img/6.png' alt='' />
              </div>
              <div className='w-100 col-span-2 '>
                  <img src='https://www.modar.nl/img/5.png' alt='' className='w-full h-full'/> 
              </div>
              {/* https://www.modar.nl/img/7.png */}
              <div className='w-full   row-start-2 row-stop-3'>
                  <img src='https://www.modar.nl/img/7.png' alt='' />
              </div>
              <div className='w-100  '>
              <div className='grid grid-cols-1 gap-2 h-full'>
                      <div className=''>
                          <img src='https://www.modar.nl/img/4.png' alt='' className='h-full'/>
                          </div>
                          <div>
                          <img src='https://www.modar.nl/img/2.png' alt='' className='h-full'/>
                          </div>
                  </div>
              </div>
              <div className='w-100 '>
                  <div className='grid grid-cols-1 gap-2 h-full'>
                      <div className=''>
                          <img src='https://www.modar.nl/img/3.png' alt=''  className='h-full'/>
                          </div>
                          <div>
                          <img src='https://www.modar.nl/img/1.png' alt=''  className='h-full'/>
                          </div>
                  </div>
              </div>
 
          </div>
          </div>
       
    </div>
  )
}

export default GalleryBody