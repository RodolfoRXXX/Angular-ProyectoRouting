import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  id: string;

  constructor( route: ActivatedRoute ) { 
    route.params.subscribe( params => {
      this.id = params['id'];
    } )
   }



  ngOnInit(): void {
  }

}
