import { apiGet, apiPost } from './api.js';
import { verificarLogin } from './auth.js';

const selectProduto = document.getElementById('selectProduto');
const tipoMov = document.getElementById('tipoMov');
const quantidadeMov = document.getElementById('quantidadeMov');
const dataMov = document.getElementById('dataMov');
const formMov = document.getElementById('formMov');
const tabelaMov = document.getElementById('tabelaMovimentacoes');

const usuario = verificarLogin();

// Carregar produtos no select
export async function carregarProdutos() {
  const produtos = await apiGet('/produtos');
  selectProduto.innerHTML = '<option value="">Selecione um produto</option>';

  produtos.forEach(prod => {
    const option = document.createElement('option');
    option.value = prod.id; // ID do produto
    option.textContent = prod.nome;
    selectProduto.appendChild(option);
  });
}

// Carregar movimentações na tabela
export async function carregarMovimentacoes() {
  const movimentacoes = await apiGet('/movimentacoes');
  const produtos = await apiGet('/produtos');
  const usuarios = await apiGet('/usuarios');

  tabelaMov.innerHTML = '';

  movimentacoes.forEach(mov => {
    const produto = produtos.find(p => p.id === mov.produtoId);
    const user = usuarios.find(u => u.id === mov.usuarioId);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${mov.id}</td>
      <td>${produto ? produto.nome : 'Produto removido'}</td>
      <td>${mov.tipoMovimento}</td>
      <td>${mov.quantidade}</td>
      <td>${mov.data}</td>
      <td>${user ? user.nome : 'Usuário removido'}</td>
    `;
    tabelaMov.appendChild(tr);
  });
}

// Registrar movimentação
formMov.addEventListener('submit', async (e) => {
  e.preventDefault();

  const produtoId = parseInt(selectProduto.value);
  const tipo = tipoMov.value;
  const quantidade = parseInt(quantidadeMov.value);
  const data = dataMov.value;

  if (!produtoId || !tipo || !quantidade || !data) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  const novaMovimentacao = {
    produtoId,
    usuarioId: usuario.id,
    tipoMovimento: tipo,
    quantidade,
    data
  };

  await apiPost('/movimentacoes', novaMovimentacao);

  // Atualizar tabela
  carregarMovimentacoes();

  // Resetar formulário
  formMov.reset();
});

// Inicializar
carregarProdutos().then(() => carregarMovimentacoes());
