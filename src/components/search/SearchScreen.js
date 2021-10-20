import React, { useMemo } from 'react';
// https://www.npmjs.com/package/query-string Libreria para instalar 
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    // Library query string package 
    const location = useLocation(); //useLocation Hook from react router 
    const { q = '' } = queryString.parse(location.search);

    // const [formValues, handleInputChange] = useForm({
    // Despues de llamar al use Form hay que desestruturizarlo 
    // const [{ searchText }, handleInputChange] = useForm({ searchText: '' });
    //el queryString se le pasa al valor incial del formulario
    const [ formValue, handleInputChange] = useForm({ 
        searchText: q 
    }); 
    const  {searchText} = formValue;
    //Cada ves que escribo algo dispara la busqueda , cada ves que cambio el states, devuelv todo eso
    // const heroesFiltered = getHeroesByName(searchText); 
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        //le grega a la url el query string 
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
