import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CadastrarLoteriaComponent } from './cadastrar';
import { ListarLoteriaComponent } from './listar';
import { LoteriaService, Loteria } from './shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ 
  		CadastrarLoteriaComponent, 
  		ListarLoteriaComponent
   ],
  providers: [
  	LoteriaService
  ]
})
export class LoteriaModule { }
