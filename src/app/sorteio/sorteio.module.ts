import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSorteioComponent } from './listar';
import { CadastrarSorteioComponent } from './cadastrar';
import { SorteioService } from './shared';
import { LoteriaService } from '../loteria';
import { SorteioRoutingModule } from './sorteio-routing.module';
import { FormsModule  } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  imports: [
    CommonModule,
    SorteioRoutingModule,
    FormsModule,
    TableModule,
    CalendarModule
  ],
  declarations: [
  	ListarSorteioComponent, 
  	CadastrarSorteioComponent
  ],
  providers: [
  	SorteioService,
    LoteriaService
  ]
})
export class SorteioModule { }
