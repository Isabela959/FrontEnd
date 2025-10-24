// rotas que não precisam do ID

import { createUsuario, getAllUsuario } from "@/controllers/UsuarioController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    //verifica a sessão do usuário
    //se (sessão ativa e usuario ==admin)
    // const session = await getServerSession(authOptions);
    //     if (!session || session.user.role !== "admin") {
    //         return NextResponse.json({sucess:false, error: "Não autorizado"})
    //     }
    try {
        const data = await getAllUsuario(); //chama o controlador
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req: NextRequest){ //req são os dados que estou enviando
    try {
        const data = await req.json();
        const newUsuario = await createUsuario(data);
        return NextResponse.json({success:false,data:newUsuario});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}