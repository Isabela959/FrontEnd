// classe de modelagem de dados para Usuário

import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";

//atributos
export interface IUsuario extends Document{
    _id: string;
    nome: string;
    email: string;
    senha?: string; //permite que a seha retorne null 
    funcao: string;
    compareSenha(senhaUsuario:string):Promise<boolean>;
    //devolve para o usuário apenas a booleana de comparação da senha (se deu certo ou errado)
}

//schema -> construtor
const UsuarioSchema:Schema<IUsuario> = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true, select: false}, // por mais que eu busque os dados do usuário, a senha nunca é mostrada
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
// quando faz o login (compara a senha digitada 
// e criptografada com a senha criptografada do banco)
UsuarioSchema.methods.compareSenha = function (senhaUsuario:string):
Promise<boolean>{
    return bcrypt.compare(senhaUsuario, this.senha);
}

// métodos de enviar e pegar informações do banco de dados
//toMap // FromMap
const Usuario: Model<IUsuario> = mongoose.models.User // recebo do bd 
|| mongoose.model<IUsuario>("Usuario", UsuarioSchema); // mando para o bd

export default Usuario;