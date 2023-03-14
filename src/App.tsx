import { GlobalStyles } from './styles/global';
import Router from './routes';
import 'react-toastify/ReactToastify.css';
import { UserProvider } from './provider/UserContext';
import { MoviesProvider } from './provider/MoviesContext';
import { ToastContainer } from 'react-toastify';
import { DescriptionProvider } from './provider/DescriptionContext';
function App() {
    return (
        <UserProvider>
            <MoviesProvider>
                <DescriptionProvider>
                    <GlobalStyles />
                    <Router />
                    <ToastContainer />
                </DescriptionProvider>
            </MoviesProvider>
        </UserProvider>
    );
}

export default App;
