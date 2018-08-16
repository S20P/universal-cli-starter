import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-matches-dashboard',
  templateUrl: './matches-dashboard.component.html',
  styleUrls: ['./matches-dashboard.component.css']
})
export class MatchesDashboardComponent implements OnInit {

  constructor(
    private meta: Meta
  ) {
    var localteam_name = "team-A";
    var visitorteam_name = "team-B"
    this.meta.addTag({ name: 'title', content: 'Match ' + localteam_name + " vs " + visitorteam_name + " - | FootzyScore" });
    this.meta.addTag({ name: 'description', content: "All info to the  " + localteam_name + " vs " + visitorteam_name + "  on the   - latest news, live scores and statistics. >>> MORE" });
  }


  ngOnInit() {
  }

}
