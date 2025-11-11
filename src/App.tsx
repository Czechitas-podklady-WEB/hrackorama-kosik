import Banner from './components/Banner';
import Cart from './components/Cart';
import Header from './components/Header';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Cart />
    </div>
  );
};

export default App;