import React, {useState } from 'react'
import './Contact.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsTelephone } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const ContactPage = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ux5wd8h', 'template_mz42slp', form.current, 'ENu8uViP1gF2PqOmv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    const [loading, setLoading] = useState(false);

const handleSubmit = () => {
  setLoading(true);
};

    return (
        <div className="contact_container">

            <h5 className="subtitle">Get to know</h5>
            <h2 className="title">Contact</h2>

           
            
        <div className="contact_Container">

            <div className="contact__options">
                    <article className="contact__option1">
                        <MdOutlineEmail  />
                        <h4>Email</h4>
                        <h5>me@aiware.me</h5>
                        <a href="mailto:me@aiware.me" target="_blank" rel="noopener noreferrer">Email</a>
                    </article>

                    <article className="contact__option1">
                        <RiMessengerLine  />
                        <h4>Messenger</h4>
                        <h5>Talk in Messenger</h5>
                        <a href="https://m.me/piotr.macx.5" target="_blank" rel="noopener noreferrer">Messenger</a>
                    </article>

                    <article className="contact__option1">
                        <BsTelephone  />
                        <h4>Whatsapp</h4>
                        <h5>+48 794 168 298</h5>
                        <a href="https://wa.me/48794168298" target="_blank" rel="noopener noreferrer">Talk in Whatsapp</a>
                    </article>
                </div>

                <form className="formContact" ref={form} onSubmit={sendEmail}>

                    <input type="text" className="formInput"  name='name' placeholder='Your name' required />
                    <input type="email" className="formInput" name='email' placeholder='Your email' required />
                    <textarea name="what" className="formInputMess" rows="2" placeholder='Your message. What do you need?' required />
                    <textarea name="message" className="formInputMess" rows="7" placeholder='Project details - you can describe it in own words' />
                    <textarea name="content" className="formInputMess" rows="2" placeholder='Do you have own texts, images, etc.?' />
                    <textarea name="links" className="formInputMess" rows="4" placeholder='Inspirations, templates, other pages - if you have a pattern / designs that you like, paste their links here' />
                    <div className="check">
                    <input type="checkbox" className="formCheckbox" name='agree' required /><p className="checkP">I consent to the processing of personal data necessary to handle the form and answer the inquiry</p>
                    </div>
                    <button type="submit" className="btnForm" onClick={handleSubmit} >{!loading ? 'Send' : 'Thanks for message!'}</button>

                </form>

            </div>
            </div>
      
    )
}

export default ContactPage

// export default AppWrap(
//     MotionWrap(Contact, 'container'),
//     'contact',
//     "app__whitebg"
//     );