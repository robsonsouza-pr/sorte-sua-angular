import { Component, OnInit } from '@angular/core';
import { Sugestao, ApostaService } from '../../shared';

@Component({
  selector: 'app-jogo-aleatorio',
  templateUrl: './jogo-aleatorio.component.html',
  styleUrls: ['./jogo-aleatorio.component.css']
})
export class JogoAleatorioComponent implements OnInit {

  constructor(private apostaService: ApostaService) { }

  aleatorio: Sugestao;

  ngOnInit() {
  	this.gerar();
  }

  gerar(): void{
  	this.apostaService.sugerirAleatorio().subscribe(
  		sug=>{
  			this.aleatorio = sug['data'];
  			console.log(sug);
  		}
  	);
  }

}
