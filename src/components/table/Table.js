import React, { Component } from 'react';
import './Table.css'
import TableHeader from '../table_header/TableHeader.js'
import Body from '../body/Body.js' 

// takes in TableHeader and Body
// loops through props and creates a <Body/> for each line of data
export default class Table extends Component {

  render() {
    return(
      <table>
        <tbody>
          <TableHeader/>
          {this.props.standings.standings[0].table.map((item, i) =>
            <Body
              key={i}
              position={item.position}
              team={item.team.name}
              id={item.team.id}
              played={item.playedGames}
              won={item.won}
              draw={item.draw}
              lost={item.lost}
              gf={item.goalsFor}
              ga={item.goalsAgainst}
              gd={item.goalDifference}
              points={item.points}
              updateCurrentTeam={this.props.updateCurrentTeam}
              getTeamStoredMatches={this.props.getTeamStoredMatches}
              currentTeam={this.props.currentTeam}
              currentTeamID={this.props.currentTeamID}
              matches={this.props.matches}
              updateTeamMatches={this.props.updateTeamMatches}
            />
          )}
        </tbody>
      </table>
    )
  }

}