import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='anasayfa' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Muhammed Gülten.</span> Full Stack Developer based in Türkiye. </h1>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#iletisim'>Benimle İletişime Geç</AnchorLink></div>
        <div className="hero-resume">Özgeçmiş</div>
      </div>
    </div>
  )
}

export default Hero
