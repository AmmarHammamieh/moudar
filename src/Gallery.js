import React from 'react'
import GalleryBody from './components/GalleryBody'
import Header from './components/Header'

function Gallery() {
  return (
      <div>
          <Header active="Gallery"/>
          <GalleryBody/>
    </div>
  )
}

export default Gallery