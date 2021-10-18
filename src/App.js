import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { UseStateValue } from "./StateProvider";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = UseStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          // authUser: null,
          user: null,
        });
      }
    });
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
