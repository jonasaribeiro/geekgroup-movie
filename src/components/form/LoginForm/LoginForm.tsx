import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormModal } from '../../../pages/LandingPage/components/loginModal.styled';
import { UserContext } from '../../../provider/UserContext';
import { Input } from '../../input/input';
import { ScaleLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

export interface ILoginFormValues {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().required('* Campo obrigatório!').email(),
    password: yup.string().required('* Campo obrigatório!'),
});

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormValues>({ resolver: yupResolver(schema) });
    const { userLogin, closeModal, loading } = useContext(UserContext);

    const submit: SubmitHandler<ILoginFormValues> = (data) => {
        userLogin(data);
    };

    return (
        <FormModal onSubmit={handleSubmit(submit)}>
            <Input
                label=''
                type='text'
                register={register('email')}
                error={errors.email}
                id={''}
                placeholder={'Digite seu e-mail aqui...'}
            />
            <Input
                label=''
                type='password'
                register={register('password')}
                error={errors.password}
                id={''}
                placeholder={'Digite sua senha aqui...'}
            />
            <p>
                Não possui conta?{' '}
                <span>
                    {' '}
                    <Link to='/register'>Clique aqui</Link>
                </span>
            </p>
            <button type='submit' disabled={loading ? true : false}>
                {loading ? (
                    <ScaleLoader
                        color={'#F8F9FA'}
                        loading={loading}
                        height={25}
                    />
                ) : (
                    'Entrar'
                )}
            </button>
            <button onClick={() => closeModal()}>Sair</button>
        </FormModal>
    );
};
