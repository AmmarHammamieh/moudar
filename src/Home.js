import React from 'react'
import Header from './components/Header';
import HomeBody from './components/HomeBody';


function Home() {
  return (
    <div >
      <Header active="Home"/>
      <HomeBody/>
    </div>
  )
}

export default Home