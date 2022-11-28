import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../../store/actions/actions';
import { result } from '../../utils/results';
import s from './ListItem.module.css';

const ListItem = ({ number, from, to, index }) => {

  const dispatch = useDispatch()
  
  const aux = result(number, from, to)

  const handleDelete = () => {
    dispatch(deleteFavorite(index))
  }

  return (
    <div className={s.container}>
      <div className={s.text}>
        {number} {from} = {aux} {to}
      </div>
      <div className={s.delete} onClick={() => handleDelete(index)}>x</div>
    </div>
  )
}

export default ListItem