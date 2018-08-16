import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-matches-detail-component',
  templateUrl: './matches-detail-component.component.html',
  styleUrls: ['./matches-detail-component.component.css']
})
export class MatchesDetailComponentComponent implements OnInit {

  constructor(
    private meta: Meta
  ) {
    var localteam_name = "team-Ac";
    var visitorteam_name = "team-Bc"
    this.meta.addTag({ name: 'title', content: "MatchesDetailComponentComponent - | FootzyScore" });
    this.meta.addTag({ name: 'description', content: "All info to the  " + localteam_name + " vs " + visitorteam_name + "  on the   - latest news, live scores and statistics. >>> MORE" });
  }

  ngOnInit() {
  }

}
