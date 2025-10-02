import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/dist/server/api-utils";

export default async function DashboardPage(){
    const session = await getServerSession(authOptions);

    // se não houver sessão, volta para o login
    if (!session) {
        redirect("/login");
    }

    const renderDashboard = () =>{
        switch (session.user?.role) {
            case "admin":
                return <DashboardAdmin/>;   
                break;
            case "gerente":
                return <DashboardGerente/>;   
                break;
            case "tecnico":
                return <DashboardTecnico/>;   
                break;
            default:
                <p>Tipo de Usuário Desconhecido, Contate o Adminitrador</p>
                break;
        }
    };

    return(
        <div>
            <header>
                <h1>Bem-Vindo, {session.user?.name}!</h1>
                <LogoutButton/>
            </header>
            <main>
                {renderDashboard()}
            </main>
        </div>
    )
}