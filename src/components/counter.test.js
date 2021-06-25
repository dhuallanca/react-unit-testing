import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Counter from './counter';

describe('Pruebas de Contador', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter></Counter>);
  })

  test('validar el renderizado con snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  test('validar el incremento del contador', () => {
    wrapper.find('button').first().simulate('click');
    expect(wrapper.find('h1').text()).toEqual('1');
  })

  test('validar el decrement del contador', () => {
    wrapper.find('button').last().simulate('click');
    expect(wrapper.find('h1').text()).toEqual('-1');
  })
});