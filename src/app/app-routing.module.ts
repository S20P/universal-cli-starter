import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesDashboardComponent } from './matches-dashboard/matches-dashboard.component';
import { MatchesDetailComponentComponent } from './matches-detail-component/matches-detail-component.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamNextMatchesComponent } from './team-next-matches/team-next-matches.component';
import { TeamPreviousMatchesComponent } from './team-previous-matches/team-previous-matches.component';
import { TeamSquadComponent } from './team-squad/team-squad.component';
import { CompetitionComponent } from './competition/competition.component';
import { CompetitionAsideRightComponent } from './competition-aside-right/competition-aside-right.component';
import { CompetitionGroupComponent } from './competition-group/competition-group.component';
import { CompetitionMatchesComponent } from './competition-matches/competition-matches.component';
import { CompetitionPlayerComponent } from './competition-player/competition-player.component';
import { CompetitionsListComponent } from './competitions-list/competitions-list.component';
import { CompetitionTeamsComponent } from './competition-teams/competition-teams.component';

const routes: Routes = [
  { path: '', redirectTo: 'matches', pathMatch: 'full' },
  { path: 'matches', component: MatchesDashboardComponent },
  { path: 'matches_d', component: MatchesDetailComponentComponent },
  { path: 'Sidebar', component: SidebarComponent },
  { path: 'team', component: TeamDetailComponent },
  { path: 'team-n', component: TeamNextMatchesComponent },
  { path: 'team-p', component: TeamPreviousMatchesComponent },
  { path: 'team-s', component: TeamSquadComponent },
  { path: 'com', component: CompetitionComponent },
  { path: 'com-a', component: CompetitionAsideRightComponent },
  { path: 'com-g', component: CompetitionGroupComponent },
  { path: 'com-m', component: CompetitionMatchesComponent },
  { path: 'com-p', component: CompetitionPlayerComponent },
  { path: 'com-l', component: CompetitionsListComponent },
  { path: 'com-t', component: CompetitionTeamsComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [
  MatchesDashboardComponent,
  MatchesDetailComponentComponent,
  SidebarComponent,
  TeamDetailComponent,
  TeamNextMatchesComponent,
  TeamPreviousMatchesComponent,
  TeamSquadComponent,
  CompetitionComponent,
  CompetitionAsideRightComponent,
  CompetitionGroupComponent,
  CompetitionMatchesComponent,
  CompetitionPlayerComponent,
  CompetitionsListComponent,
  CompetitionTeamsComponent
];
