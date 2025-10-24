"use client";

import { IMovimentacao } from "@/models/Movimentacao";
import { IProduto } from "@/models/Produto";
import { useEffect, useState } from "react";

export default function DashboardGerente() {
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [movimentacoes, setMovimentacoes] = useState<IMovimentacao[]>([]);

  useEffect(() => {
    fetchProdutos();
    fetchMovimentacoes();
  }, []);

  const fetchProdutos = async () => {
    try {
      const resposta = await fetch("/api/produtos");
      const data = await resposta.json();
      if (data.success) setProdutos(data.data);
    } catch (error) {
      console.error("Erro ao buscar Produtos:", error);
    }
  };

  const fetchMovimentacoes = async () => {
    try {
      const resposta = await fetch("/api/movimentacoes");
      const data = await resposta.json();
      if (data.success) setMovimentacoes(data.data);
    } catch (error) {
      console.error("Erro ao buscar Movimentações de Produtos:", error);
    }
  };

  return (
    <div>
      <h2>Dashboard do Gerente</h2>

      {/* ====================== Produtos ====================== */}
      <section>
        <h3>Produtos</h3>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>SKU</th>
              <th>Quantidade Mínima</th>
              <th>Quantidade Atual</th>
              <th>Valor Unitário</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((e) => (
              <tr key={e._id}>
                <td>{e.nome}</td>
                <td>{e.sku}</td>
                <td>{e.quantidadeMinima}</td>
                <td>{e.quantidadeAtual}</td>
                <td>{e.valorUnitario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ====================== Movimentações de Estoque ====================== */}
      <section>
        <h3>Movimentações de Estoque</h3>
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
            {movimentacoes.map((movimentacao) => (
              <tr key={movimentacao._id}>
                <td>{movimentacao.produtoId}</td>
                <td>{movimentacao.usuarioId}</td>
                <td>{movimentacao.tipoMovimentacao}</td>
                <td>{movimentacao.quantidade}</td>
                <td>{new Date(movimentacao.data).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}