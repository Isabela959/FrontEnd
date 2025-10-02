// classe de modelagem de dados para a Ordem de Serviço

import mongoose, { Document, Model, Schema } from "mongoose";

export interface IOrdemServico extends Document{
    _id: string;
    titulo: string;
    descricao: string;
    tipoManutencao: string;
    status: string;
    dataSolicitada: Date;
    dataFinalizada: Date | null;
    idTecnico: string;
    idEquipamento: string;
}

const OrdemServicoSchema:Schema<IOrdemServico> = new Schema({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true, unique: true},
    tipoManutencao: {type: String,
        enum:["preventiva", "emergencial", "preditiva"],
        required: true
    },
    status: {type: String,
        enum: ["ativo", 'inativo'],
        default: "ativo"},
    dataSolicitada:{type: Date, default: Date.now},
    dataFinalizada:{type: Date, default: null},
    idTecnico: {type: String, required: true},
    idEquipamento: {type: String, required: true}
});


// métodos de enviar e pegar informações do banco de dados
const OrdemServico: Model<IOrdemServico> = mongoose.models.User 
|| mongoose.model<IOrdemServico>("OrdemServico", OrdemServicoSchema);

export default OrdemServico;