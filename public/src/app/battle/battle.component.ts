import { Component, OnInit } from '@angular/core';
import { RankingService } from '../ranking.service';
import { Rank } from './rank';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

	username1="";
	user1NotFound=false;
	username2="";
	user2NotFound=false;
	player1;
	player2;

	constructor(private _rankingService: RankingService, private _router: Router) { }

	ngOnInit() {
	}

	getUser1(){
		this._rankingService.githubAPICall(this.username1, res=>{
			if(res.message=="Not Found"){
				this.user1NotFound=true;
			}else{
				this.player1=new Rank();
				this.player1.avatar=res.avatar_url;
				this.player1.username=res.login;
				this.player1.score=(res.public_repos+res.followers)*12;
			}
		})
	}

	getUser2(){
		this._rankingService.githubAPICall(this.username2, res=>{
			if(res.message=="Not Found"){
				this.user2NotFound=true;
			}else{
				this.player2=new Rank();
				this.player2.avatar=res.avatar_url;
				this.player2.username=res.login;
				this.player2.score=(res.public_repos+res.followers)*12;
			}
		})
	}

	battle(){
		this._rankingService.updateOrCreate(this.player1, res=>{});
		this._rankingService.updateOrCreate(this.player2, res=>{});
		this._rankingService.setPlayer1(this.player1);
		this._rankingService.setPlayer2(this.player2);
		this._router.navigateByUrl("/results");
	}
}
