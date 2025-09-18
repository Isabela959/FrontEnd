import mongoose, { Document, Model, Schema } from "mongoose";

// definir a estrutura do Obj
// Utilizar o Document do mongoose (o terceiro)
export interface Itarefa extends Document{
    //herdamos a base de documentos do Mongoose
    //atributos do Obj
    id:string;
    titulo:string;
    concluida:boolean;
    dataCriacao:Date;
}

// criar as Regras (Schema) do MongoDB

const TarefaSchema: Schema<Itarefa> = new mongoose.Schema({
    titulo:{
        type: String,
        required:[true, "O título é obrigatório"],
        maxlenght:[50, "máximo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    dataCriacao:{
        type: Date,
        default:Date.now
    }
})

// import e export do modelo
const Tarefa: Model<Itarefa> = mongoose.models.Tarefa || mongoose.model<Itarefa>("Tarefa", TarefaSchema);

// transforma em um componente reutilizável
export default Tarefa;