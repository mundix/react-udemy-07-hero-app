import React from 'react';
import { shallow, mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../components/auth/AuthContext';

describe('Pruebas en <AppRouter/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    
    test('Debe de mostrar login si no esta authenticated', () => {
        //Da un error por que necesit el useContext del AuthContext.provider con el mount
        // const wrapper = shallow(
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
            ) ;

        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de mostrar el componente marvel si esta authenticated', () => {
        
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                name: 'Edmundo',
                logged: true
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
            ) ;  
            // console.log(wrapper.html());
            expect(wrapper.find('.navbar').exists()).toBe(true);
    });
    
});
