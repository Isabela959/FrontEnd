"use client";

import { IUsuario } from "@/models/Usuario";
import { IEquipamento } from "@/models/Equipamento";
import { IOrdemServico } from "@/models/OrdemServico";
import { useEffect, useState } from "react";

export default function DashboardAdmin() {
  const [usuarios, setUsuarios] = useState<IUsuario[]>([]);
  const [equipamentos, setEquipamentos] = useState<IEquipamento[]>([]);
  const [ordens, setOrdens] = useState<IOrdemServico[]>([]);

  useEffect(() => {
    fetchUsuarios();
    fetchEquipamentos();
    fetchOrdens();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const resposta = await fetch("/api/usuarios");
      const data = await resposta.json();
      if (data.success) setUsuarios(data.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  const fetchEquipamentos = async () => {
    try {
      const resposta = await fetch("/api/equipamentos");
      const data = await resposta.json();
      if (data.success) setEquipamentos(data.data);
    } catch (error) {
      console.error("Erro ao buscar equipamentos:", error);
    }
  };

  const fetchOrdens = async () => {
    try {
      const resposta = await fetch("/api/ordemservico");
      const data = await resposta.json();
      if (data.success) setOrdens(data.data);
    } catch (error) {
      console.error("Erro ao buscar ordens de serviço:", error);
    }
  };

  return (
    <div>
      <h2>Dashboard do Administrador</h2>

      {/* ====================== USUÁRIOS ====================== */}
      <section>
        <h3>Usuários Cadastrados</h3>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Função</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u._id}>
                <td>{u.nome}</td>
                <td>{u.email}</td>
                <td>{u.funcao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ====================== EQUIPAMENTOS ====================== */}
      <section>
        <h3>Equipamentos</h3>
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Localização</th>
              <th>Nº de Série</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {equipamentos.map((e) => (
              <tr key={e._id}>
                <td>{e.modelo}</td>
                <td>{e.marca}</td>
                <td>{e.localizacao}</td>
                <td>{e.numSerie}</td>
                <td>{e.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ====================== ORDENS DE SERVIÇO ====================== */}
      <section>
        <h3>Ordens de Serviço</h3>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Descrição</th>
              <th>Tipo de Manutenção</th>
              <th>Status</th>
              <th>Data de Solicitação</th>
              <th>Data de Finalização</th>
              <th>ID Técnico</th>
              <th>ID Equipamento</th>
            </tr>
          </thead>
          <tbody>
            {ordens.map((ordem) => (
              <tr key={ordem._id}>
                <td>{ordem.titulo}</td>
                <td>{ordem.descricao}</td>
                <td>{ordem.tipoManutencao}</td>
                <td>{ordem.status}</td>
                <td>
                  {new Date(ordem.dataSolicitada).toLocaleDateString()}
                </td>
                <td>
                  {ordem.dataFinalizada
                    ? new Date(ordem.dataFinalizada).toLocaleDateString()
                    : "-"}
                </td>
                <td>{ordem.idTecnico}</td>
                <td>{ordem.idEquipamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
