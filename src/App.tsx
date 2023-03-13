import { GlobalStyles } from './styles/global';
import Router from './routes';
import 'react-toastify/ReactToastify.css';
import { UserProvider } from './provider/UserContext';
import { ToastContainer } from 'react-toastify';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MoviePage } from './pages/MoviePage/moviepage';

function App() {
    return (
        <UserProvider>
            <GlobalStyles />
            <LoginPage />
            <Router />
            <ToastContainer />
        </UserProvider>
    );
}

export default App;
