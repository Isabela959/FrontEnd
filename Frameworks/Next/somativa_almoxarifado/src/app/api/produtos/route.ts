// rotas que não precisam do ID

import { createProduto, getAllProduto } from "@/controllers/ProdutoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const data = await getAllProduto(); //chama o controlador
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req: NextRequest){ //req são os dados que estou enviando
    try {
        const data = await req.json();
        const newProduto = await createProduto(data);
        return NextResponse.json({success:false,data:newProduto});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}