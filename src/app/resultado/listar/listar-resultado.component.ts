import { Component, OnInit } from '@angular/core';
import { Resultado, ResultadoService} from '../shared';

@Component({
  selector: 'app-listar-resultado',
  templateUrl: './listar-resultado.component.html'
})
export class ListarResultadoComponent implements OnInit {

  constructor(private resultadoService: ResultadoService) { }

  resultados: Resultado[];

  ngOnInit() {
  	//o retorno do serviço rest é um response que contém as propriedades data e error
  	//com o subscribe estou pegando o valor de retorno, imaginando que deu tudo certo.
  	this.resultadoService.listarTodos()
  		.subscribe(res=>{
  			this.resultados = res['data'];
  		});
  }

}
