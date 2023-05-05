import React from 'react'
import './style.css'

const Hero = () => {
  return (
    <div 
        className = "hero-page container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
    >
        <h1 className="hero-title">PRESS Play</h1>
        <h5 classNAme="hero-tagline">Don't just read the news, press play and immerse yourself.</h5>
    </div>
  )
}

export default Hero