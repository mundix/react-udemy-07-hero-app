import { authReducer } from '../../components/auth/authReducer';
import { types } from '../../components/types/types';

describe('Pruebas en authReducer', () => {

    const initialState = {
        name: 'Edmundo',
        logged: true
    }

    test('Debe retornar el estado por defecto', () => {
        const state = authReducer({
            name: '',
            logged: false
        }, {});

        expect(state).toEqual({
            name: '',
            logged: false
        });
    });

    test('Debe authenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: initialState
        }

        const state = authReducer(initialState, action);
        expect(state).toEqual(initialState);
    });

    test('Debe de borrar el name del usuario y el logged en false', () => {
        const action = {
            type: types.logout,
        }

        const state = authReducer({ name: 'Pedro', logeed: false }, action);
        expect(state).toEqual({ logged: false });
    });


});
