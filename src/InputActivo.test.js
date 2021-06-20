import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { InputActivo } from './InputActivo';

configure({
  adapter: new Adapter(),
});

describe('Pruebas de componente InputActivo', () => {
  test('pruebas encontrando classname', () => {
    const wrapper = shallow(<InputActivo></InputActivo>)
    expect(wrapper.find('.container').html()).toBe(`<div class="container"><span num="3">Primero</span><span num="4" active="false">Segundo</span></div>`)
  })

  test('pruebas encontrando props', () => {
    const wrapper = shallow(<InputActivo></InputActivo>)
    expect(wrapper.find('[num=3]').html()).toBe(`<span num="3">Primero</span>`)
    expect(wrapper.find('[num="4"]').html()).toBe(`<span num="4" active="false">Segundo</span>`)
    expect(wrapper.find('[type="text"]').html()).toBe(`<input type="text"/>`)
  })
});