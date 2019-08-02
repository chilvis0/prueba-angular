//tarjeta.componet
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  //tarjeta.component.ts
  //va a recibir un texto para categoria
  @Input() categoria: string;
  @Input() precio: number;

  constructor() { }

  ngOnInit() {
  }

}
