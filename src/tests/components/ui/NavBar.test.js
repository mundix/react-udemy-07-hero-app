import React from 'react';
import { mount } from 'enzyme';
import { Navbar } from '../../../components/ui/NavBar';
import { AuthContext } from '../../../components/auth/AuthContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../components/types/types';


describe('Pruebas en <NavBar/>', () => {
    //Esto es algo que se le puede enviar al Router, mediente el router dom 
    // Esta es nuestra implementacion personalizad del history
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        // Debo enviar el location 
        location: {},
        // Estas propiedades o funciones me lo ira pidiendo en la consola, por ende debo 
        // Simularlo con jest 
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Pedro',
            logged: true
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    // Siempre es bnueno limpiarlo 
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctametne', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');
    });

    test('Debe de llamar el logout y usar history', () => {

        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenLastCalledWith({
            type: types.logout
        });
        expect(historyMock.replace).toHaveBeenLastCalledWith('/login')

    });


});
