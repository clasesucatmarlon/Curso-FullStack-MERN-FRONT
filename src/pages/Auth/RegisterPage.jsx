import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { validateEmail } from '../../validations/Email';
import Label from '../../components/commons/Label';
import Input from '../../components/commons/Input';
import InputPassword from '../../components/commons/InputPassword';
import api from '../../lib/Axios';

const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        if ([firstName, lastName, email, password, confirmPassword].includes('')) {
            return toast.error('Todos los campos son obligatorios');
        }

        if (!validateEmail(email)) {
            return toast.error('Email no válido');
        }

        if (password.length <= 5) {
            return toast.error('La contraseña debe contener al menos 6 caracteres');
        }

        if (password !== confirmPassword) {
            return toast.error('Las contraseñas no coinciden');
        }

        // PROCESO PARA CREAR USUARIO
        try {
            const { data } = await api.post("/users", { firstName, lastName, email, password });

            if (data.response === 'success') {
                toast.success(data.message);
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate('/auth/confirm-account');
            }

        } catch (error) {
            console.log(`[CREATE_USER_ERROR]: ${error}`);
            toast.error(error.response.data.message);
        }

    };

    return (
        <form onSubmit={onSubmit} className='space-y-4'>
            <div className='w-full max-w-lg relative'>
                <Label contentLabel="Nombre" />
                <Input contentPlaceholder="Ingrese nombres" contentValue={firstName} funcChange={setFirstName} />
            </div>
            <div className='w-full max-w-lg relative'>
                <Label contentLabel="Apellidos" />
                <Input contentPlaceholder="Ingrese apellidos" contentValue={lastName} funcChange={setLastName} />
            </div>
            <div className='w-full max-w-lg relative'>
                <Label contentLabel="Correo electrónico" />
                <Input contentPlaceholder="correo@correo.com" contentValue={email} funcChange={setEmail} />
            </div>
            <div className='w-full max-w-lg relative'>
                <Label contentLabel="Contraseña" />
                <InputPassword contentPlaceholder="******" contentValue={password} funcChange={setPassword} showPassword={showPassword} />
                <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hover:bg-gray-200 transition-colors duration-300'
                >
                    {showPassword ? (
                        <i className='fi fi-rr-unlock'></i>
                    ) : (
                        <i className='fi fi-rr-lock'></i>
                    )}
                </button>
            </div>
            <div className='w-full max-w-lg relative'>
                <Label contentLabel="Confirmar contraseña" />
                <InputPassword contentPlaceholder="******" contentValue={confirmPassword} funcChange={setConfirmPassword} showPassword={showPassword} />
                <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hover:bg-gray-200 transition-colors duration-300'
                >
                    {showPassword ? (
                        <i className='fi fi-rr-unlock'></i>
                    ) : (
                        <i className='fi fi-rr-lock'></i>
                    )}
                </button>
            </div>

            <div>
                <button
                    type='submit'
                    className='w-full bg-black text-white rounded-full py-3 px-5'
                >
                    Registrarme
                </button>
            </div>
            <div className='text-center'>
                <p>
                    ¿Ya tengo cuenta{' '}
                    <Link to='/auth/login' className='font-bold hover:underline'>
                        Ingresar
                    </Link>
                </p>
            </div>

        </form>
    )
}

export default RegisterPage;