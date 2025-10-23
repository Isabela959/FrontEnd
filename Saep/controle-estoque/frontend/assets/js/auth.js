// assets/js/auth.js
import { apiGet } from './api.js';

export async function login(email, senha){
    const usuarios = await apiGet('/usuarios');
    const user = usuarios.find(u => u.email === email && u.senha === senha);
    return user || null;
}

export function logout(){
    sessionStorage.removeItem('usuario');
    window.location.href = 'index.html';
}

export function verificarLogin(){
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    if(!usuario){
        alert('Você precisa fazer login!');
        window.location.href = 'index.html';
    }
    return usuario;
}
