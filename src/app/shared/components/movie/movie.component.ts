import { Component, OnInit } from '@angular/core';
import { IsingleMovie } from '../models/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
movieId!:string;
movieObject!:IsingleMovie;


  constructor(
    private _routes:ActivatedRoute,
    private _movieService:MovieService
  ) { }

  ngOnInit(): void {
    this.movieId =this._routes.snapshot.params['id']
    console.log(this.movieId,typeof this.movieId)
    if(this.movieId){
     this._movieService.getMovieById(this.movieId)
            .subscribe(res=>{
              console.log(res)
            this.movieObject =res
            })
    }
  }

}
