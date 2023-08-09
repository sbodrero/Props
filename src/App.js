import './App.css';
import MainContent from './components/MainContent';

function App() {
  const users = [
    {name: 'Jean', city: 'Lons'},
    {name: 'Roger', city: 'Tour'},
    {name: 'Cécile', city: 'Angers'},
  ]

  const getUsersCount = users => users.length;
  const pageTitle = "Les des utilisateurs";
  const year = 2023;
  const style = { backgroundColor: 'white' };

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <MainContent users={users} getUsersCount={getUsersCount} title={pageTitle} year={year} style={style} />
    </div>
  );
}

export default App;
