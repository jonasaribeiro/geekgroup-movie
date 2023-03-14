import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../../../provider/UserContext';
import { Input } from '../../input/input';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';
import { MdEmail, MdOutlineLink } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';

import { ScaleLoader } from 'react-spinners';

export interface TRegisterFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string | undefined;
    urlImage?: string;
}

const schema = yup
    .object({
        name: yup.string().required('* Campo obrigatório!'),
        email: yup
            .string()
            .required('* Campo obrigatório!')
            .email('Digite um email!'),
        password: yup
            .string()
            .required('* Campo obrigatório!')
            .matches(/.{6,}/, 'No mínimo 6 caracteres!'),
        confirmPassword: yup
            .string()
            .required('* Campo obrigatório!')
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais!'),
    })
    .required();

export const RegisterForm = () => {
    const { UserRegister, loading } = useContext(UserContext);
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPass, setShowConfirmPass] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<TRegisterFormData> = async (data) => {
        delete data.confirmPassword;

        await UserRegister(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form_box--title'>
                <h2>Cadastre a sua conta</h2>
                <p> e tenha acesso a lista completa de filmes </p>
            </div>
            <div className='form_box--inputs'>
                <Input
                    label='Nome'
                    id='name'
                    type='text'
                    placeholder='Digite seu nome'
                    error={errors.name}
                    register={register('name')}
                />
                <span className='user_img--name' title='nome do usuário'>
                    <FaUserAlt />
                </span>
                <Input
                    label='Email'
                    id='email'
                    type='email'
                    placeholder='Digite seu email'
                    error={errors.email}
                    register={register('email')}
                />
                <span className='mail_img' title='email'>
                    <MdEmail />
                </span>
                <Input
                    label='Senha'
                    id='password'
                    type={showPassword ? 'password' : 'text'}
                    placeholder='Digite sua senha'
                    error={errors.password}
                    register={register('password')}
                />
                <span
                    className='lock_img--password'
                    title={showPassword ? 'mostrar senha' : 'esconder senha'}
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <BsFillLockFill /> : <BsFillUnlockFill />}
                </span>

                <Input
                    label='Confirmar senha'
                    id='confirmPassword'
                    type={showConfirmPass ? 'password' : 'text'}
                    placeholder='confirme sua senha'
                    error={errors.confirmPassword}
                    register={register('confirmPassword')}
                />
                <span
                    title={
                        showPassword
                            ? 'mostrar confirmar senha'
                            : 'esconder confirmar senha'
                    }
                    className='lock_img--confirmPassword'
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                >
                    {showConfirmPass ? (
                        <BsFillLockFill />
                    ) : (
                        <BsFillUnlockFill />
                    )}
                </span>
                <Input
                    label='Url da imagem de perfil'
                    id='urlImage'
                    type='text'
                    placeholder='Insira a url da imagem'
                    error={errors.urlImage}
                    register={register('urlImage')}
                />
                <span
                    className='link_img--urlImg'
                    title='link para foto de perfil'
                >
                    <MdOutlineLink />
                </span>
            </div>
            <button type='submit' disabled={loading ? true : false}>
                {loading ? (
                    <ScaleLoader
                        color={'#F8F9FA'}
                        loading={loading}
                        height={25}
                    />
                ) : (
                    'Cadastrar'
                )}
            </button>
        </form>
    );
};
