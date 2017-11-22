import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RankingService {

	token="ACCESS_TOKEN_HERE"
	player1;
	player2;

	constructor(private _http: Http) { }

	githubAPICall(username, callback){
		this._http.get(`https://api.github.com/users/${username}?access_token=${this.token}`).subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	all(callback){
		this._http.get('/ranks').subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	updateOrCreate(data, callback){
		this._http.put('/ranks', data).subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	getPlayer1(){
		return this.player1;
	}
	setPlayer1(player1){
		this.player1=player1;
	}
	getPlayer2(){
		return this.player2;
	}
	setPlayer2(player2){
		this.player2=player2;
	}
}
