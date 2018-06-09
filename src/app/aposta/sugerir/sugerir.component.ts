import { Component, OnInit } from '@angular/core';
import { ApostaService, Sugestao, Relatorio } from '../shared';

@Component({
  selector: 'app-sugerir',
  templateUrl: './sugerir.component.html'
})
export class SugerirApostaComponent implements OnInit {

  constructor(private apostaService: ApostaService) { }

 sugestao: Sugestao;

  ngOnInit() {
  	this.apostaService.sugerir().subscribe(
  		sug=>{
        this.sugestao = sug['data'];
        console.log(this.sugestao);
  		}
  	);
  }

}
