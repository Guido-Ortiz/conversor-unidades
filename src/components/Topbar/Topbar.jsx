import React from 'react';
import s from './Topbar.module.css';

const Topbar = () => {
  return (
    <div className={s.topbar}>
        {/* <span className={s.topbar__logo}>ho</span> */}
        <div className={s.topbar__title}>unit converter</div>
    </div>
  )
}

export default Topbar