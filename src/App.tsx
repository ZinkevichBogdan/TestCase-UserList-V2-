import './scss/App.scss';
import FormAddUser from './components/form/FormAddUser';
import UserList from './components/userList/UserList';
import Header from './components/header/Header';

function App() {

  return (
    <div className='app'>
      < div className='conteiner'>
        <Header />
        <UserList />
      </div>
      <FormAddUser />
    </div>
  )
}

export default App;