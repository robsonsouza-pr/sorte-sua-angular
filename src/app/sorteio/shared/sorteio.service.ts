import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Sorteio } from './sorteio.model';
import { SORTE_SUA_API } from '../../sorte-sua-api';

@Injectable()
export class SorteioService {


  constructor(private http : Http) { }

   public  listarTodos(): Observable<Sorteio[]>{
  	return this.http.get(`${SORTE_SUA_API}/sorteios`).map(response => response.json());
  }

  public salvar(sorteio: Sorteio){
  	const headers: Headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post(`${SORTE_SUA_API }/sorteios`, 
  							JSON.stringify(sorteio),
  							new RequestOptions({headers: headers})).map(response => response.json());
  }

}
