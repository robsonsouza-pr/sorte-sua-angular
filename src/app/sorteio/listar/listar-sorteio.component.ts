import { Component, OnInit } from '@angular/core';
import { SorteioService, Sorteio } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-sorteio',
  templateUrl: './listar-sorteio.component.html'
})
export class ListarSorteioComponent implements OnInit {

  constructor(private sorteioService : SorteioService) { }

  sorteios: Sorteio[];

  ngOnInit() {
  	this.sorteioService.listarTodos()
  		.subscribe(sort => { this.sorteios = sort['data'];
  			console.log(this.sorteios);
  		});
  }

}
