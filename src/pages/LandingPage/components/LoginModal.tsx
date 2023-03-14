import { LoginForm } from '../../../components/form/LoginForm/LoginForm';
import { DivCointainerModal, HeaderModal } from './loginModal.styled';

export const LoginModal = () => {
    return (
        <DivCointainerModal>
            <HeaderModal>
                <h3>ACESSE SUA CONTA</h3>
            </HeaderModal>

            <LoginForm />
        </DivCointainerModal>
    );
};
