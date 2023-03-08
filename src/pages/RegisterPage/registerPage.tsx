import { Input } from '../../components/Input/input';
import { useForm } from 'react-hook-form';
import { TInputProps } from '../../components/Input/input';
import { StyledRegisterPage } from './style';
import { Header } from '../../components/header/header';
import { Img } from '../../components/header/header.styled';
import logo from '../../assets/img/logo.svg';

export const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TInputProps>();
    return (
        <StyledRegisterPage>
            <figure>
                <Img src={logo} alt='' />
            </figure>

            <Header>
                <button className="home_btn" > Home </button>
            </Header>

            <form>
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
                        id='ConfirmPassword'
                        type='password'
                        placeholder='Digite seu email'
                        error={errors.ConfirmPassword}
                        register={register('ConfirmPassword')}
                    />
                    <Input
                        label='url da imagem de perfil'
                        id='urlImage'
                        type='text'
                        placeholder='Insira a url da imagem'
                        error={errors.urlImage}
                        register={register('urlImage')}
                    />
                </div>
                <button type='submit'>Cadastrar</button>
            </form>
        </StyledRegisterPage>
    );
};
