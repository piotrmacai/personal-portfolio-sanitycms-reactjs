import React from 'react'
import './Footer.scss'
import { FaFacebook, FaBehance } from 'react-icons/fa';
import { BsLinkedin, BsTwitter, BsTools, BsGithub } from 'react-icons/bs';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
    return (
        <footer>

            <a href="/" className="footer__logo">MACAI.STUDIO</a>
 
            <ul className="permalinks">
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Portfolio</a></li>
                <li><a href="/contact">{t('footermenu5')}</a></li>
                <li><a href="https://ainsider.tools/" target="_blank" rel="noopener noreferrer">Ai Tools</a> </li>
                <li><a href="https://ainsider.beehiiv.com/" target="_blank" rel="noreferrer">Ai Newsletter</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://twitter.com/piotrmacai" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
                <a href="https://www.linkedin.com/in/piotrmacai/" target="_blank" rel="noopener noreferrer">< BsLinkedin /></a>
                <a href="https://github.com/piotrmacai" target="_blank" rel="noopener noreferrer">< BsGithub /></a>
                <a href="https://www.behance.net/macaistudio/" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                <a href="https://ainsider.tools/" target="_blank" rel="noreferrer"><BsTools /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; @macaistudio 2024. All rights reserved.</small>
            </div>

        </footer >
    )
}

export default Footer
