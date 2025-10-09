import Usuario, { IUsuario } from "@/models/Usuario";
import { criarAdmin } from "@/scripts/initUsuario";
import connectMongo from "@/services/mongodb"


//getAll
export const getAllUsuario = async() =>{
    await connectMongo(); // estabelece conexão com o BD
    const usuarios = await Usuario.find([]); //listar todos os usuário da coleção
    return usuarios;
}

//getOne
export const getOneUsuario = async(id:string) => {
    await connectMongo();
    const usuario = await Usuario.findById(id); //listar o usuário
    return usuario;
}

//create
export const createUsuario = async(data: Partial<IUsuario>) =>{
    await connectMongo();
    const novoUsuario = new Usuario(data); //cria o usuário
    const novoUsuarioId = novoUsuario.save(); //salva o usuário no BD
    return novoUsuarioId;
}
//update
export const updateUsuario = async(id:string, data:Partial <IUsuario>) => {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, data, {new:true});
    return usuarioAtualizado;
}

//delete
export const deleteUsuario = async (id:string) =>{
    await connectMongo();
    await Usuario.findByIdAndDelete(id);
}

//método para autenticação do usuário (login) a senha é comparada
export const autenticaUsuario = async(email:string, senha:string) => {
    await connectMongo();
    //buscar o usuário ( email)
    const usuario = await Usuario.find({email}).select("+senha");
    //se usuário não encontrado
    if(!usuario || usuario.length==0)return null;
    //se caso usuário foi encotrado
    const senhaSecreta = await usuario[0].compareSenha(senha);//booleana
    if(!senhaSecreta) return null;
    //se deu certo
    return usuario[0];
}