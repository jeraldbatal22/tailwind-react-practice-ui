import './App.css';
import Card from './components/Card';
import Content from './components/Content';
import Header from './components/Header';

function App() {

  return (
    <div className='2xl:h-screen'>
      <Header/>
      <Content/>
      <Card/>
    </div> 
  );
}

export default App;
