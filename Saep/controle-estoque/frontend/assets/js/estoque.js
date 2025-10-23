// estoque.js
import { apiGet, apiPost, apiPut } from './api.js';

// Elementos do DOM
const selectProduto = document.getElementById('selectProduto');
const tipoMov = document.getElementById('tipoMov');
const quantidadeInput = document.getElementById('quantidadeMov');
const dataInput = document.getElementById('dataMov');
const form = document.getElementById('formMov');
const tabelaMov = document.getElementById('tabelaMovimentacoes');

let produtos = [];

// Carregar produtos e ordenar alfabeticamente
export async function carregarProdutos() {
  produtos = await apiGet('/produtos');
  produtos.sort((a,b) => a.nome.localeCompare(b.nome));

  selectProduto.innerHTML = '<option value="">Selecione um produto</option>';
  produtos.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.nome;
    selectProduto.appendChild(opt);
  });
}

// Carregar movimentações (opcional: para exibir histórico)
export async function carregarMovimentacoes() {
  const movs = await apiGet('/movimentacoes');
  tabelaMov.innerHTML = '';
  movs.forEach(m => {
    const prod = produtos.find(p => p.id === m.produtoId);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${m.id}</td>
      <td>${prod ? prod.nome : 'Produto excluído'}</td>
      <td>${m.tipo}</td>
      <td>${m.quantidade}</td>
      <td>${m.data}</td>
    `;
    tabelaMov.appendChild(tr);
  });
}

// Processar movimentação
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const produtoId = parseInt(selectProduto.value);
  const tipo = tipoMov.value;
  const quantidade = parseInt(quantidadeInput.value);
  const data = dataInput.value;

  if(!produtoId || !tipo || !quantidade || !data){
    alert('Preencha todos os campos corretamente!');
    return;
  }

  const produto = produtos.find(p => p.id === produtoId);

  let novaQuantidade = produto.quantidade;
  if(tipo === 'entrada') novaQuantidade += quantidade;
  if(tipo === 'saida') novaQuantidade -= quantidade;

  if(novaQuantidade < 0){
    alert('Quantidade insuficiente para saída!');
    return;
  }

  // Atualizar produto
  await apiPut(`/produtos/${produtoId}`, {...produto, quantidade: novaQuantidade});

  // Registrar movimentação
  await apiPost('/movimentacoes', {
    produtoId,
    tipo,
    quantidade,
    data,
    usuario: JSON.parse(sessionStorage.getItem('usuario')).nome
  });

  // Alerta se abaixo do estoque mínimo
  if(novaQuantidade < produto.estoqueMinimo){
    alert(`Atenção! Estoque do produto "${produto.nome}" abaixo do mínimo (${produto.estoqueMinimo})`);
  }

  // Resetar formulário
  form.reset();
  carregarMovimentacoes();
});
