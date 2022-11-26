import React from 'react';
import s from './ListItem.module.css';

const ListItem = ({ number, from, to, result }) => {
  return (
    <div className={s.container}>
        <div className={s.text}>
        {number} {from} = {result} {to}
        </div>
        <div className={s.delete}>x</div>
    </div>
  )
}

export default ListItem