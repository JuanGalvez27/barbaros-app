import './App.css';
import ProductCard from './app/components/ProductCard';
import { useSelector } from 'react-redux'

function App() {
  const cartState = useSelector(state => state.cart)
  console.log(cartState)
  return (
    <div className="App">
      <ProductCard />
    </div>
  );
}

export default App;
