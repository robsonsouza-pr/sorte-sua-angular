import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Resultado, ResultadoService } from '../shared';
import { Loteria , LoteriaService} from '../../loteria';

@Component({
  selector: 'app-cadastrar-resultado',
  templateUrl: './cadastrar-resultado.component.html'
})
export class CadastrarResultadoComponent implements OnInit {

  constructor(private resultadoService: ResultadoService, private loteriaService: LoteriaService) { }

  resultado: Resultado;
  loterias: Loteria[];

  ngOnInit() {
  	this.resultado = new Resultado();
    this.loteriaService.listarTodos().subscribe(lot=>{
      this.loterias = lot['data'];
    });
    
  }

  cadastrar(): void{
	   this.resultadoService.salvar(this.resultado)
  		.subscribe(res => { let retorno:any = res['data'];
  			console.log(retorno);
  		});
  }

}
