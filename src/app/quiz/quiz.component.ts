import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, timer } from 'rxjs';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
questions:any[]=[];
currentQuestionIndex = 0;
score = 0;
isTimedMode = true;
timer$ = new BehaviorSubject<number>(30);

constructor(private service:QuizService,             
             private route:ActivatedRoute,
             private router:Router
          ){}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.service.getQuizQuestion(params['category'], params['difficulty']).subscribe(questions => {
        this.questions = questions.map((q: any) => ({
          ...q,
          answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5)
        }));
        if (this.isTimedMode) {
          this.startTimer();
        }
      });
    });
  }
  selectAnswer(answer: string) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (answer === currentQuestion.correct_answer) {
      this.score += 10;
    }
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.timer$.next(30);
    } else {
      this.service.saveScore({
        username: 'Player', 
        score: this.score,
        date: new Date().toISOString()
      });
      this.router.navigate(['/result'], { queryParams: { score: this.score } });
    }
  }

  startTimer() {
    timer(0, 1000).subscribe(() => {
      const timeLeft = this.timer$.value;
      if (timeLeft > 0) {
        this.timer$.next(timeLeft - 1);
      } else {
        this.selectAnswer(''); 
      }
    });
  }

}
