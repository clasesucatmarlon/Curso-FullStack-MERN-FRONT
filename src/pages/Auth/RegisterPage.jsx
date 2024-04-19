import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, confirmPassword)
    };

    return (
        <form onSubmit={onSubmit} className='space-y-4'>
            <div className='w-full max-w-lg relative'>
                <label
                    htmlFor='name'
                    className='absolute -top-2 left-2 px-4 font-bold text-xs bg-gray-100'
                >
                    Nombre
                </label>
                <input
                    id='name'
                    type='text'
                    className='w-full border border-gray-500/30 bg-transparent py-3 px-5 rounded-full outline-none placeholder:text-gray-400'
                    placeholder='Ingrese nombres'
                    autoComplete='off'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className='w-full max-w-lg relative'>
                <label
                    htmlFor='lastName'
                    className='absolute -top-2 left-2 px-4 font-bold text-xs bg-gray-100'
                >
                    Apellidos
                </label>
                <input
                    id='lastName'
                    type='text'
                    className='w-full border border-gray-500/30 bg-transparent py-3 px-5 rounded-full outline-none placeholder:text-gray-400'
                    placeholder='Ingrese apellidos'
                    autoComplete='off'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className='w-full max-w-lg relative'>
                <label
                    htmlFor='email'
                    className='absolute -top-2 left-2 px-4 font-bold text-xs bg-gray-100'
                >
                    Correo electrónico
                </label>
                <input
                    id='email'
                    type='text'
                    className='w-full border border-gray-500/30 bg-transparent py-3 px-5 rounded-full outline-none placeholder:text-gray-400'
                    placeholder='tucorreo@example.com'
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='w-full max-w-lg relative'>
                <label
                    htmlFor='password'
                    className='absolute -top-2 left-2 px-4 font-bold text-xs bg-gray-100'
                >
                    Contraseña
                </label>
                <input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    className='w-full border border-gray-500/30 bg-transparent py-3 px-5 rounded-full outline-none placeholder:text-gray-400'
                    placeholder='********'
                    autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
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
                <label
                    htmlFor='confirmPassword'
                    className='absolute -top-2 left-2 px-4 font-bold text-xs bg-gray-100'
                >
                    Confirmar contraseña
                </label>
                <input
                    id='confirmPassword'
                    type={showPassword ? 'text' : 'password'}
                    className='w-full border border-gray-500/30 bg-transparent py-3 px-5 rounded-full outline-none placeholder:text-gray-400'
                    placeholder='********'
                    autoComplete='off'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
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
                    ¿Ya tienes una cuenta?{' '}
                    <Link to='/auth/login' className='font-bold hover:underline'>
                        Ingresar
                    </Link>
                </p>
            </div>

        </form>
    )
}

export default RegisterPage;