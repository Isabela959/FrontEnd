// classe de modelagem de dados para Equipamento

import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEquipamento extends Document{
    _id: string;
    modelo: string;
    marca: string;
    localizacao: string;
    numSerie: string;
    status: string;
}

const EquipamentoSchema:Schema<IEquipamento> = new Schema({
    modelo: {type: String, required: true},
    marca: {type: String, required: true, unique: true},
    localizacao: {type: String, required: true},
    numSerie: {type: String, required: true, unique: true},
    status: {type: String, 
        enum: ["ativo", "inativo", "manutencao"], 
        default: "ativo"
    }
});

// métodos de enviar e pegar informações do banco de dados
const Equipamento: Model<IEquipamento> = mongoose.models.User 
|| mongoose.model<IEquipamento>("Equipamento", EquipamentoSchema);

export default Equipamento;