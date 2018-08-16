import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Services load----
import { MatchLiveService } from './service/live_match/match-live.service';
import { MatchService } from './service/match.service';


import { GroupByPipe } from './short-array.pipe';
import { GroupByArrayPipe } from './group-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GroupByPipe,
    GroupByArrayPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'universal-cli' }),
    HttpClientModule
  ],
  providers: [MatchLiveService, MatchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
