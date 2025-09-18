// rotas que precisam do ID (Parâmetro)

import { deleteTarefa, updateTarefa } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro{
    id:string
}

//PATCH
export async function PATCH(req:NextRequest, {params}:{params:Parametro}) {
    try {
        const {id} = params;
        const data = await req.json();
        const tarefaAtualizada = await updateTarefa(id, data);
        if(!tarefaAtualizada){ //null
            return NextResponse.json ({sucess:false, error:"Not Found"})
        }
        return NextResponse.json ({sucess:true, data:tarefaAtualizada});
        
    } catch (error) {
        return NextResponse.json ({sucess:false, error:error});
    }
}

//DELETE
export async function DELETE({params}:{params:Parametro}) {
    try {
        const {id} = params;
        const resultado = await deleteTarefa(id);
        if(!resultado){
            return NextResponse.json ({sucess:false, error:"Not Found"})
        }
        return NextResponse.json ({sucess:true, data:{}});
    } catch (error) {
        return NextResponse.json ({sucess:false, error:error});
    }
}