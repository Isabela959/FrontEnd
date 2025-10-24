"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardGestor from "../components/dashboards/DashboardGestor";
import DashboardOperador from "../components/dashboards/DashboardOperador";

 //tela de UI

export default function DashboardPage(){
    const route = useRouter();
    const [funcao, setFuncao] = useState<string | null>(null);

    //antes de carregar os elementos visuais
    useEffect(()=>{
        const funcao = localStorage.getItem("funcao");
        if(!funcao){
            //se não tiver a função armazenada no localStorage -> devolve o usuário para tela de login
            route.push("/login");
        } else{
            //atribui a variavel setFuncao -> o valor da LocalStorage
            setFuncao(funcao);
        }
    });

    // método de logout
    const handleLogout = async()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("funcao");
        route.push("/login");
    };

    //montar a tela de acordo com a função do usuário
    const renderDashboard = () =>{
        if(funcao?.toLowerCase() === "gestor"){
            return <DashboardGestor/>;
        }else if(funcao === "operador"){
            return <DashboardOperador/>;
        }
    }

    // reactDOM
    return(
        <div>
            <header>
                <h1>Bem-Vindo</h1>
                <button onClick={handleLogout}>Logout</button>
            </header>
            <main>
                {renderDashboard()}
            </main>
        </div>
    );
}