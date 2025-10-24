"use client";

import styles from "./page.module.css";

//direcionar par página de login

export default function Home(){

// useEffect(()=>{
//   async function cadastraAdmin() {
//     await criarAdmin();
//   }
//   cadastraAdmin();
// })

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-Vindo ao Sistema de Gestão de Estoque</h1>
      <p className={styles.subtitle}>Por favor, faça login para continuar</p>
      <a href="/login" className={styles.loginButton}>Ir para Login</a>
    </div>
  );
}