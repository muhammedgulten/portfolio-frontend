import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return (
        <div id='hakkimda' className='about'>
            <div className='about-title'>
                <h1>Hakkımda</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='about-sections'>
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className='about-para'>
                        <p>Merhaba! Ben bir Full Stack Yazılım Geliştiricisi olarak web teknolojilerine olan tutkumla projeler geliştiren bir yazılım geliştiricisiyim. Frontend'de HTML, CSS, JavaScript ve React kullanarak modern ve kullanıcı dostu arayüzler tasarlarken, Backend'de Node.js, Express.js ve Spring Boot ile güçlü ve ölçeklenebilir sistemler kuruyorum.</p>
                        <p>Veritabanı tarafında MySQL, MongoDB ve PostgreSQL gibi teknolojilerle çalışarak verilerin güvenilir ve etkili bir şekilde yönetilmesini sağlıyorum. Full stack projelerde edindiğim tecrübelerimle, fikirleri hayata geçirerek iş süreçlerini dijitalleştirmeyi ve kullanıcı deneyimini iyileştirmeyi hedefliyorum.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p> <hr style={{ width: "80%" }} /></div>
                        <div className='about-skill'><p>JavaScript</p> <hr style={{ width: "70%" }} /></div>
                        <div className='about-skill'><p>React JS</p> <hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>NodeJS</p> <hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
