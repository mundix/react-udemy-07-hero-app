import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const { heroeId } = useParams();
    // console.log(heroeId);
    // Si la ruta es undefined debo controlarlo
    // const hero = getHeroById(heroeId);
    // Optimizando ...
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    // debo manejr la exepcion si no existe esto explota , 
    if(!hero) {
        return <Redirect to='/'/>;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleReturn = () => {
        if(history.length <= 2) {
            history.push('/'); //Ve a la pagina que quiera 
        }
        history.goBack();
    }

    return (
        <div className='row mt-5'>
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${heroeId}.jpg`} 
                    alt={superhero} 
                    className="img-thumbnail animate__animated animate__flip" />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
            
        </div>
    )
}
