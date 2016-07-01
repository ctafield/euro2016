import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './views/app.html'
})
export class AppComponent {
  
  CreateTeam = function( group, name, imageUrl, points ) {
    return { group: group, name: name, imageUrl: imageUrl, points: points }
  }

  groups = ['A', 'B', 'C', 'D', 'E', 'F' ];

  teams = [
    this.CreateTeam( 'A', 'France', '', 7 ),
    this.CreateTeam( 'A', 'Switzerland', '', 5 ),
    this.CreateTeam( 'A', 'Albania', '', 3 ),
    this.CreateTeam( 'A', 'Romania', '', 1 ),
    
    this.CreateTeam( 'B', 'Wales', '', 6),
    this.CreateTeam( 'B', 'England', '', 5 ),
    this.CreateTeam( 'B', 'Slovakia', '', 4 ),
    this.CreateTeam( 'B', 'Russia', '', 1 ),
 
    this.CreateTeam( 'C', 'Germany', '', 7 ),
    this.CreateTeam( 'C', 'Poland', '', 7 ),
    this.CreateTeam( 'C', 'Northern Ireland', '', 3 ),
    this.CreateTeam( 'C', 'Ukraine', '', 0 ),
 
    this.CreateTeam( 'D', 'Croatia', '', 7 ),
    this.CreateTeam( 'D', 'Spain', '', 6 ),
    this.CreateTeam( 'D', 'Turkey', '', 3 ),
    this.CreateTeam( 'D', 'Czech Republic', '', 1 ),
 
    this.CreateTeam( 'E', 'Italy', '', 6 ),
    this.CreateTeam( 'E', 'Belgium', '', 6 ),
    this.CreateTeam( 'E', 'Republic of Ireland', '', 4 ),
    this.CreateTeam( 'E', 'Sweden', '', 1 ),
 
    this.CreateTeam( 'F', 'Hungary', '', 5 ),
    this.CreateTeam( 'F', 'Iceland', '', 5 ),
    this.CreateTeam( 'F', 'Portugal', '', 3 ),
    this.CreateTeam( 'F', 'Austria', '', 1 )
  ];

  teamsForGroup = function( group) {
    return this.teams.filter( function( team ) {
      return team.group === group;
    } ).sort( function( teamA, teamB ) {
      return teamA.points < teamB.points;
    } );
  }

 }