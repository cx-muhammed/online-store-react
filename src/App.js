import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <h1>this is login</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/products">
            <h1>Products</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
