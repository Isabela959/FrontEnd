"use-client";

import { IMovimentacao } from "@/models/Movimentacao";
import { useEffect, useState } from "react";

export default function DashboardOperador(){
    // armazenar as tarefas em um vetor
    const [movimentacoes, setMovimentacoes] = useState<IMovimentacao[]>([]);

    useEffect(()=> {
        fetchMovimentacoes();
    },[]);

    const fetchMovimentacoes = async () => {
        try {
            const resposta = await fetch("/api/movimentacoes"); //http request ->
            const data = await resposta.json();
            if (data.success) {
                setMovimentacoes(data.data)
            } 
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div>
            <h3>Minhas Movimentações de Estoque</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID Produto</th>
                        <th>ID Operador</th>
                        <th>Tipo de Movimentação</th>
                        <th>Quantidade</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {movimentacoes.map((ordem)=>(
                        <tr key={ordem._id}>
                            <td>{ordem.produtoId}</td>
                            <td>{ordem.usuarioId}</td>
                            <td>{ordem.tipoMovimentacao}</td>
                            <td>{ordem.quantidade}</td>
                            <td>{ordem.data.toDateString()}</td>
                            <td><button>Finalizar Movimentação</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}