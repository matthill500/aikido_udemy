import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  }

  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <CartProvider>
      { cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;
