import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from "sonner";
import api from "../../lib/Axios";
import Label from "../../components/commons/Label";
import InputPassword from "../../components/commons/InputPassword";
import Input from "../../components/commons/Input";
import { validateEmail } from "../../validations/Email";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      return toast.error("Todos los campos son obligatorios");
    }

    if (!validateEmail(email)) {
      return toast.error("Email no válido");
    }

    if (password.length <= 5) {
      return toast.error("La contraseña debe tener al menos 6 caracteres");
    }

    try {
      const { data } = await api.post("/users/login", {
        email,
        password,
      });

      if (data.response === "success") {
        localStorage.setItem("token-tickets", data.token);
        // setAuth(data.user);
        console.log("DATA: ", data.user)
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      console.log(`[LOGIN_USER_ERROR]: ${error}`);
      toast.error(error.response.data.message);
    }
  };

  // if (auth._id) return <Navigate to="/" />;

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div className="w-full max-w-lg relative">
        <Label contentLabel="Correo electrónico" />
        <Input idInput="inputEmail" contentPlaceholder="correo@correo.com" contentValue={email} funcChange={setEmail} />
      </div>
      <div className="w-full max-w-lg relative">
        <Label contentLabel="Contraseña" />
        <InputPassword idInput="inputPassword" contentPlaceholder="******" contentValue={password} funcChange={setPassword} showPassword={showPassword}/>

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          {showPassword ? (
            <i className="fi fi-rr-unlock"></i>
          ) : (
            <i className="fi fi-rr-lock"></i>
          )}
        </button>
      </div>

      <div className="text-right">
        <Link to="/auth/forgot-password" className="text-sm text-gray-500">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-black text-white rounded-full py-3 px-5"
        >
          Ingresar
        </button>
      </div>
      <div className="text-center">
        <p>
          ¿No tienes una cuenta?{" "}
          <Link to="/auth/register" className="font-bold hover:underline">
            Registrate
          </Link>
        </p>
      </div>
    </form>
  )
}

export default LoginPage;