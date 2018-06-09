import { Injectable } from '@angular/core';
//importações obrigatórias para consumir serviços rest
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';

//importação da classe que representa o Dto da api rest
import { Resultado } from './resultado.model';
import { SORTE_SUA_API } from '../../sorte-sua-api';

@Injectable()
export class ResultadoService {

  constructor(private http: Http) { }

  //atentar-se ao tipo de retorno, não é uma lista de Resultados
  //mas um Observable tipado com uma lista de Resultados

  listarTodos(): Observable<Resultado[]>{
  	return this.http.get(`${SORTE_SUA_API}/resultados`).map(response=> response.json());
  }

//note que para salvar utilizo o método post
//é importante salientar, também, que  o post necessita dos objetos Headers e RequestOptions
  public salvar(resultado: Resultado){
  	const headers: Headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post(`${SORTE_SUA_API}/resultados`, 
  							JSON.stringify(resultado),
  							new RequestOptions({headers: headers})).map(response => response.json());
  }

}
