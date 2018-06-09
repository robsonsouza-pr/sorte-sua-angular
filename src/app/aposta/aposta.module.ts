import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferirApostaComponent } from './conferir';
import { ApostaService } from './shared';
import { ApostaRoutingModule } from './aposta-routing.module';
import { FormsModule  } from '@angular/forms';
import { SugerirApostaComponent } from './sugerir';
import { JogoAleatorioComponent } from './sugerir/jogo-aleatorio/jogo-aleatorio.component';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    ApostaRoutingModule,
    FormsModule,
    TableModule
  ],
  declarations: [
  	ConferirApostaComponent, 
  	SugerirApostaComponent, JogoAleatorioComponent ],
  providers: [ApostaService]
})
export class ApostaModule { }
