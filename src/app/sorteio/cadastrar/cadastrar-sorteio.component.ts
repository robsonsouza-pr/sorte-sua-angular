import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { DatePipe } from '@angular/common';
import { Sorteio, SorteioService } from '../shared';
import { Loteria, LoteriaService } from '../../loteria';

@Component({
  selector: 'app-cadastrar-sorteio',
  templateUrl: './cadastrar-sorteio.component.html'
})
export class CadastrarSorteioComponent implements OnInit {

  sorteio : Sorteio;

  constructor(private sorteioService : SorteioService, private loteriaService: LoteriaService) { }

  loterias: Loteria[];

  ngOnInit() {
  	this.sorteio = new Sorteio();
    this.loteriaService.listarTodos().subscribe(lot=>{
      this.loterias = lot['data'];
      console.log(this.loterias);
    });
  }

  cadastrar(): void{
    console.log(this.sorteio);
    //gambiarra para formatar a data corretamente
    this.sorteio.dataSorteio = new DatePipe('en-US').transform(this.sorteio.data, 'dd/MM/yyyy') ;
    console.log(this.sorteio);
  	this.sorteioService.salvar(this.sorteio)
  		.subscribe(sort => { let retorno:any = sort['data'];
  			console.log(retorno);
  		});
  }

}
