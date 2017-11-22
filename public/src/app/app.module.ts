import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { ResultComponent } from './result/result.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingService } from './ranking.service';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    ResultComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	HttpModule
  ],
  providers: [RankingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
