import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgypteNewsComponent } from './components/egypte-news/egypte-news.component';
import { UsaNewsComponent } from './components/usa-news/usa-news.component';

const routes: Routes = [
  { path: 'egypte-news', component: EgypteNewsComponent },
  { path: 'usa-news', component: UsaNewsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
