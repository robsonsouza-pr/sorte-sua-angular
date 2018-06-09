import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoteriaRoutes } from './loteria';

export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/loteria/listar', 
		pathMatch: 'full' 
	},
	... LoteriaRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
