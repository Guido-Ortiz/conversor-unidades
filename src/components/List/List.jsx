import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '../ListItem/ListItem';
import s from './List.module.css';

const List = () => {

    const history = useSelector(state => state.history)
    const dispatch = useDispatch()
    const result = useSelector(state => state.result)

    const from = history

    console.log(history)

    // useEffect(() => {
        
    // })

    return (
        <div className={s.list__container}>
            <div className={s.list__title}>saved</div>
            {
                history .length === 0 
                    ? <p>No favorites yet</p>
                    : (history.map((e, i) => {
                    return(
                        <div key={i}>
                            <ListItem number={e.number} from={e.units.split(' ')[0]} to={e.units.split(' ')[2]} />
                        </div>
                    )
                }))
            }
        </div>
    )
}

export default List