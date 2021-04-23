import React from 'react';
import { configure, shallow, mount } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';

/* import { createVideogame } from '../../actions';
import configureStore from "redux-mock-store"; */
import { Create } from './Create.jsx';

//configure({adapter: new Adapter()});

describe('<Create />',() => {
    describe('Estructura', () => {
        let wrapper;
        beforeEach(() => {
          wrapper = shallow(<Create />);
        })
        it('Renderiza un <form>', () => {
          expect(wrapper.find('form')).toHaveLength(1)
        })
    
        
    })
})