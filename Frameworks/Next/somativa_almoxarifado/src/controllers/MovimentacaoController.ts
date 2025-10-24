import Movimentacao, { IMovimentacao } from "@/models/Movimentacao"
import connectMongo from "@/services/mongodb"

//getAll
export const getAllMovimentacao= async() =>{
    await connectMongo();
    const movimentacoes = await Movimentacao.find([]);
    return movimentacoes;
}

//geOne
export const getOneMovimentacao= async(id:string) =>{
    await connectMongo();
    const movimentacao = await Movimentacao.findById(id);
    return movimentacao;
}
//create
export const createMovimentacao= async(data: Partial<IMovimentacao>) =>{
    await connectMongo();
    const novaMovimentacao= new Movimentacao(data); //cria a movimentação
    const novaMovimentacaoId = novaMovimentacao.save(); //salva movimentação no BD
    return novaMovimentacaoId;
}
//update
export const updateMovimentacao= async (id:string, data:Partial<IMovimentacao>) => {
    await connectMongo();
    const movimentacaoAtualizada = await Movimentacao.findByIdAndUpdate(id, data, {new:true});
    return movimentacaoAtualizada;    
}
//delete
export const deleteMovimentacao= async (id:string) =>{
    await connectMongo();
    await Movimentacao.findByIdAndDelete(id);
}