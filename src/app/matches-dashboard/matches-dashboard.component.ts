import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MatchService } from '../service/match.service';

@Component({
  selector: 'app-matches-dashboard',
  templateUrl: './matches-dashboard.component.html',
  styleUrls: ['./matches-dashboard.component.css']
})
export class MatchesDashboardComponent implements OnInit {
  public alldaymatch_list = [];

  constructor(
    private meta: Meta,
    private matchService: MatchService,
  ) {
    var localteam_name = "team-A";
    var visitorteam_name = "team-B"
    this.meta.addTag({ name: 'title', content: 'Match ' + localteam_name + " vs " + visitorteam_name + " - | FootzyScore" });
    this.meta.addTag({ name: 'description', content: "All info to the  " + localteam_name + " vs " + visitorteam_name + "  on the   - latest news, live scores and statistics. >>> MORE" });
  }


  ngOnInit() {
    this.GetAllCompetitionMatchesByMonth();
  }

  GetAllCompetitionMatchesByMonth() {
    var param = {
      "firstDay": '2018-06-01',
      "lastDay": '2018-09-02',
      "localtimezone": 'Asia/Kolkata'
    };
    this.matchService.GetAllCompetitionMatchesByMonth(param).subscribe(record => {
      var result: any = record['data'];
      console.log("Date array by month", result);
      if (result !== undefined) {
        for (var k = 0; k < result.length; k++) {
          var fulldate: any = result[k];
          //I have a simple case of pushing unique values into array.
          if (this.alldaymatch_list.indexOf(fulldate) == -1) {
            this.alldaymatch_list.push(fulldate);
          }
        }
      }
    });

    console.log("short List of Date by Month", this.alldaymatch_list);
  }
}
