import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { heroeImages } from '../../helpers/heroeImages';
import { getHeroById } from '../../selectors/getHeroById';

// Movimos lso assets a la carepta src , para tener acceso 
// import batman from '../../assets/heroes/dc-batman.jpg';
// Esto es propio de webpack, con el arg true , busca en sub directorios


export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();
    // Si la ruta es undefined debo controlarlo
    // const hero = getHeroById(heroeId);
    // Optimizando ...
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
    // console.log('Hero:', hero, 'HeroId:', heroeId );
    // console.log(heroeImages(heroeId));

    // debo manejr la exepcion si no existe esto explota , 
    if (!hero) {
        return <Redirect to='/' />;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/'); //Ve a la pagina que quiera 
        }
        history.goBack();
    }

    return (
        <div className='row mt-5'>
            <div className="col-4">
                <img
                    // src={`../assets/heroes/${heroeId}.jpg`} 
                    // src={batman} // Con un import esto funcinoa
                    // src={ heroImages(`./dc-supimport { getImages } from '../../helpers/getImages';
// erman.jpg`).default }
                    src={ heroeImages(heroeId) }
                    alt={ superhero }
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
