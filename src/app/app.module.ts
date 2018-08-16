import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'universal-cli' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
