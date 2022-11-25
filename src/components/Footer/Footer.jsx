import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.footer}>
        <div className={s.footer__text}>Terms of service</div>
        <div className={s.footer__text}>Privacy policy</div>
    </div>
  )
}

export default Footer