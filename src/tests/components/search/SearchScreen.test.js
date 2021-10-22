import React from 'react';
import {mount} from 'enzyme';
import { Route, MemoryRouter, Router } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas en <SearchScreen/>', () => {
    

    test('Debe mostrase correctamente con valores por defecto ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path='/search' component={SearchScreen}/>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero');
    });

    // Como mandar al query de la url 
        // voy a simular que esrtoy en la ruta y que la caja de texto tenga ese valor 
    test('Debe de mostrar a batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path='/search' component={SearchScreen}/>
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });
        
});
