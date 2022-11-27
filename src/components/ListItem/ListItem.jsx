import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getResult } from '../../store/actions/actions';
import s from './ListItem.module.css';

const ListItem = ({ number, from, to }) => {
  const dispatch = useDispatch()
  const data = [number, from, to]
  let aux

  if (from === 'kms') {
    aux = (number * 0.621371).toFixed(2)
  }
  if (from === 'miles') {
    aux = (number * 1.60934).toFixed(2)
  }
  if (from === 'mts') {
    aux = (number * 3.28084).toFixed(2)
  }
  if (from === 'feets') {
    aux = (number * 0.3048).toFixed(2)
  }
  if (from === 'cms') {
    aux = (number * 0.393701).toFixed(2)
  }
  if (from === 'inches') {
    aux = (number * 2.54).toFixed(2)
  }

  // useEffect(() => {
  //   dispatch(getResult(data))
  // }, [data])

  return (
    <div className={s.container}>
      <div className={s.text}>
        {number} {from} = {aux} {to}
      </div>
      <div className={s.delete}>x</div>
    </div>
  )
}

export default ListItem