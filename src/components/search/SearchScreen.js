import React, { useMemo } from 'react';
// https://www.npmjs.com/package/query-string Libreria para instalar 
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    // const [formValues, handleInputChange] = useForm({
    // Despues de llamar al use Form hay que desestruturizarlo 
    // const [{ searchText }, handleInputChange] = useForm({ searchText: '' });
    const [{ searchText }, handleInputChange] = useForm({ searchText: q }); //el queryString se le pasa al valor incial del formulario
    // const heroesFiltered = getHeroesByName(searchText); 
    //En ves del searchTextt, el q por que es el query que cambia 
    const heroesFiltered = useMemo(() => getHeroesByName(searchText), [q]); 

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Find your hero'
                            autoComplete='off'
                            name='searchText'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search ...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    { 
                        (q==='') 
                        && 
                        <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }
                    { 
                        (q!=='' && heroesFiltered.length === 0) 
                        && 
                        <div className="alert alert-danger">
                            There is no a Heroes with {q}
                        </div>
                    }
                    {
                        heroesFiltered.map(hero =>
                            <HeroCard {...hero} key={hero.id} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
