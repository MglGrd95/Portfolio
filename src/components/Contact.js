import React from 'react'
import emailjs from 'emailjs-com'
import './styles/Contact.css'
import Footer from './Footer'

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_hjescm7', 'template_au0b6ht', e.target, 'FTMF7r_DF1dOFnOae')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    })
    e.target.reset('Thank you for the email')
  }
  return (
    <div id='Contact'>
    <h1 className='title'>Contact</h1>
      <p className='ch'>You can shoot me an email here!</p>
    <div className='form'>
      <form onSubmit={sendEmail}>
        <label>Full Name</label><input type='text' name='user_name'/>
        <label>Email</label><input type='text' name='user_email'/>
        <label>Message</label><textarea name='message'/>
        <input type='submit' value='send'/>
      </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact