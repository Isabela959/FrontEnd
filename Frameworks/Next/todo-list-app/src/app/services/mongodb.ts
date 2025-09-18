// escrevendo o mongodb de forma segura e reutilizável -> armazenamento de cache

// converte String para URL (URI)
const MongoUri = process.env.DATABASE_URL;

// verificar se existe um endereço URL
if(!MongoUri){ //verificando a nulidade da variável
    throw new Error("Defina o DATABASE_URL no .env.local") // gitignore 
}