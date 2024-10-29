import React, { useState, useRef } from 'react';
import './Pricing.scss';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsCalendar4Week, BsFillTelephoneFill } from 'react-icons/bs';
import { useTranslation } from "react-i18next";

const Pricing = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const handleSubmit = () => {
        setLoading(true);
    };

    return (
        <div className="pricing_container" id="pricing">
            <h5 className="subtitle">{t('pricing_header')}</h5>
            <h2 className="title">{t('pricing_desc')}</h2>

            <div className="pricing_contact_container">
                <div className="pricing_contact__options">
                    <article className="pricing_contact__option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>me@piotrmacai.com</h5>
                        <a href="mailto:me@piotrmacai.com" target="_blank" rel="noopener noreferrer">Email</a>
                    </article>

                    <article className="pricing_contact__option">
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>{t('pricing_mess')}</h5>
                        <a href="https://www.facebook.com/piotrmacai/" target="_blank" rel="noopener noreferrer">Messenger</a>
                    </article>

                    <article className="pricing_contact__option">
                    <BsFillTelephoneFill />
                        <h4>Phone/Whatsapp</h4>
                        <h5>{t('pricing_phone')}</h5>
                        <a href="#" target="_blank" rel="noopener noreferrer">+48 576 287 032</a>
                    </article>

                    <article className="pricing_contact__option">
                        <BsCalendar4Week />
                        <h4>{t('pricing_Calendly')}</h4>
                        <h5>Book free consultation</h5>
                        <a href="https://calendly.com/macaipiotr/30min" target="_blank" rel="noopener noreferrer">Calendly</a>
                    </article>
                </div>

                <form
                    action="https://formspree.io/f/xovqvrlg"
                    method="POST"
                    className="formContact"
                    ref={form}
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                        <input
                            type="text"
                            name="name"
                            placeholder={t('pricing_formName')}
                            required
                            className="formInput"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t('pricing_formEmail')}
                            required
                            className="formInput"
                        />
                    </div>

                    {/* <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
                        <input
                            type="text"
                            name="Purpose"
                            placeholder={t('pricing_formMessage')}
                            required
                            className="formInput"
                        />
                    </div>

                    <div className="flex mb-11.5">
                        <textarea
                            name="BusinessType"
                            rows={4}
                            placeholder={t('pricing_formDetails')}
                            className="formInputMess"
                        ></textarea>
                    </div>

                    <div className="flex mb-11.5">
                        <textarea
                            name="Design"
                            rows={4}
                            placeholder={t('pricing_formContent')}
                            className="formInputMess"
                        ></textarea>
                    </div> */}

                    <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
                        <input
                            type="text"
                            name="business"
                            placeholder={t('pricing_formMessage')}
                            required
                            className="formInput"
                        />
                    </div>

                    <div className="flex mb-11.5">
                        <textarea
                            name="message"
                            rows={4}
                            placeholder={t('pricing_formLinks')}
                            className="formInputMess"
                        ></textarea>
                    </div>

                    <div className="check">
                        <input
                            id="fid_preview_checkboxes_option_513B5186-4757-4EB3-947C-549ABBD4E867"
                            name="checkbox"
                            type="checkbox"
                            required
                            className="formCheckbox"
                        />
                        <p className="checkP">
                            {t('contact.consent')}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="btnPricingForm"
                    >
                        {loading ? 'Thanks for message!' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Pricing;




// import React, {useState, useRef } from 'react'
// import './Pricing.scss'
// import { MdOutlineEmail } from 'react-icons/md'
// import { RiMessengerLine } from 'react-icons/ri'
// import { BsTelephone } from 'react-icons/bs'
// import {BsCalendar4Week} from 'react-icons/bs'
// import emailjs from '@emailjs/browser';
// import { useTranslation} from "react-i18next";

// const Pricing = () => {
//     const { t } = useTranslation();
//     const [loading, setLoading] = useState(false);
//     const form = useRef();
//     const handleSubmit = () => {
//     setLoading(true);
//     };

//         const sendEmail = (e) => {
//                  e.preventDefault();
//                 emailjs.sendForm('service_oi705dd', 'template_wcunqjf', form.current, 'Ef-bY_WokC6CtJ6R5')
//                 .then((result) => {
//                     console.log(result.text);
//                 }, (error) => {
//                     console.log(error.text);
//                 });
//                 e.target.reset();
//         }
    

//     return (
//         <div className="pricing_container" id="pricing"> 

//              <h5 className="subtitle">{t('pricing_header')}</h5>
//             <h2 className="title">{t('pricing_desc')}</h2>

//         <div className="pricing_contact_container">
//                     <div className="pricing_contact__options">
//                             <article className="pricing_contact__option">
//                                 <MdOutlineEmail  />
//                                 <h4>Email</h4>
//                                 <h5>piotr@macai.studio</h5>
//                                 <a href="mailto:piotr@macai.studio" target="_blank" rel="noopener noreferrer">Email</a>
//                             </article>

//                             <article className="pricing_contact__option">
//                                 <RiMessengerLine  />
//                                 <h4>Messenger</h4>
//                                 <h5>{t('pricing_mess')}</h5>
//                                 <a href="https://m.me/piotr.macx.5" target="_blank" rel="noopener noreferrer">Messenger</a>
//                             </article>

                            {/* <article className="pricing_contact__option">
                                <BsTelephone  />
                                <h4>{t('pricingPhone')}</h4>
                                <h5>+48 795 715 052</h5>
                                <a href="https://wa.me/48795715052" target="_blank" rel="noopener noreferrer"> Whatsapp</a>
                            </article> */}

                            {/* <article className="pricing_contact__option">
                                <BsCalendar4Week />
                                <h4>{t('pricing_Calendly')}</h4>
                                <h5>Book free consultation</h5>
                                <a href="https://calendly.com/macaipiotr/30min" target="_blank" rel="noopener noreferrer">Calendly</a>
                            </article>
                    </div>        */}

                    {/* <h5 className="subtitleForm">{t('pricing_formHeader')}</h5> */}
                    {/* <form className="formContact" ref={form} onSubmit={sendEmail} >
                        <input type="text" className="formInput"  name='name' placeholder={t('pricing_formName')} required />
                        <input type="email" className="formInput" name='email' placeholder={t('pricing_formEmail')} required />
                        <textarea name="what" className="formInputMess" rows="2" placeholder={t('pricing_formMessage')} required />
                        <textarea name="message" className="formInputMess" rows="7" placeholder={t('pricing_formDetails')} />
                        <textarea name="content" className="formInputMess" rows="2" placeholder={t('pricing_formContent')} />
                        <textarea name="links" className="formInputMess" rows="4" placeholder={t('pricing_formLinks')} />
                        <div className="check">
                        <input type="checkbox" className="formCheckbox" name='agree' required /><p className="checkP">{t('pricing_formRodo')}</p>
                        </div>
                        <button type="submit" value="Send" className="btnPricingForm" onClick={handleSubmit} >{!loading ? 'Send' : 'Thanks for message!'}</button>
                    </form>
            </div>
        </div>
      
    )
}

export default Pricing */}



