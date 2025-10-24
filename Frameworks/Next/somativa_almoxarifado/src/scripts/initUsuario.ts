//script para criação de um usuário gestor para o Site

import Usuario from "../models/Usuario";
import connectMongo from "../services/mongodb"

export const criarGestor = async () =>{
    await connectMongo();
    const gestorEmail = "gestor@gestor.com";
    
    //verificar se usuário já existe
    const gestorExiste = await Usuario.findOne({email:gestorEmail});
    if (!gestorExiste) {
        const gestor = new Usuario({
            nome: "gestor",
            email: gestorEmail,
            senha: "gestor123",
            funcao: "gestor"
        });
        await gestor.save();
        console.log("Usuário Gestor Criado!!");
    }else{
        console.log("Usuário já existe");
    }
};

criarGestor().catch(console.error);