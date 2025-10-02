import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb"

//getAll
export const getAllOrdemServico = async() =>{
    await connectMongo();
    const ordemServicos = await OrdemServico.find([]);
    return ordemServicos;
}

//geOne
export const getOneOrdemServico = async(id:string) =>{
    await connectMongo();
    const ordemServico = await OrdemServico.findById(id);
    return ordemServico;
}
//create
export const createOrdemServico = async(data: Partial<IOrdemServico>) =>{
    await connectMongo();
    const novaOrdemServico = new OrdemServico(data); //cria o usuário
    const novaOrdemServicoId = novaOrdemServico.save(); //salva o usuário no BD
    return novaOrdemServicoId;
}
//update
export const updateOrdemServico = async (id:string, data:Partial<IOrdemServico>) => {
    await connectMongo();
    const OrdemServicoAtualizado = await OrdemServico.findByIdAndUpdate(id, data, {new:true});
    return OrdemServicoAtualizado;    
}
//delete
export const deleteOrdemServico = async (id:string) =>{
    await connectMongo();
    await OrdemServico.findByIdAndDelete(id);
}