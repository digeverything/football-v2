import React, { Component } from 'react';
import authToken from './AuthToken';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Analysis from './pages/analysis/Analysis.js';
import Matches from './pages/matches/Matches';
import Table from './pages/table/Table';
import Background from './pages/background/Background';

export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        standings: null,
        teams: null,
        matches: null,
        loading: true,
        error: false
      }
        this.fetchStandings = this.fetchStandings.bind(this);
        this.fetchTeams = this.fetchTeams.bind(this);
        this.fetchMatches = this.fetchMatches.bind(this);
  }

  componentDidMount() {
    this.fetchStandings();
    this.fetchTeams();
    this.fetchMatches();
  }

  // add a console log to notify when data has been fetched, to keep an eye on how it's working?
  fetchStandings() {
    fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {headers : {'X-Auth-Token': authToken}} )
      .then(response => response.json())
      .then(data => this.setState({standings: data, loading: false}))
      .catch(error => this.setState({ error, loading: false }));
  }		
  
  fetchTeams() {
    fetch(`http://api.football-data.org/v2/competitions/2021/teams`, {headers : {'X-Auth-Token': authToken}} )
      .then(response => response.json())
      .then(data => this.setState({teams: data}))
      .catch(error => this.setState({ error, isLoading: false }));
  }		
  
  fetchMatches() {
    fetch(`http://api.football-data.org/v2/competitions/2021/matches`, {headers : {'X-Auth-Token': authToken}} )
      .then(response => response.json())
      .then(data => this.setState({matches: data}))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (

      // can everything in <Router/> be moved into it's own component and imported in, so it would just be e.g. <MyRoutes/>
      <Router>
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Table</Link>
              </li>
              <li>
                <Link to="/matches/">Matches</Link>
              </li>  
              <li>
                <Link to="/analysis/">Analysis</Link>
              </li>
            </ul>
          </nav>    

          <Route path="/" exact render={() => <Table standings={this.state.standings} />} />
          <Route path="/matches/" render={() => <Matches matches={this.state.matches} />}/>
          <Route path="/analysis/" render={() => <Analysis /> } />
        </>
      </Router>        
    )
  }

}