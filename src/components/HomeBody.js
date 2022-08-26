import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Logo from "../images/Logo.svg";
import Desc from "../images/Desc.svg";
import Back1 from "../images/Back1.svg";
import Back2 from "../images/Back2.svg";

function HomeBody() {
  let i = 1;
  const [email, setEmail] = useState("");
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function buttonChange() {
    console.log(i);
    let button = document.getElementById('text');
    setEmail(button.value);
    
    switch (i) {
      case 0: button.placeholder = "Subscribe for Updated";
      button.style.color = "white";
      button.classList.remove("text-white");
      button.classList.remove("bg-black");
      button.classList.add("");
      button.classList.add("text-black");
        i++;
      break;
      case 1: button.placeholder = "Enter Email Address";
        document.getElementById("text").style.color = "white";
        button.classList.remove("text-black");
        button.classList.remove("bg-[#333333]");
        button.classList.add("transition-all", "translate-y-0", "ease-out", "transform", "duration-400");
        button.classList.add("bg-black");
        button.classList.add("text-white");
        i++;
        break;
      case 2: button.placeholder = button.value;
      button.style.color = "white";
      button.classList.remove("text-black");
      button.classList.remove("bg-[#333333]");
      button.classList.add("bg-black");
        button.classList.add("text-white");
        if (button.value) {
          button.value = "Thx for subscribing";
          button.style.color = "white";
          button.classList.remove("bg-black");
          button.classList.remove("text-white");
          button.classList.add("bg-[#333333]");
          button.classList.add("text-gray-500");
        }
        
        break;
      case 3: button.value = "Thx for subscribing";
      document.getElementById("text").style.color = "white";
      document.getElementById("buttonDiv").classList.remove("text-black");
      document.getElementById("buttonDiv").classList.remove("bg-[#333333]");
      document.getElementById("buttonDiv").classList.add("bg-black");
      document.getElementById("buttonDiv").classList.add("text-white");
        i = 0;
        break;
      default: break;
    }

    
  }

  return (
    <div className="flex flex-col bg-black   h-screen bg-[url('https://www.modar.nl/img/h-sm-bg.png')]  md:bg-[url('https://www.modar.nl/img/h-md-bg.png')] md:bg-contain lg:bg-[url('https://www.modar.nl/img/h-bg.png')] bg-cover bg-no-repeat fixed w-full">
      <div className='flex flex-col items-center'>
      <img className='' src={Logo} width="250" height="250" />
      <img className='m-[-20px]' src={Desc} width="150" height="150" />
      </div>
      
      <div className='flex justify-center'>
      <iframe src="https://www.youtube.com/embed/_bCaMGSWPzQ" width="800" height="400" className='mt-5 md:w-900 md:h-400'></iframe>
      </div>
      <div className='w-1/2 flex justify-center mt-2 '>
        
        <input type="email" placeholder='Supscribe For update ' className=' bg-[#333333] p-2' id="text" ></input>
          <span className=' text-2xl text-gray-500 flex items-center bg-[#333333] ' onClick={() => buttonChange()}> <BsArrowRight className='mr-2' /></span> 
          </div>  

          </div> 
   
      
    
  )
}

export default HomeBody;

