import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Gönderiliyor...');

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      // Backend API URL'sini .env'den alıyoruz
      const response = await axios.post('https://portfolio-backend-cas8.onrender.com/send-mail', formData);

      if (response.data.success) {
        setResult('Form başarıyla gönderildi!');
        toast.success('Mesaj başarıyla gönderildi!');
        event.target.reset();
      } else {
        console.error('Error:', response.data);
        setResult(response.data.message || 'Bir hata oluştu.');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setResult('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div id='iletisim' className='contact'>
      <div className='contact-title'>
        <h1>İletişim</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>İletişime geç</h1>
          <p>
            Şu anda yeni projeler almak için müsaitim, bu yüzden üzerinde çalışmamı
            istediğiniz herhangi bir şey hakkında bana mesaj göndermekten çekinmeyin.
            İstediğiniz zaman iletişime geçebilirsiniz.
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt="mail icon" /> <p>muhammedgultenn</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt="call icon" /> <p>+1234567890</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt="location icon" /> <p>Adana, Türkiye</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="name">Adınız</label>
          <input type="text" name='name' placeholder='Adınızı giriniz' required />
          <label htmlFor="email">E-posta Adresiniz</label>
          <input type="email" name='email' placeholder='E-posta adresinizi giriniz' required />
          <label htmlFor="message">Mesajınız</label>
          <textarea name="message" rows="8" placeholder='Mesajınızı giriniz' required></textarea>
          <button type='submit' className='contact-submit'>Gönder</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Contact;
