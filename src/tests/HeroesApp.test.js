import React from 'react';
import { Enzyme, shallow } from 'enzyme';
import { HeroesApp } from '../HeroesApp';


describe('Pruebas en <HeroesApp/>', () => {
    test('Muestra correctamente <HeroesApp/>', () => {
        const wrapp = shallow(<HeroesApp/>);
        expect(wrapp).toMatchSnapshot();
    });
});
