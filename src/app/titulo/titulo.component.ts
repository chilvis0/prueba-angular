import { Component, OnInit, Input } from 
'@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  //le decimos que va a recibir
  @Input() titulo: string;
  @Input() subtitulo: "sarasa";
  constructor() { }

  ngOnInit() {
    console.log("El titulo es:", this.titulo);
   // let titulo = "Hola Mundo";
  }

}
