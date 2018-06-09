import { Component, OnInit } from '@angular/core';

import { Loteria, LoteriaService } from '../shared';

@Component({
  selector: 'app-listar-loteria',
  templateUrl: './listar-loteria.component.html'
})
export class ListarLoteriaComponent implements OnInit {

	loterias : Loteria[];

  constructor(private loteriaService : LoteriaService) { }

  ngOnInit() {
      this.loteriaService.listarTodos()
      .subscribe(lot => { this.loterias = lot['data'];
        console.log(this.loterias);
      });
  }

}
