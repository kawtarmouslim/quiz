import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-homr',
  templateUrl: './homr.component.html',
  styleUrls: ['./homr.component.css']
})
export class HomrComponent {
  category:string='9';
  difficulty:string='easy';
  constructor(private router:Router){}
  startQuiz(){
    this.router.navigate(['/quiz'],{queryParams:{category:this.category,difficulty:this.difficulty}})
  }

}
