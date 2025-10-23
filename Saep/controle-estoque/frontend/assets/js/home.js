// home.js

// Função para verificar se usuário está logado
export function verificarLogin() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario'));
  if(!usuario){
    alert('Você precisa fazer login!');
    window.location.href = 'index.html';
  } else {
    document.getElementById('nomeUsuario').textContent = usuario.nome;
  }
}

// Função para logout
export function configurarLogout() {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('usuario');
    window.location.href = 'index.html';
  });
}
