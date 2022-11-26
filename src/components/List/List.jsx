import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '../ListItem/ListItem';
import s from './List.module.css';

const List = () => {

    const history = useSelector(state => state.history)
    const dispatch = useDispatch()

    console.log(history)

    
    // const history = [{
    //     num: 100,
    //     from: 'miles',
    //     to: 'km',
    //     result: 0
    // },
    // {
    //     num: 100,
    //     from: 'miles',
    //     to: 'km',
    //     result: 0
    // }]

    return (
        <div className={s.list__container}>
            <div className={s.list__title}>saved</div>
            {
                history .length === 0 
                    ? <p>No favorites yet</p>
                    : (history.map((e, i) => {
                    return(
                        <div key={i}>
                            <ListItem number={2} from={'millas'} to={'km'} result={23} />
                        </div>
                    )
                }))
            }
        </div>
    )
}

export default List