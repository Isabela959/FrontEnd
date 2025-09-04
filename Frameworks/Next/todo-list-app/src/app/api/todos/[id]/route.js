// criar as function put e delete

import connectMongo from "@/services/mongodb";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";


export async function PUT(req, {id}) {
    try {
        await connectMongo();
        const data = await req.json();
        const tarefaAtualizada = await Todo.findByIdAndUpdate(id.id, data, {
            new: true, // retorna o obj atualizado
            runValidators: true // valida o schema da coleção
        })
        if (!tarefaAtualizada) {
            return NextResponse.json({success: false}, {status: 400})
        }
        return NextResponse.json({success:true, data: tarefaAtualizada})
    } catch (error) {
        return NextResponse.json({success: false},{status: 500});
    }
}

export async function DELETE(req,{id}){
    try {
        await connectMongo // estabelece conexão com o banco
        const deleteTarefa = await Todo.deleteOne({
            _id: id.id
        });
        if (!deleteTarefa) {
            return NextResponse.json({success: false},{status: 400});
        }
        return NextResponse.json({success: true, data:{}})
    } catch (error) {
        return NextResponse.json({success: false},{status: 500});
    }
}