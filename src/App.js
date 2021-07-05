import React from "react";
import Landing from "./pages/Landing";
import Home from "./pages/home";
import Todo from "./pages/todo";
import Footer from "./components/Footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact strict path='/' component={Landing} />
        <Route path='/typing-master' component={Home} />
        <Route path='/draggable-list-app' component={Todo} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
