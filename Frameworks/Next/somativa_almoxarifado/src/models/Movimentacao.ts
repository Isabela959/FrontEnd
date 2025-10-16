// classe de modelagem de dados para a Ordem de Serviço

import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMovimentacao extends Document{
    _id: string;
    produtoId: string;
    tipoMovimentacao: string;
    quantidade: number;
    data: Date;
    usuarioId: string;
}

const MovimentacaoSchema:Schema<IMovimentacao> = new Schema({
    produtoId: {type: String, required: true},
    tipoMovimentacao: {type: String,
        enum:["entrada", "saida"],
        required: true
    },
    quantidade: {type: Number, required: true, unique: true},
    data: {type: Date, default: Date.now},
    usuarioId: {type: String, required: true},
});


// métodos de enviar e pegar informações do banco de dados
const Movimentacao: Model<IMovimentacao> = mongoose.models.User 
|| mongoose.model<IMovimentacao>("Movimentacao", MovimentacaoSchema);

export default Movimentacao;