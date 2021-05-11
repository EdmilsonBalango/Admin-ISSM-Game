import logo from './logo.svg';
import './App.css';

const MainLogin = () => {

  return (
    <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
      <p style={{color: '#444', fontWeight: 'bold', fontSize: 30}}>Bem-vindo ao issm game</p>

    </div>
  );
} 

function App() {
  
  return (
    <MainLogin />
  );
}

export default App;
