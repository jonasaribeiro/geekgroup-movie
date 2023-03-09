import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/Profile/profile';
import { ProtectedPages } from './pages/.ProtectedPages/ProtectedPages';
import { LogoffPages } from './pages/.LogoffPages/LodoffPages';
import { RegisterPage } from './pages/RegisterPage/registerPage';
import { NotFoundPage } from './pages/NotFoundPage/err404';

const Router = () => (
    <Routes>
        <Route path='/' />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<ProtectedPages />}>
            <Route path='/movieinfo' />
            <Route path='/profile' element={<ProfilePage />} />
        </Route>
        <Route path='/' element={<LogoffPages />}>
            <Route path='/register' element={<RegisterPage />} />
        </Route>
    </Routes>
);

export default Router;
