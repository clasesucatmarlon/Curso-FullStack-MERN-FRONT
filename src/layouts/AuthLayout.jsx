import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {

    const {pathname} = useLocation();
    
    // GENERAR TÍTULO DINÁMICO
    let title ="";

    switch (pathname) {
        case "/auth/login":
            title = "Iniciar sesión";
            break;
        case "/auth/register":
            title = "Crear cuenta";
            break;
        case "/auth/forgot-password":
            title = "Recuperar password";
            break;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1>{pathname.startsWith("/auth/change-password/") ? "Actualizar password" :  title}</h1>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AuthLayout;