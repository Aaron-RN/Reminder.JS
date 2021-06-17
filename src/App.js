import logo from './assets/images/logo.svg';
import './assets/App.css';
import TaskManager from './components/functional/taskManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      <body>
        <TaskManager />
      </body>
    </div>
  );
}

export default App;
