import { Bebidas } from './Bebidas';
import { ItensAdicionais } from './ItensAdicionais';

export class ItemCardapio {

    idItem: number;
    imagem: string;
    titulo: string;
    ingredientes: string;
    valor: number;
    itensAdicionais:Array<ItensAdicionais>;
    bebidas:Array<Bebidas>;
}
