"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

 //interface do usuário

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const route = useRouter(); // rotas de navegação em SPA Single Page Application

    // ação quando enviar o formulário
    const handleSubmit = async (e: React.FormEvent) =>{ 
        e.preventDefault(); // evita o comportamento padrão do html
        setError(""); // limpar a mensagem de erro quando enviar a senha e email

        try {
            const response = await fetch(
                "/api/usuarios/login",
                {
                    method:"POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify({email, senha})
                }
            );
            // analisar a resposta obtida
            const data = await response.json() // converte para json
            if (data.success) {
                // armazenar as informações obtidas do login no localStorage
                localStorage.setItem("token", data.token);
                localStorage.setItem("funcao", data.usuario.funcao);
                route.push("/dashboard"); // navega para a tela de dashboard
            }else{
                const erroData = data.error();
                setError(erroData.message || "Falha de Login");
            }
        } catch (error) {
            console.error("Erro de Login: ", error);
            setError("Erro de Servidor: "+ error);
        }
    }

    // REACTDOM
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p style={{color: "red"}}>{error}</p>}
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}
                    required/>
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" value={senha} onChange={(e)=> setSenha(e.target.value)}
                    required/>
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}