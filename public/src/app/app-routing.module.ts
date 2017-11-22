import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { ResultComponent } from './result/result.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
	{path: "", pathMatch: "full", component: BattleComponent},
	{path: "results", pathMatch: "full", component: ResultComponent},
	{path: "rankings", pathMatch: "full", component: RankingComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
