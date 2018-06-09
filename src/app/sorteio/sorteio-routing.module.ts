import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarSorteioComponent } from './cadastrar';
import { ListarSorteioComponent } from './listar';

export const SorteioRoutes: Routes = [
	{ 
		path: 'sorteios', 
		redirectTo: 'sorteios/listar' 
	},
	{ 
		path: 'sorteios/listar', 
		component: ListarSorteioComponent 
	},
		{ 
		path: 'sorteios/cadastrar', 
		component: CadastrarSorteioComponent 
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(SorteioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SorteioRoutingModule {
}

