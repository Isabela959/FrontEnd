import mongoose from "mongoose";

// converte String em URL
const MongoUri = process.env.DATABASE_URL;

//verifica se o .env.local está declarado
if(!MongoUri){ //verifica a nulidade de variavel
    throw new Error("Defina o DATABASE_URL no .env.local")
}

// criar uma variável para armazenar o cache do sistema

let cached = (global as any).moongose;
// vai armazenar previamente do global do node, caso já exista uma conexão com o MOngoDB

//caso não exista nenhuma conexão previamente estabelecida
if(!cached){ //verifica a nulidade de variavel
    cached = (global as any).moongose = {conectada:null, promessa:null};
}

// função de conexão com o mongoDB
async function connectMongo(){
    // verifica se conexão já existe, caso exista, retorna a própria conexão
    if(cached.conectada) return cached.conectada;

    //verifica se existe uma promessa de conexão
    if(!cached.promessa){ //se nula
        const aguarde = {bufferCommands:false}; // desativo o buffer de comando do mongoose 
        // caso ocorra a perda de conexão 
        // cria uma promessa de conexão
        cached.promessa = mongoose.connect(MongoUri!, aguarde)
        .then((mongoose) => {
            console.log("Conexão estabelecida no mongo");
            return mongoose;
        })
    }
    // estabelecer conexão
    try {
        // cria a conexão a partir da promessa que estava pendete
        cached.conectada = await cached.promessa;
    } catch (error) {
        //caso ocorra algum erro
        cached.promessa = null // limpo a promessa de conexão
        throw error; //lanço o erro
    }

    // a conexão foi estabelecida

    return cached.conectada;
}

// transforma em componente reutilizável
export default connectMongo;

// 1º Passo: Criar o endereço da conexão
// 2º Passo: Criar o cached, para armazenar as conexões ao longo do projeo
// 3º Passo: Verificar se já existe uma conexão estabelecida com o BD
// 4º Passo: Criar uma promessa de conexão, caso não exista
// 5º Passo: Transformar a promessa uma conexão estabelecida
