
//client- side
"use client";

import { Itarefa } from "@/models/Tarefa";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function Home() {
  //useState => armazenamento localStorage
  //armazenar as tarefas em um vetor[armazenamento, editor do Armazenamento]
  const [tarefas,setTarefas] = useState<Itarefa[]>([]);

  //armazenamento de uma string para o input (titulo da tarefa)
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  //useEffect = permite a exeução de funções, sem o recarregamento da tela
  useEffect(()=> {
    //carregar todas as tarefas do banco de dados
    buscarTarefas();
  }, []);

  //criar as funções que serão executadas na tela
  const buscarTarefas = async() => {
    try {
      //fetch por padrão é GET (não precisa declarar)
      const resposta = await fetch("/api/tarefas"); //conecta com o route
      // realizar a conexão http com o backend
      const data = await resposta.json(); //converte em json
      if(data.success){
        setTarefas(data.data); //armazena a resposta no vetor de tarefas
      }
    } catch (error) {
      console.error(error); //exibe o erro no console
    }
  }

  //adicionarTarefa
  const adicionarTarefa = async(e: FormEvent) => {
    e.preventDefault(); //evita o recarregamento da página em eventos HTTP
    // verificar se o texto não está vazio
    if(!novaTarefa.trim()) return; //não permite adicionar tarefas vazias
    try {
      // função post
      const resultado = await fetch("api/tarefas", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({titulo:novaTarefa})
      });
      const data = await resultado.json();
      if(data.success){//se resultado for ok
        //adicionar a tarefa no vetor
        setNovaTarefa(""); //limpa o campo do input
        //client-side - sem buscar a nova tarefa no BD
        setTarefas([...tarefas,data.data]);
        //server-side - buscando a nova tarefa no BD
        buscarTarefas();
      }
    } catch (error) {
      console.error(error);
    }
  }

  //atualizarTarefa
  const atualizarTarefa = async(id: string, status: boolean) => {
    try {
      const resposta = await fetch(`/api/tarefas/${id}`,{
        method:"PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({concluida: !status})
      });
      const data = await resposta.json();
      if (data.success) {
        //client-side
        setTarefas(tarefas.map((tarefa)=>(tarefa._id ===id ? data.data : tarefa)));
        //server-side
        buscarTarefas();
      }
    } catch (error) {
      console.error(error);
    }
  }

  //deletarTarefa
  const deletarTarefa = async(id:string) => {
    try {
      await fetch(`/api/tarefas/${id}`,{
        method:"DELETE",
      })
      buscarTarefas();
    } catch (error) {
      console.error(error);
    }
}
  //Interface do Usuário ReactDom
  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionarTarefa}>
        <input type="text"
        value={novaTarefa}
        onChange={(e:ChangeEvent<HTMLInputElement>)=> setNovaTarefa(e.target.value)}
        placeholder="Adicionar Uma Nova Tarefa" />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tarefas.map((tarefa)=>(
          <li key={tarefa._id.toString()}>
            <input type="checkbox"
            checked={tarefa.concluida}
            onChange={()=>atualizarTarefa(tarefa._id.toString(), tarefa.concluida)} />
            {tarefa.titulo}
            <button onClick={()=>deletarTarefa(tarefa._id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}