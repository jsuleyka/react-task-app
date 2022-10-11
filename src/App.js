import './App.css';
import logo from './images/fcc-logo.svg';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className='fcc-logo-container'>
        <img src={logo} className='fcc-logo' alt="FreeCodeCamp Logo" />
      </div>

      <div className='main-container'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
