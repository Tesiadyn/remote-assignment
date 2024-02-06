import './styles/normalize.css';
import './styles/style.css';
import Nav from './components/Nav';
import Header from './components/Header';
import IntroCards from './components/IntroCards';
import ButtonContainer from './components/ButtonContainer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <IntroCards />
      <ButtonContainer />
    </div>
  );
}

export default App;
