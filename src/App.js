import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateTodo from "./components/create-todo.component.js";
import EditTodo from "./components/edit-todo.component.js";
import TodosList from "./components/todos-list.component.js"
import logo from "./logo.png";
 
class App extends Component {
  render() {
    return (

        <Router>

          <div className='container'>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="https://github.com/klayne1129" target="_blank">
                <img src={logo} width="30" alt="github.com/klayne1129"/>
              </a>
              <Link to='/' className="navbar-brand">MERN-Stack Todo App</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/" className="nav-link">Todos</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/create" className="nav-link">Create Todo</Link>
                    </li>
                </ul>
                  
              </div>
            </nav>

            <Route path="/" exact component={TodosList} /> 
            <Route path="/edit/:id" component={EditTodo} /> 
            <Route path="/create" component={CreateTodo} /> 
          </div>
        
        </Router>
      
    );
  }
}
export default App;