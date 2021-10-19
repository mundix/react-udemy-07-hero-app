import React from 'react';
// https://www.npmjs.com/package/query-string Libreria para instalar 
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const heroesFiltered = heroes;
    // const [formValues, handleInputChange] = useForm({
    // Despues de llamar al use Form hay que desestruturizarlo 
    // const [{ searchText }, handleInputChange] = useForm({ searchText: '' });
    const [{ searchText }, handleInputChange] = useForm({ searchText: q }); //el queryString se le pasa al valor incial del formulario

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
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
                            autoCapitalize='off'
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
                        heroesFiltered.map(hero =>
                            <HeroCard {...hero} key={hero.id} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
