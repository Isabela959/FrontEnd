//arrow Function

//function

//export function

import style from "./page.module.scss";

export default function Home(){
  return(
    <main className={style.container}>
      <h1 className={style.title}>Hello World!!!</h1>
      <p className={style.subtitle}>Minha Primeira Página Next</p>
    </main>
  );
}