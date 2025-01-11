import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const [menu,setMenu] = useState("anasayfa");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  
  return (
    <div className='navbar'>
     <img className='logo' src={logo} alt="" />
     <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' offset={50} href='#anasayfa'><p onClick={()=>setMenu("anasayfa")}>Anasayfa</p></AnchorLink>{menu==="anasayfa"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#hakkimda'><p onClick={()=>setMenu("hakkimda")}>Hakkımda</p></AnchorLink>{menu==="hakkimda"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#hizmetler'><p onClick={()=>setMenu("hizmetler")}>Hizmetler</p></AnchorLink>{menu==="hizmetler"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#portfolyo'><p onClick={()=>setMenu("portfolyo")}>Portfolyo</p></AnchorLink>{menu==="portfolyo"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#iletisim'><p onClick={()=>setMenu("iletisim")}>İletişim</p></AnchorLink>{menu==="iletisim"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#iletisim'>Benimle İletişime Geç</AnchorLink></div>
    </div>
  )
}

export default Navbar
