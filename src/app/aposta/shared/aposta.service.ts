import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Aposta } from './aposta.model';
import { Sugestao } from './sugestao.model';
import { SORTE_SUA_API } from '../../sorte-sua-api';

@Injectable()
export class ApostaService {

  constructor(private http: Http) { }

  conferir(aposta: Aposta): Observable<Aposta[]>{
  	const headers: Headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post(`${SORTE_SUA_API}/apostas/conferir`, 
  							JSON.stringify(aposta),
  							new RequestOptions({headers: headers})).map(response => response.json());
  }

  sugerir(): Observable<Sugestao[]>{
  	return this.http.get(`${SORTE_SUA_API}/apostas/sugerir`).map(response => response.json());
  }

  sugerirAleatorio(): Observable<Sugestao[]>{
      return this.http.get(`${SORTE_SUA_API}/apostas/sugerir/aleatorio`).map(response => response.json());
  }

}
