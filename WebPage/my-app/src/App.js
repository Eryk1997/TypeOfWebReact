import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
// React Router Import
import { Switch, Route } from "react-router-dom";
// Import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Details from './components/pages/Details';
import Contacts from './components/pages/Contacts';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/details" component={Details} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
