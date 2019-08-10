import React, { Component } from 'react';
// import { Router, Route, IndexRoute} from "react-router";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import './style.css';
import Project from './project'
import Home from './home';
import icon from './img/icon.png';
import Footer from './footer';
import Chart from './chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html"><img src={icon} alt="logo" />Safe Route Planner</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbar">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <NavLink className='link' activeClassName='active' to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='link' activeClassName='active' to="/project">Project</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='link' activeClassName='active' to="/chart">Chart</NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>

            <Switch>
              <Route exact path="/" component={Home}/>  
              <Route path="/home" component={Home} />
              <Route path="/project" component={Project} />
              <Route path="/chart" component={Chart} />
            </Switch>

          </div>
        </Router>
        <Footer />
      </div>

    );
  }
}

export default App;
