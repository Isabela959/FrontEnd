import mongoose from "mongoose";
import { type } from "os";
import { Script } from "vm";

//IConstrutor de um objeto da coleção do MondoDB para tarefas
// Modelar Obj

const TodoSchema = new mongoose.Schema({
    titulo: {
        type: Script,
        required: [true, "O título é obrigatório"], //adiciona mensagem de erro
        trim: true, //remove os espaços antes e depois
        maxlength: [100, "Max 100 char"] //mensagem de erro se título for maior que 100 caracteres
    },
    concluida: {
        type: Boolean,
        default: false // o padrão é que seja false inicialmente
    },
    criadaEm: {
        type: Date,
        default: Date.now // registra automaticamente a data de criação
    }
});

// cria um modelo ToDo caso não exista
// se modelos já existe usa o ToDo
// se não existir, cria um novo Schema para o Banco de Dados chamado Todo Schema
export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);