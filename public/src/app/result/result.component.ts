import { Component, OnInit } from '@angular/core';
import { RankingService } from '../ranking.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

	first;
	second;

	constructor(private _rankingService: RankingService) { }

	ngOnInit() {
		var p1=this._rankingService.getPlayer1();
		var p2=this._rankingService.getPlayer2()
		if(p1.score>p2.score){
			this.first=p1;
			this.second=p2;
		}else{
			this.second=p1;
			this.first=p2;
		}
	}
}
