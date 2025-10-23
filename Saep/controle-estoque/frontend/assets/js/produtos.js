// produtos.js
const tabela = document.getElementById('tabelaProdutos');
const form = document.getElementById('formProduto');

// Função para chamar o JSON Server
async function apiGet(endpoint) {
  const res = await fetch(`http://localhost:3000${endpoint}`);
  return res.json();
}

async function apiPost(endpoint, data) {
  await fetch(`http://localhost:3000${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

async function apiPut(endpoint, data) {
  await fetch(`http://localhost:3000${endpoint}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

async function apiDelete(endpoint) {
  await fetch(`http://localhost:3000${endpoint}`, {
    method: 'DELETE'
  });
}

// Carregar produtos
async function carregarProdutos() {
  const produtos = await apiGet('/produtos');
  tabela.innerHTML = '';

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
function adicionarProduto(e) {
  e.preventDefault();

  const nome = document.getElementById('nomeProduto').value.trim();
  const quantidade = parseInt(document.getElementById('quantidadeProduto').value);
  const estoqueMinimo = parseInt(document.getElementById('estoqueMinimo').value);

  if (!nome || isNaN(quantidade) || isNaN(estoqueMinimo) || quantidade < 0 || estoqueMinimo < 0) {
    alert('Preencha os campos corretamente!');
    return;
  }

  apiPost('/produtos', { nome, quantidade, estoqueMinimo }).then(() => {
    form.reset();
    carregarProdutos();
  });
}

// Editar produto
function editarProduto(id) {
  apiGet('/produtos').then(produtos => {
    const prod = produtos.find(p => p.id === id);
    if (!prod) return alert('Produto não encontrado!');

    const novoNome = prompt('Novo nome:', prod.nome);
    if (novoNome === null) return;

    const novaQuantidade = prompt('Nova quantidade:', prod.quantidade);
    if (novaQuantidade === null) return;

    const novoMinimo = prompt('Novo estoque mínimo:', prod.estoqueMinimo);
    if (novoMinimo === null) return;

    apiPut(`/produtos/${id}`, {
      nome: novoNome,
      quantidade: parseInt(novaQuantidade),
      estoqueMinimo: parseInt(novoMinimo)
    }).then(() => carregarProdutos());
  });
}

// Deletar produto
function deletarProduto(id) {
  if (!confirm('Deseja realmente excluir?')) return;
  apiDelete(`/produtos/${id}`).then(() => carregarProdutos());
}

// Inicializar
form.addEventListener('submit', adicionarProduto);
carregarProdutos();
