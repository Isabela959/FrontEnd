// criar a solicitação de login do usuário http Request -> Backend do login
//jwt -> vai gerar o token de autenticação

import { autenticaUsuario } from "@/controllers/UsuarioController";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// verificar se o JWT está inserido no enviroment(variáveis de ambiente do projeto)

const JWT_SECRET = process.env.JWT_KEY;
// verifica se a chave está no .env.local
if (!JWT_SECRET) {
    throw new Error("JWT_KEY não está definida nas Variáveis de Ambiente");
}

// começa com o método de Autenticação
export async function POST(req: NextRequest) { // pega as informações do HTML
    try {
        const {email,senha} = await req.json(); // converte html para json
        //validar os dados do HTML (client-side)
        if (!email || !senha) {
            return NextResponse.json({
                success: false, error: "Email e Senha são Obrigatórios"
            });
        }
        // continuar a validação
        const usuario = await autenticaUsuario(email, senha);
        // se não encontrou o usuário
        if (!usuario) {
            return NextResponse.json({
                success: false, error: "Email ou Senha Inválido"
            });
        }
        //continuo para gerar o token (JWT)
        //gerar o token permite acessar as páginas adiante
        const token = jwt.sign(
            {id: usuario._id, nome: usuario.nome, funcao: usuario.funcao},
            JWT_SECRET as string,
            {expiresIn: "2m"}
        );
        return NextResponse.json({
            success: true,
            token,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                funcao: usuario.funcao
            }
        });

    } catch (error) { // erro de conexão com o SERVIDOR
        return NextResponse.json({success: false, error: error})
    }
    
}