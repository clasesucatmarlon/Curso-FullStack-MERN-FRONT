import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const MainLayout = () => {
    const { auth, isLoading, logout } = useAuth();

    if (isLoading) {
        return (
            <p>Cargando</p>
        )
    }

    return (
        <>
            {
                auth._id ? (
                    <div>
                        <button onClick={() => logout()}>Cerrar sesión</button>
                        <h3>{auth.firstName} {auth.lastName}</h3>
                        <Outlet />
                    </div>
                ) : (
                    <Navigate to="/auth/login" />
                )
            }

        </>
    )
}

export default MainLayout;