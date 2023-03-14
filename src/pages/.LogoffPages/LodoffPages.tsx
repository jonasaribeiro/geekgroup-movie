import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../provider/UserContext';

export const LogoffPages = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user.accessToken) {
            navigate('/');
        }
    }, [user]);
    console.log(user);
    return user.accessToken ? null : <Outlet />;
};
