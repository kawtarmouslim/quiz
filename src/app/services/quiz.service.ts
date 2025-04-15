import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
     private apiUrl="https://opentdb.com/api.php?amount=10";
  constructor(private http :HttpClient) { }
    public getQuizQuestion( categorie:string,dificulte:string): Observable<any>{
      return this.http.get (`${this.apiUrl}&categorie=${categorie}&dificulte=${dificulte}&type=multiple`)
      .pipe(map((res:any)=>res.results));
    }
    saveScore(score:any){
      const scores=JSON.parse(localStorage.getItem('scores')||'[]');
      scores.push(score);
      localStorage.setItem('scores',JSON.stringify(scores));
    }
    getScore():any[]{
      return JSON.parse(localStorage.getItem('scores')||'[]');

    }
}
