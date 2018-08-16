import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MatchService {
  _baseurl_local: string = "https://api.footzyscore.com/v2/";
  GetAllCompetitionMatchesByMonth_API: string = this._baseurl_local + "MobileAPI/GetAllMatchDatesByMonth";
  constructor(private http: HttpClient) {
  }
  GetAllCompetitionMatchesByMonth(param) {
    console.log("**param**", param);
    var fromdate = param.firstDay;
    var todate = param.lastDay;
    var timezone = param.localtimezone;
    let apiurl = `${this.GetAllCompetitionMatchesByMonth_API + '?fromdate=' + fromdate + '&todate=' + todate + '&timezone=' + timezone}`;
    return this.http.get(apiurl);
  }
}
