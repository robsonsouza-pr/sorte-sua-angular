import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarResultadoComponent } from './cadastrar';
import { ListarResultadoComponent } from './listar';

export const ResultadoRoutes: Routes = [
	{ 
		path: 'resultados', 
		redirectTo: 'resultado/listar' 
	},
	{ 
		path: 'resultado/listar', 
		component: ListarResultadoComponent 
	},
		{ 
		path: 'resultado/cadastrar', 
		component: CadastrarResultadoComponent 
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(ResultadoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResultadoRoutingModule {
}

