import React from 'react';
import s from './Topbar.module.css';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const Topbar = () => {
  return (
    <div className={s.topbar}>
        <span className={s.topbar__logo}>
          <SyncAltIcon />
        </span>
        <div className={s.topbar__title}>unit converter</div>
    </div>
  )
}

export default Topbar