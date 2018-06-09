import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { Loteria } from './loteria.model';
import { SORTE_SUA_API } from '../../sorte-sua-api';
import { ErrorHandler } from '../../error-handler';

@Injectable()
export class LoteriaService {


  constructor(private http : Http) { }

  public  listarTodos(): Observable<Loteria[]>{
  	return this.http.get(`${SORTE_SUA_API}/loterias`)
  		.map(response => response.json())
  		.catch(ErrorHandler.handleError);
  }

}
