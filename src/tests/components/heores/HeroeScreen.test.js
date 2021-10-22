import React from 'react';
import { shallow, mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route, Router } from 'react-router-dom';


describe('Pruebas en <HeroScreen/>', () => {

    const history = {
        length: 10, //supiniendo que tengo 10 registroe ne el history
        push: jest.fn(),
        goBack: jest.fn(),

    }

    // const wrapper = shallow(<HeroScreen/>);
    // Para poder usar Higher Order Component , se utiliza el mount 
    // para envair el objeto en el memoryRouter paso un argumento llamand initialEntries 


    test('Debe de mostrar el componete redirect si no hay argumento en el URL', () => {

        const wrapper = mount(
            // <MemoryRouter, en el initialEntries colo la ruta dentro de un array de la cuales me interesa
            // que evalue 
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history} />
            </MemoryRouter>
        );

        //devueve un string vacio por que no hemos enviado el heroeId, por que llega undefined  
        //como no tenemos un heroe, regersa el componetne redirect con el string vacio, 
        // como lo resovlermos debemos enviar un argumento. 
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('Debe de mostrar el error si el paremetros existe', () => {
        const wrapper = mount(
            // Le mando el url del hero con el id, debe mostrar el contenido. 
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                {/* Debo especifriar la ruta por qeu debo especificar co useParam */}
                {/* Esta es la ruta que voy a enviar a mi router de manera ficticia  */}
                {/* <HeroScreen history={history}/> Ya no voy a usar el comopnetne HeroScreen directo */}
                {/* Si no que con el router, pasarle el path , y el comopnetne para que funcinoe.  */}
                <Route path="/hero/:heroeId" component={HeroScreen} />

            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('Debe de regresar a al apantalla anterior con PUSH', () => {
        
        // NOTAS: 
        // el hook useHistory() va a coger el history establecido por el componente <MemoryRouter>.
        // Entonces, al estar usando el componente <Router> para establecer el "historyMock", ya 
        // no es necesario usar el componente <MemoryRouter>. Lo que si que es necesario es en el objeto "historyMock" 
        // establecer la ruta que indicábamos en "initialEntries" dentro de "location.pathname" del "historyMock":


        const history = {
            length: 1, //menos de 2
            push: jest.fn(),
            goBack: jest.fn(),
            location: { pathname: '/hero/marvel-spider' },
            listen: jest.fn(),
            createHref: jest.fn(),
            replace: jest.fn()
        }

        const wrapper = mount(
            // <MemoryRouter initialEntries={['/hero/marvel-spider']}>
            // Otra forma de pasar initialEntries mediante el history props
            <Router history={history}>
                <Route
                    path="/hero/:heroeId"
                    // ASi le puedo mandar los props y el componetne con su props del history 
                    component={() => <HeroScreen history={history} />}
                />
            </Router>
            // </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledWith('/');
        // expect(history.goBack).not.toHaveBeenCalled();
    });

    test('Debe de regresar a la pantalla anterior GOBACK', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroeId"
                    // ASi le puedo mandar los props y el componetne con su props del history 
                    component={() => <HeroScreen history={history} />}
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(history.push).not.toHaveBeenCalledWith('/');
        expect(history.goBack).toHaveBeenCalled();
    })
    

})
