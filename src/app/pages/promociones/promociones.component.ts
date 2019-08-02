import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit {

    categoria1 = "Vuelo";
    categoria2 = "paquete";
    categoria3 = "hotel";
    
    precio1 = 4056;
    precio2 = 6856;
    precio3 = 12000;
    
      title = 'my-project';
      titulo1 = 'este es el titulo 1';
      subtitulo1 = 'soy el 1';
      titulo2 = 'este es el titulo 2';
      subtitulo2 = 'soy el 2';
    

  constructor() { }

  ngOnInit() {
  }

}
