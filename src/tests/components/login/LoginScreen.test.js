
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../../components/auth/AuthContext';
import { LoginScreen } from '../../../components/Login/LoginScreen';
import { types } from '../../../components/types/types';
describe('Prueba en LoginScreen', () => {

    const historyMock = {
        replace: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Edmundo',
            logged: true
        }
    }

    const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={historyMock}/>
            </AuthContext.Provider>
        );

    test('Debe de mostrarse correctametne', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de hacer el dispatch  y la navegacion', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login, 
            payload: {
                name: 'Edmundo',
                logged: true
            }
        });
        expect(historyMock.replace).toHaveBeenCalled();
    });
    
});
