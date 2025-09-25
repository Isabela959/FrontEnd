// classe de modelagem de dados para Usuário

import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUsuario extends Document{
    _id: string;
    nome: string;
    email: string;
    senha: string;
    funcao: string;
}


const UsuarioSchema:Schema<IUsuario> = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    funcao: {type: String, enum:["tecnico", "gerente", "admin"], required:true}
});

//middleware para hashear a senha
// serve para hashear a senha antes de salvar no BD
UsuarioSchema.pre<IUsuario>('save', async function (next) {
    // se a senha não foi modificada ou se está nula
    if (!this.isModified('senha') || !this.senha) return next();
    try {
        //gema para criptografar a senha
        const salt = await bcrypt.genSalt(10);
        // faz a criptografia da senh a partir da senha
        this.senha = await bcrypt.hash(this.senha, salt);
        //salva a senha criptografada
        next();
    } catch (error: any) {
        next(error);
    }
})

//método para comparar senhas

// métodos de enviar e pegar informações do banco de dados
//toMap // FromMap
const Usuario: Model<IUsuario> = mongoose.models.User 
|| mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export default Usuario;