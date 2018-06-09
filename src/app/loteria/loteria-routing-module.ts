import { Routes } from '@angular/router';

import { CadastrarLoteriaComponent } from './cadastrar';
import { ListarLoteriaComponent } from './listar';

export const LoteriaRoutes: Routes = [
	{ 
		path: 'loterias', 
		redirectTo: 'loteria/listar' 
	},
	{ 
		path: 'loteria/listar', 
		component: ListarLoteriaComponent 
	},
		{ 
		path: 'loteria/cadastrar', 
		component: CadastrarLoteriaComponent 
	}
];
