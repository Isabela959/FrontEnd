import mongoose from "mongoose";

// convert string em URL
const MongoUri = process.env.DATABASE_URL;

//verifica se o .env.local esta declarado
if(!MongoUri){ //verifica a nulidade de uma variavel
    throw new Error("Defina o DATABASE_URL no .env.local")
}

//crair uma variavel para armazenar o cache do sistema

let cached = (global as any).mongoose; 
//vai aramazenar previamente do global do node , caso já exista uma conexão com o mongoDB

//caso não exista nenhuma conexão previamente estabelecida
if(!cached){ //verifica a nulidade da variavel
    cached = (global as any).moongose = {conectada:null, promessa: null};
}

//função de conexão com o mongoDB
async function connectMongo() {
    //verifica se conexão já existe , se já existe retorna a própria conexão
    if(cached.conectada) return cached.conectada;

    //verificar se existe uma promessa de conexão
    if(!cached.promessa){ // se nula
        const aguarde = {bufferCommands: false}; //desativo o buffer de comando do mongoose
        //caso ocorra a perda de conexão
        //cria uma promessa de conexão
        cached.promessa = mongoose.connect(MongoUri!, aguarde)
            .then((mongoose)=> {
                console.log("Conexão estabecida no mongo");
                return mongoose;
            });

    }
    //vou estabelecer a conexão 
    try {
        //cria a conexão a partir da promessa que estava pendente
        cached.conectada = await cached.promessa;
    } catch (error) {
        //caso ocorra algum erro
        cached.promessa = null; //limpo a promessa de conexão
        throw error;
    }

    //a conexão foi estabelecida 

    return cached.conectada;
    
}

//transforma em um componenete reutilizavel
export default connectMongo;

//1º Passo -> criar o endereço da conexão
//2º Passo -> criar o cached, para armazenar as conexões ao longo do projeto
//3º Passo -> verificar se já existe uma conexão estabelecida com DB
//4º Passo -> criar uma promessa de conexão , caso ainda não exista
//5º Passo -> transformar a promessa em uma conexão estabelecida

