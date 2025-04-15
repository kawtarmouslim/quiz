import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomrComponent } from './homr/homr.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { HistoriqueComponent } from './historique/historique.component';

const routes: Routes = [
  {path:'',component:HomrComponent},
  {path:'quiz',component:QuizComponent},
  {path:'result',component:ResultComponent},
  {path:'history',component:HistoriqueComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
