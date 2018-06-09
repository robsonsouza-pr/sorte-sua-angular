import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConferirApostaComponent } from './conferir';
import { SugerirApostaComponent } from './sugerir';

export const ApostaRoutes: Routes = [

	{ 
		path: 'aposta/conferir', 
		component: ConferirApostaComponent 
	},
    { 
    path: 'aposta/sugerir', 
    component: SugerirApostaComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ApostaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApostaRoutingModule {
}

