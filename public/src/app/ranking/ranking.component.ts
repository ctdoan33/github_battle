import { Component, OnInit } from '@angular/core';
import { RankingService } from '../ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

	ranks;

	constructor(private _rankingService: RankingService) { }

	ngOnInit() {
		this._rankingService.all(res=>{
			this.ranks=res.sort((a,b)=>b.score-a.score);
		})
	}

}
