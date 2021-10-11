import { Component, OnInit } from '@angular/core';
import { CajasQuery } from '../../store/cajas.query';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css'],
})
export class CajasComponent implements OnInit {
  constructor(public store: CajasQuery) {}

  ngOnInit(): void {}
}
