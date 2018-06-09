import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarResultadoComponent } from './listar';
import { CadastrarResultadoComponent } from './cadastrar';
import { ResultadoRoutingModule } from './resultado-routing.module';
import { ResultadoService } from './shared';
import { LoteriaService } from '../loteria';
import { FormsModule  } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    ResultadoRoutingModule,
    FormsModule,
    TableModule
  ],
  declarations: [
  	ListarResultadoComponent, 
  	CadastrarResultadoComponent
  ],
  providers:[
  	ResultadoService,
    LoteriaService
  ]
})
export class ResultadoModule { }
