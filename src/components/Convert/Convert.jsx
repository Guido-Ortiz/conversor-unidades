import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';

import { SyncAlt, FavoriteBorder } from '@mui/icons-material';

import { addFavorite, getResult } from '../../store/actions/actions';
import { options } from '../../utils/options';
import s from './Convert.module.css';


const Convert = () => {

  const dispatch = useDispatch()
  const result = useSelector(state => state.result)

  const [form, setForm] = useState({
    number: 0,
    units: '',
  })

  const [from, setFrom] = useState('kms')
  const [to, setTo] = useState('miles')

  const handleUnits = (e) => {
    setForm({
      ...form,
      units: e.target.value
    })
  }

  const handleNumber = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const changeUnits = () => {
    let array = form.units.split(' ')
    setFrom(array[0])
    setTo(array[2])
  }

  useEffect(() => {
    changeUnits()
  }, [form.units])

  const data = [form.number, from, to]

  useEffect(() => {
    dispatch(getResult(data))
  }, [data])

  const handleChangeUnits = (e) => {
    let array = form.units.split(' ')
    setTo(array[0])
    setFrom(array[2])
  }

  const handleAddFavorite = (e) => {
    form.id = uuid()
    dispatch(addFavorite(form))
  }


  return (
    <div className={s.convert__container}>

      <div className={s.convert__title}>convert</div>

      <div className={s.convert__box}>

        <div className={s.convert__select__container}>
          <select className={s.convert__select} onChange={e => handleUnits(e)}>
            <option value="" disabled selected hidden>Select units</option>
            {
              options.map((p, i) => {
                return (
                  <option key={i} value={p} name={p}>{p}</option>
                )
              })
            }
          </select>
          <div className={s.convert__select__icon} onClick={(e) => handleChangeUnits(e)}>
            <SyncAlt />
          </div>
        </div>

        <div className={s.convert__input__container}>
          <input className={s.convert__input} type='number' name='number' value={form.number} onChange={e => handleNumber(e)} />
          <div className={s.convert__input__unit}>{from}</div>
        </div>
      </div>

      <div className={s.convert__result__container}>
        <div className={s.convert__result__icon} onClick={(e) => handleAddFavorite(e)}>
          <FavoriteBorder />
        </div>
        <div className={s.convert__results}>
          <div className={s.convert__result}>{result}</div>
          <div className={s.convert__result__unit}>{to}</div>
        </div>
      </div>

    </div>
  )
}

export default Convert