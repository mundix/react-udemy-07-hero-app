import React, { useMemo } from 'react'
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroList = ({ publisher}) => {

    // Usar el memo se cambia esto por la expresion de abajo. 
    // const heroes = getHeroesByPublisher(publisher);
    // Esto es nua function (getHeroesByPublisher), el React.memo se usa en componentes  
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
            {
                heroes.map( hero => (
                    <HeroCard   key={hero.id} 
                    // Esto manda cada una de las propiedades, para la desestructuracion em el HeroCard
                        {...hero} 
                    />
                ) )
            }
        </div>
    )
}
