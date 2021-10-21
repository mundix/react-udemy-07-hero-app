import React from 'react';
import { shallow, mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <HeroScreen/>', () => {

    const history = {
        length: 10, //supiniendo que tengo 10 registroe ne el history
        push: jest.fn(),
        goBack: jest.fn(),
    }

    // const wrapper = shallow(<HeroScreen/>);
    // Para poder usar Higher Order Component , se utiliza el mount 
    // para envair el objeto en el memoryRouter paso un argumento llamand initialEntries 
    const wrapper = mount(
        // <MemoryRouter >
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen/>
        </MemoryRouter>
        );

    test('Debe de mostrar el componete redirect si no hay argumento en el URL  ', () => {
        //devueve un string vacio por que no hemos enviado el heroeId, por que llega undefined  
        //como no tenemos un heroe, regersa el componetne redirect con el string vacio, 
        // como lo resovlermos debemos enviar un argumento. 
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);
    })
    

})
