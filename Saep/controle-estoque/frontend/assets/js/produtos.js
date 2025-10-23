// produtos.js
import { apiGet, apiPost, apiPut, apiDelete } from './api.js';

// Elementos do DOM
const tabela = document.getElementById('tabelaProdutos');
const form = document.getElementById('formProduto');
const buscaInput = document.getElementById('buscaProduto');

// Carregar produtos do JSON Server
export async function carregarProdutos(filtro = '') {
  let produtos = await apiGet('/produtos');

  // Filtrar se houver termo de busca
  if(filtro){
    produtos = produtos.filter(p => p.nome.toLowerCase().includes(filtro.toLowerCase()));
  }

  // Limpar tabela
  tabela.innerHTML = '';

  // Preencher tabela
  produtos.forEach(prod => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${prod.id}</td>
      <td>${prod.nome}</td>
      <td>${prod.quantidade}</td>
      <td>${prod.estoqueMinimo}</td>
      <td>
        <button onclick="editarProduto(${prod.id})">Editar</button>
        <button onclick="deletarProduto(${prod.id})">Excluir</button>
      </td>
    `;
    tabela.appendChild(tr);
  });
}

// Adicionar produto
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const estoqueMinimo = parseInt(document.getElementById('estoqueMinimo').value);

  if(!nome || quantidade < 0 || estoqueMinimo < 0){
    alert('Preencha os campos corretamente!');
    return;
  }

  await apiPost('/produtos', { nome, quantidade, estoqueMinimo });
  form.reset();
  carregarProdutos();
});

// Busca
buscaInput.addEventListener('input', () => {
  carregarProdutos(buscaInput.value);
});

// Editar produto
window.editarProduto = async function(id){
  const produtos = await apiGet('/produtos');
  const prod = produtos.find(p => p.id === id);
  if(!prod) return alert('Produto não encontrado!');

  const novoNome = prompt('Novo nome:', prod.nome) || prod.nome;
  const novaQuantidade = parseInt(prompt('Nova quantidade:', prod.quantidade)) || prod.quantidade;
  const novoMinimo = parseInt(prompt('Novo estoque mínimo:', prod.estoqueMinimo)) || prod.estoqueMinimo;

  await apiPut(`/produtos/${id}`, { nome: novoNome, quantidade: novaQuantidade, estoqueMinimo: novoMinimo });
  carregarProdutos();
}

// Deletar produto
window.deletarProduto = async function(id){
  if(confirm('Deseja realmente excluir?')){
    await apiDelete(`/produtos/${id}`);
    carregarProdutos();
  }
}

// Inicializar
carregarProdutos();
