import React, { useState } from "react";
import "./Faq.css";
import FaqCore from "./FaqCore";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  const [faqs, setFaqs] = useState([
    {
      question: <p>{t('faq1q')}</p>,
      answer:
        <p>{t('faq1a')}</p>,
      open: false
    },
    {
      question: <p>{t('faq2q')}</p>,
      answer: <p>{t('faq1a')}</p>,
      open: false
    },
    {
      question:
      <p>{t('faq3q')}</p>,
      answer: <p>{t('faq1a')}</p>,
      open: false
    },
    {
      question:
      <p>{t('faq4q')}</p>,
      answer: <p>{t('faq1a')}</p>,
      open: false
    },
    {
      question:
      <p>{t('faq5q')}</p>,
      answer: <p>{t('faq1a')}</p>,
      open: false
    },
    {
      question:
      <p>{t('faq6q')}</p>,
      answer: <p>{t('faq1a')}</p>,
      open: false
    },
    {
      question:
      <p>{t('faq7q')}</p>,
      answer: <p>{t('faq1a')}</p>,
      open: false
    },
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="faq_container">
          <h2 className="faq-h2 head-text">{t('faq1title_1')} <span>{t('faq1title_2')} </span> {t('faq1title_3')}</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FaqCore faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}