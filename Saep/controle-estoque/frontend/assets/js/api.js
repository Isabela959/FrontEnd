// assets/js/api.js
export const API_BASE = 'http://localhost:3012';

export async function apiGet(path){
    const res = await fetch(`${API_BASE}${path}`);
    return res.json();
}

export async function apiPost(path, body){
    const res = await fetch(`${API_BASE}${path}`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(body)
    });
    return res.json();
}

export async function apiPut(path, body){
    const res = await fetch(`${API_BASE}${path}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(body)
    });
    return res.json();
}

export async function apiDelete(path){
    const res = await fetch(`${API_BASE}${path}`, { method: 'DELETE' });
    return res.json();
}
