import { Relatorio } from './relatorio.model';

export class Sugestao{

	constructor(
		public jogoAleatorio: string,
		public jogoMaisSorteados: string,
		public relatorios: Relatorio[]
	){}

}