import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Header from "./component/header/Header.jsx";
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/cart" component = {Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
