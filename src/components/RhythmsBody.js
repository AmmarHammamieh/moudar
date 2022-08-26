import React, { useState } from 'react'
import Logo from "../images/Logo.svg";
import Desc from "../images/Desc.svg";

// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Worker } from '@react-pdf-viewer/core';

function RhythmsBody() {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  return (
    <div className="flex flex-col bg-black h-full w-[100%]  md:bg-[url('https://www.modar.nl/img/bg-arabic.png')]  bg-[url('https://www.modar.nl/img/bg-md-arabic.png')] bg-no-repeat object-contain">
      <div className='flex flex-col items-center'>
      <img className='' src={Logo} width="250" height="250" />
      <img className="m-[-20px]" src={Desc} width="150" height="150"  />
      </div>
      <div className='w-full h-screen flex justify-center mt-10 '>
        <div className='w-full px-10  lg:w-4/6 h-3/4 '>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          <Viewer className="object-fill " fileUrl={require("../a.pdf")}
            plugins={[defaultLayoutPluginInstance]} />
          </Worker>
          </div>
      </div>
    </div>
  )
}

export default RhythmsBody