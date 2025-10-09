"use client";

import { criarAdmin } from "@/scripts/initUsuario";
import { useEffect } from "react";

//direcionar par página de login

export default function Home(){

// useEffect(()=>{
//   async function cadastraAdmin() {
//     await criarAdmin();
//   }
//   cadastraAdmin();
// })

  return(
    <div>
      <h1>Bem-Vindo ao Sistema de Gestão de Manutenção</h1>
      <p>Por favor, faça login para continuar</p>
      <a href="/login">Ir para Login</a>
    </div>
  );
}

