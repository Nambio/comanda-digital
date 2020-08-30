import { Bebidas } from './Bebidas';
import { ItensAdicionais } from './ItensAdicionais';

export class Pedido {
    idItem: number;
    titulo: string;
    valorPrato: number;
    itensAdicionais:Array<ItensAdicionais>;
    bebidas:Array<Bebidas>;
    valores: number;
    quantidade: number;
}
