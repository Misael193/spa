import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any = {};
  marvel:boolean;
  dc:boolean;


  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
      if(this.heroe['casa'] == "Marvel"){
        this.marvel = true;
        this.dc = false;
      }else{
        this.marvel = false;
        this.dc = true;
      }
    } );
  }

}
