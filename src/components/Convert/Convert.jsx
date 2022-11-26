import { SyncAlt, FavoriteBorder } from '@mui/icons-material';
import React from 'react';
import s from './Convert.module.css';

const Convert = () => {
  return (
    <div className={s.convert__container}>

        <div className={s.convert__title}>convert</div>

        <div className={s.convert__select__container}>
          <select className={s.convert__select}>
            <option className={s.convert__select__option}>km to miles</option>
          </select>
          <div className={s.convert__select__icon}>
            <SyncAlt />
          </div>
        </div>

        <div className={s.convert__input__container}>
          <input className={s.convert__input} value={32} />
          <div className={s.convert__input__unit}>km</div>
        </div>

        <div className={s.convert__result__container}>
          <div className={s.convert__result__icon}>
            <FavoriteBorder />
          </div>
          <div className={s.convert__results}>
            <div className={s.convert__result}>62.12</div>
            <div className={s.convert__result__unit}>miles</div>
          </div>
        </div>
    </div>
  )
}

export default Convert