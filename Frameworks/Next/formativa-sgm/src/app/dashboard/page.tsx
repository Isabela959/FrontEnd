"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardTecnico from "../components/dashboards/DashboardTecnico";
import DashboardAdmin from "../components/dashboards/DashboardAdmin";
import DashboardGerente from "../components/dashboards/DashboardGerente";

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
        if(funcao?.toLowerCase() === "admin"){
            return <DashboardAdmin/>;
        }else if(funcao === "gerente"){
            return <DashboardGerente/>;
        }else if(funcao === "tecnico"){
            return <DashboardTecnico/>;
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