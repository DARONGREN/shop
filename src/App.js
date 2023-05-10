import React from "react";
import { useSelector } from "react-redux";


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Account } from "./pages/accounts/Account";
import {Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login";
import { Register } from "./pages/login/Register";

const App = () => {
  const isLoggIn = useSelector((state) =>state.auth.isLoggIn)
  const cartItems = useSelector((state) =>state.cart.itemsList)
  
  return(
    <>
    {isLoggIn && (
    <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />

          <Route exact path='/account' component={Account} />
        </Switch>
      <Footer />
    </Router>
    )}
    {!isLoggIn && <Login />}
    </>
  )
}

export default App;
