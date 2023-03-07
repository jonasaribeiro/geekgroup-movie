import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../provider/UserContext';

export const LogoffPages = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user.id) {
            navigate('/');
        }
    }, [user]);

    return user.id ? null : <Outlet />;
};
