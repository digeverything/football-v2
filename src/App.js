import React, { Component } from 'react';
import authToken from './AuthToken';
import Loading from './pages/loading/Loading';
import AppRouter from './AppRouter';
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        standings: null,
        teams: null,
        matches: null,
        loading: true,
        error: false,
      }
        // this.fetchStandings = this.fetchStandings.bind(this);
        // this.fetchTeams = this.fetchTeams.bind(this);
        // this.fetchMatches = this.fetchMatches.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {headers : {'X-Auth-Token': authToken}});
    const data = await response.json();
    this.setState({standings: data, loading: false});
  }


// *** create a new component - async getData(url, state) if state !null return else {fetch(url)}
// call it in AppRouter



  // add a console log to notify when data has been fetched, to keep an eye on how it's working?
  // fetchStandings() {
  //   fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {headers : {'X-Auth-Token': authToken}} )
  //     .then(response => response.json())
  //     .then(data => this.setState({standings: data, loading: false}))
  //     .catch(error => this.setState({ error: false }));
  // }		
  
  // fetchTeams() {
  //   fetch(`http://api.football-data.org/v2/competitions/2021/teams`, {headers : {'X-Auth-Token': authToken}} )
  //     .then(response => response.json())
  //     .then(data => this.setState({teams: data}))
  //     .catch(error => this.setState({ error: false }));
  // }		
  
  // fetchMatches() {
  //   fetch(`http://api.football-data.org/v2/competitions/2021/matches`, {headers : {'X-Auth-Token': authToken}} )
  //     .then(response => response.json())
  //     .then(data => this.setState({matches: data}))
  //     .catch(error => this.setState({ error: false }));
  // }

  render() {
    return (
      <>
        {this.state.loading ? <Loading/> : <AppRouter standings={this.state.standings}/>}
      </>
     
    )
  }

}