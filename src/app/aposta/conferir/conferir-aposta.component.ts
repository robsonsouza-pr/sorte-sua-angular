import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApostaService, Aposta} from '../shared';

@Component({
  selector: 'app-conferir-aposta',
  templateUrl: './conferir-aposta.component.html'
})
export class ConferirApostaComponent implements OnInit {

	aposta : Aposta;

  constructor(private apostaService: ApostaService) { }

  ngOnInit() {
  	this.aposta = new Aposta();
  }

  conferir(): void{
  	this.apostaService.conferir(this.aposta).subscribe(ap =>{
  		let retorno = ap['data'];
  		this.aposta.acertos = retorno.acertos;
      console.log(retorno);
  	});
  }

}
