import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/Profile/profile';
import { ProtectedPages } from './pages/.ProtectedPages/ProtectedPages';
import { LogoffPages } from './pages/.LogoffPages/LodoffPages';
import { RegisterPage } from './pages/RegisterPage/registerPage';
import { MoviePage } from './pages/MoviePage/moviepage';

const Router = () => (
    <Routes>
        <Route path='/' />
        <Route path='*' />
        <Route path='/movieinfo/:id' element={<MoviePage />} />
        <Route path='/' element={<ProtectedPages />}>
            {/* <Route path='/movieinfo/:id' /> */}
            <Route path='/profile' element={<ProfilePage />} />
        </Route>
        <Route path='/' element={<LogoffPages />}>
            <Route path='/register' element={<RegisterPage />} />
        </Route>
    </Routes>
);

export default Router;
