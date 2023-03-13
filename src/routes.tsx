import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/Profile/profile';
import { ProtectedPages } from './pages/.ProtectedPages/ProtectedPages';
import { LogoffPages } from './pages/.LogoffPages/LodoffPages';
import { RegisterPage } from './pages/RegisterPage/registerPage';
import { NotFoundPage } from './pages/NotFoundPage/err404';
import { MoviePage } from './pages/MoviePage/moviepage';
import { LoginPage } from './pages/LoginPage/LoginPage';

const Router = () => (
    <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<ProtectedPages />}>
            <Route path='/movieinfo/:id' element={<MoviePage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Route>
        <Route path='/' element={<LogoffPages />}>
            <Route path='/register' element={<RegisterPage />} />
        </Route>
    </Routes>
);

export default Router;
