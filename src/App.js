import './App.css';
import MainContent from './components/MainContent';

function App() {
  const users = [
    {name: 'Jean', city: 'Lons'},
    {name: 'Roger', city: 'Tour'},
    {name: 'Cécile', city: 'Angers'},
  ]
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <MainContent users={users} />
    </div>
  );
}

export default App;
