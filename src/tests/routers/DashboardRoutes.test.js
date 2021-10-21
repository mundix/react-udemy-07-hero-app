import React from 'react';
import { shallow, mount } from 'enzyme';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../components/auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <DashboardRoutes/>', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Edmundo',
            logged: true
        }
    }
    test('Debe mostrar correctamente <DashboardRoutes/>', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
            );
        
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('.text-info').text().trim()).toBe('Edmundo');
    });

});
