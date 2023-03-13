import { useContext } from 'react';
import { LoginForm } from '../../../components/form/LoginForm/LoginForm';
import { UserContext } from '../../../provider/UserContext';
import { DivCointainerModal, HeaderModal } from './loginModal.styled';

export const LoginModal = () => {
    const { loginModal } = useContext(UserContext);

    return (
        <DivCointainerModal>
            <HeaderModal>
                <h3>ACESSE SUA CONTA</h3>
            </HeaderModal>

            <LoginForm />
        </DivCointainerModal>
    );
};
