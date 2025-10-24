import Produto, { IProduto } from "@/models/Produto";
import connectMongo from "@/services/mongodb"

//getAll
export const getAllProduto = async() =>{
    await connectMongo();
    const produtos = await Produto.find([]);
    return produtos;
}

//geOne
export const getOneProduto = async(id:string) =>{
    await connectMongo();
    const produto = await Produto.findById(id);
    return produto;
}
//create
export const createProduto = async(data: Partial<IProduto>) =>{
    await connectMongo();
    const novoProduto = new Produto(data); //cria o produto
    const novoProdutoId = novoProduto.save(); //salva o produto no BD
    return novoProdutoId;
}
//update
export const updateProduto = async (id:string, data:Partial<IProduto>) => {
    await connectMongo();
    const produtoAtualizado = await Produto.findByIdAndUpdate(id, data, {new:true});
    return produtoAtualizado;    
}
//delete
export const deleteProduto = async (id:string) =>{
    await connectMongo();
    await Produto.findByIdAndDelete(id);
}