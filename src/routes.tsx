import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/Profile/profile';
import { ProtectedPages } from './pages/.ProtectedPages/ProtectedPages';
import { LogoffPages } from './pages/.LogoffPages/LodoffPages';

const Router = () => (
    <Routes>
        <Route path='/' />
        <Route path='*' />
        <Route path='/' element={<LogoffPages />}>
            <Route path='/register' />
        </Route>
        <Route path='/' element={<ProtectedPages />}>
            <Route path='/movieinfo' />
            <Route path='/profile' element={<ProfilePage />} />
        </Route>
    </Routes>
);

export default Router;
