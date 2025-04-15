import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  scores: any[] = [];

  constructor(private quizService: QuizService) {}
  ngOnInit(): void {
    this.scores = this.quizService.getScore();

    
  }

}
