import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../provider/UserContext';

export const ProtectedPages = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    console.log(user);

    useEffect(() => {
        if (!localStorage.getItem('@GeekGroup')) {
            navigate('/');
        }
    }, [user]);
    return user.accessToken ? <Outlet /> : null;
};
