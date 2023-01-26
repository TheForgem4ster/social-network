import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';

function App() {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;
