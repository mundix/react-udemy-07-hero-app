import React from 'react';
import { shallow, mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <PrivateRoute/>', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    // Voy a simular ocn jest el storage
    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el compoentne si esta autenticado y guardar locallStorage', () => {
        //En component se debe mandar un componete o elemento dentro de una func () => ( <element> ... </element>)
        // Shalow solo renderiza el high order component , el shallow no va a funciinar cuando teng oeste tipo de estructura, 
        // debo usar el mount dentro de enzyme
        // const wrapper = shallow(
        // Si esta auth true , pasa la prueba 
        // El redirect es un string vacio, por eso cuando esta false, no muestra nada. 
        // Os ea si esta privado y no esta authenticado 
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        // Da un error por qeu debe estar dentro de un Router, y se usa el MemoryRouter un high order component que contenta el PrivateRoute
        // console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(true);
        // Se puede esperar con el toHaveBeenCalledWith con las propiedades y valores que deseamos evlauar. 
        expect(localStorage.setItem).toHaveBeenLastCalledWith('lastPath', '/marvel');
    });

    test('Deben de bloquear el componetne si no esta authenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenLastCalledWith('lastPath', '/marvel');
    });

});
