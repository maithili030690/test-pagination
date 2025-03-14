import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieTableComponent } from './shared/components/movie-table/movie-table.component';
import { MovieComponent } from './shared/components/movie/movie.component';

const routes: Routes = [
  {
    path:'',
    component:MovieTableComponent
  },
  {
    path:'movies',
    component:MovieTableComponent
  },
  {
    path:'movies/:id',
    component:MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
