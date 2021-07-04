import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Header from "./component/header/Header.jsx";
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart";
import NotFoundPage from "./component/NotFoundPage";
import TemplateProvider from "./template/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./component/itemDetail/DetailView";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            {/* <Route component={NotFoundPage} /> */}
            <Route exact path = "/product/:id" component = {DetailView}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
