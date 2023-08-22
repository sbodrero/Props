import './App.css';
import MainContent from './components/MainContent';
import UsersCount from './components/UsersCount';
import UsersList from './components/UsersList';

function App() {
  const users = [
    {name: 'Jean', city: 'Lons', country: 'Suisse'},
    {name: 'Roger', city: 'Tour', country: 'France'},
    {name: 'Cécile', city: 'Angers', country: 'Turquie'},
  ];

  const getUsersCount = users => users.length;
  const pageTitle = "Les des utilisateurs";
  const year = 2023;
  const style = { backgroundColor: 'white' };

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <MainContent
        list={<UsersList users={users} />}
        count={<UsersCount users={users} getUsersCount={getUsersCount} />}
        title={pageTitle}
        year={year}
        style={style}
      />
    </div>
  );
}

export default App;
