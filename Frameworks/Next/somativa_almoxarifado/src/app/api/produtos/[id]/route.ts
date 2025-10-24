// rotas que precisam do ID (PATCH ou PUT, getOne, DELETE)

import { getOneProduto, updateProduto } from "@/controllers/ProdutoController";
import { NextResponse } from "next/server";

interface Parametro{
    id:string
}

//patch
export async function PATCH(req: NextResponse, {params}:{params:Parametro}){
    try {
        const {id} = params;
        const data = await req.json();
        const ProdutoAtualizado = await updateProduto(id, data);
        if (!ProdutoAtualizado) {
            return NextResponse.json({success: false, error: "Not Found"});
        }
        return NextResponse.json({success:true, data: ProdutoAtualizado});
    } catch (error) {
        return NextResponse.json({sucess:false, error:error});
    }
}

//GET(ONE)
export async function GET({params}:{params:Parametro}){
    try {
        const {id} = params;
        const data = await getOneProduto(id);
        if (!data) {
            return NextResponse.json({success: false, error: "Not Found"});
        }
        return NextResponse.json({success:true, data: data});
    } catch (error) {
        return NextResponse.json({sucess:false, error:error});
    }
}

//DELETE
export async function DELETE({params}:{params:Parametro}){
    try {
        const {id} = params;
        await getOneProduto(id);
        return NextResponse.json({success:true, data: {}});
    } catch (error) {
        return NextResponse.json({sucess:false, error:error});
    }
}