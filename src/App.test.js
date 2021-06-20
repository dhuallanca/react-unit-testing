import { render as renderReact, screen } from '@testing-library/react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

configure({
  adapter: new Adapter()
})

describe('Probando App component', () => {
  test('renders learn react link', () => {
    // render with testing-librat-react
    renderReact(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('render component with enzyme', () => {
    const wrapper = shallow(<App></App>);
    expect(wrapper.html()).toBe(`<div class="App"><p>Edit <code>src/App.js</code> and save to reload.</p><a class="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a></div>`)
    expect(wrapper.find('code').html()).toBe('<code>src/App.js</code>');
  });
})
