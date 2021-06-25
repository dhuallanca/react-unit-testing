import logo from './logo.svg';
import Counter from './components/counter';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <Counter></Counter>
     </>
  );
}

export default App;
