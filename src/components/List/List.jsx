import React from 'react';
import { useSelector } from 'react-redux';

import ListItem from '../ListItem/ListItem';
import s from './List.module.css';

const List = () => {

    const history = useSelector(state => state.history)

    return (
        <div className={s.list__container}>
            <div className={s.list__title}>saved</div>
            {
                history.length === 0
                    ? <p>No favorites yet</p>
                    : (history.map((e, i) => {
                        return (
                            <div key={i}>
                                <ListItem number={e.number} from={e.units.split(' ')[0]} to={e.units.split(' ')[2]} index={e.id} />
                            </div>
                        )
                    }))
            }
        </div>
    )
}

export default List