// classe de modelagem de dados para Produto

import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProduto extends Document{
    _id: string;
    nome: string;
    sku: string;
    quantidadeMinima: number;
    quantidadeAtual: number;
    valorUnitario: number;
}

const ProdutoSchema:Schema<IProduto> = new Schema({
    nome: {type: String, required: true},
    sku: {type: String, required: true, unique: true},
    quantidadeMinima: {type: Number, required: true},
    quantidadeAtual: {type: Number, required: true},
    valorUnitario: {type: Number, required: true},
});

// métodos de enviar e pegar informações do banco de dados
const Produto: Model<IProduto> = mongoose.models.Produto
|| mongoose.model<IProduto>("Produto", ProdutoSchema);

export default Produto;