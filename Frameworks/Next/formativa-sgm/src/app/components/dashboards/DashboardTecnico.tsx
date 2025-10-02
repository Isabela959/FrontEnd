"use-client";

import { IOrdemServico } from "@/models/OrdemServico";
import { useEffect, useState } from "react";

export default function DashboardTecnico(){
    // armazenar as tarefas em um vetor
    const [ordens, setOrdens] = useState<IOrdemServico[]>([]);

    useEffect(()=> {
        fetchOrdens();
    },[]);

    const fetchOrdens = async () => {
        try {
            const resposta = await fetch("/api/ordemservico"); //http request ->
            const data = await resposta.json();
            if (data.success) {
                setOrdens(data.data)
            } 
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div>
            <h3>Minhas Ordens de Serviço</h3>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Tipo de Manutenção</th>
                        <th>Data de Solicitação</th>
                        <th>Data de Finalização</th>
                        <th>ID Equipamento</th>
                    </tr>
                </thead>
                <tbody>
                    {ordens.map((ordem)=>(
                        <tr key={ordem._id}>
                            <td>{ordem.titulo}</td>
                            <td>{ordem.descricao}</td>
                            <td>{ordem.status}</td>
                            <td>{ordem.tipoManutencao}</td>
                            <td>{ordem.dataSolicitada.toDateString()}</td>
                            <td>{ordem.dataFinalizada?.toDateString()}</td>
                            <td>{ordem.idEquipamento}</td>
                            <td><button>Finalizar Serviço</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}