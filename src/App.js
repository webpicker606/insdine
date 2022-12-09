import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import CardTwo from './components/CardTwo';
import "./styles/bd.css"
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
      <CardTwo></CardTwo>
      <CardTwo></CardTwo>
      <CardTwo></CardTwo>
      <CardTwo></CardTwo>
    
      </div>
    </div>
  );
}

export default App;
