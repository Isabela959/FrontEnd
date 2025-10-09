//script para criação de um usuário admin para o Site

import Usuario from "@/models/Usuario";
import connectMongo from "@/services/mongodb"

export const criarAdmin = async () =>{
    await connectMongo();
    const adminEmail = "admin@admin.com";
    //verificar se usuário já existe
    const adminExiste = await Usuario.findOne({email:adminEmail});
    if (!adminExiste) {
        const admin = new Usuario({
            nome: "Administrador",
            email: adminEmail,
            senha: "admin123",
            funcao: "admin"
        });
        await admin.save();
        console.log("Usuário Adm Criado!!");
    }else{
        console.log("Usuário já existe");
    }
};

criarAdmin().catch(console.error);