// rotas que não precisam do ID

import { createOrdemServico, getAllOrdemServico } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const data = await getAllOrdemServico(); //chama o controlador
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req: NextRequest){ //req são os dados que estou enviando
    try {
        const data = await req.json();
        const newOrdemServico = await createOrdemServico(data);
        return NextResponse.json({success:false,data:newOrdemServico});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}