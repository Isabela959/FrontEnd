// rotas que não precisam do ID

import { createMovimentacao, getAllMovimentacao } from "@/controllers/MovimentacaoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const data = await getAllMovimentacao(); //chama o controlador
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req: NextRequest){ //req são os dados que estou enviando
    try {
        const data = await req.json();
        const newMovimentacao = await createMovimentacao(data);
        return NextResponse.json({success:false,data:newMovimentacao});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}