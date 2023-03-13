import { GlobalStyles } from './styles/global';
import Router from './routes';
import 'react-toastify/ReactToastify.css';
import { UserProvider } from './provider/UserContext';
import { ToastContainer } from 'react-toastify';
import { DescriptionProvider } from './provider/DescriptionContext';

function App() {
    return (
        <UserProvider>
            <GlobalStyles />
            <Router />
            <ToastContainer />
        </UserProvider>
    );
}

export default App;
