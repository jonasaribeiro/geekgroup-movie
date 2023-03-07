import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/Profile/profile';
import { ProtectedPages } from './pages/.ProtectedPages/ProtectedPages';
import { LogoffPages } from './pages/.LogoffPages/LodoffPages';

const Router = () => (
    <Routes>
        {/* LandingPage */}
        <Route path='/' />
        {/* Pagina de erro */}
        <Route path='*' />
        <Route path='/' element={<ProtectedPages />}>
            <Route path='/movieinfo' />
            <Route path='/profile' element={<ProfilePage />} />
        </Route>
        <Route path='/' element={<LogoffPages />}>
            <Route path='/register' />
        </Route>
    </Routes>
);

export default Router;
