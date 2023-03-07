import { Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';

const Router = () => (
    <Routes>
        <Route path='/RegisterPage' element={<RegisterPage />} />
        <Route />
        <Route />
        <Route />
    </Routes>
);

export default Router;
