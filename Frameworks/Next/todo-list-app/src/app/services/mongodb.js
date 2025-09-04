//arrow function

import mongoose from "mongoose"

const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL) //estabelece conexão com o BD
    .then(()=>console.log("Conectado ao MongoDB"));
}