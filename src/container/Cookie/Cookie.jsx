import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cookie.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import { BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs';
import { FaFacebook, FaBehance } from 'react-icons/fa';

const Cookie = () => {
    const { t } = useTranslation();
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const cookieConsent = localStorage.getItem('cookieConsent');
        const consentTimestamp = localStorage.getItem('cookieConsentTimestamp');
        
        // Check if consent exists and is not expired (30 days)
        if (cookieConsent && consentTimestamp) {
            const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
            const isExpired = Date.now() - parseInt(consentTimestamp) > thirtyDaysInMs;
            
            if (!isExpired) {
                setShowBanner(false);
                return;
            }
        }
        
        setShowBanner(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        localStorage.setItem('cookieConsentTimestamp', Date.now().toString());
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-content">
                <p className="cookie-text">
                    {t('cookie_message')}
                </p>
                <div className="cookie-links">
                    <Link to="/privacy" className="privacy-link">
                        {t('privacy_policy')}
                    </Link>
                </div>
                <div className="cookie-buttons">
                    <button 
                        className="accept-button"
                        onClick={handleAccept}
                    >
                        {t('accept_cookies')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cookie;

