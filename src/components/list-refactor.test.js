import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from './list';

describe('Probando List-Refactor component', () => {

  const frutas = [
    { name: 'Fresa', id: 1 },
    { name: 'Sandilla', id: 2 },
    { name: 'Naranja', id: 3 }
  ]
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List title='Frutas' list={frutas}></List>);
  })

  test('probar nodos', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').hasClass('new')).toBe(true);
    expect(wrapper.find('ul').children().length).toBe(3);
    expect(wrapper.find('ul').childAt(1).text()).toBe('Sandilla');
  });

  test('validando actualizaciones en props', () => {
    expect(wrapper.find('li').length).toBe(3);

    wrapper.setProps({
      list: [
        { name: 'Melocoton', id: 1 },
      ]
    });

    expect(wrapper.find('li').length).toBe(1);

    wrapper.setProps({
      title: 'Listado de frutas'
    });
    expect(wrapper.find('.new').text()).toEqual('Listado de frutas');
  });

  test('probar nodos con snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('probar nodos con snapshot using toJson', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})