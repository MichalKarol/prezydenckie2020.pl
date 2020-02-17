import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { MainView } from "./views/MainView";

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <Header />
        <Switch>
          <Route path="*">
            <MainView />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
