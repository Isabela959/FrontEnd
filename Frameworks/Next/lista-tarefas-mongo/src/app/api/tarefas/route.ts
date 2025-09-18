// criar as rotas que não precisam de ID

import { createTarefa, readAllTarefas } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const tarefas = await readAllTarefas(); //chama o controlador
        //tratar a resposta obtida pelo mongoDB
        return NextResponse.json({sucess:true, data:tarefas});
    } catch(error) {
        return NextResponse.json({sucess:false, error:error})
    }
}

export async function POST(req: NextRequest) { // req: são os dados que estou enviando
    try {
        const data = await req.json(); // verifica se od dados estão em formto Json
        const newTarefa = await createTarefa(data); //chama o controller
        return NextResponse.json({succes:true, data:newTarefa});
    } catch (error) {
        return NextResponse.json({sucess:false, error:error});

    }
}