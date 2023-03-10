import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../../../provider/UserContext';
import { Input } from '../../Input/input';

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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<TRegisterFormData> = async (data) => {
        delete data.urlImage;

        await UserRegister(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form_box--title'>
                <h2>Cadastre a sua conta</h2>
                <p> e tenha acesso alista completa de filmes </p>
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
                <Input
                    label='Email'
                    id='email'
                    type='email'
                    placeholder='Digite seu email'
                    error={errors.email}
                    register={register('email')}
                />
                <Input
                    label='Senha'
                    id='password'
                    type='password'
                    placeholder='Digite sua senha'
                    error={errors.password}
                    register={register('password')}
                />
                <Input
                    label='Confirmar senha'
                    id='confirmPassword'
                    type='password'
                    placeholder='Digite seu email'
                    error={errors.confirmPassword}
                    register={register('confirmPassword')}
                />
                <Input
                    label='Url da imagem de perfil'
                    id='urlImage'
                    type='text'
                    placeholder='Insira a url da imagem'
                    error={errors.urlImage}
                    register={register('urlImage')}
                />
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
