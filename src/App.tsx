import { GlobalStyles } from './styles/global';
import Router from './routes';
import { UserProvider } from './provider/UserContext';

function App() {
    return (
        <UserProvider>
            <GlobalStyles />
            <Router />
        </UserProvider>
    );
}

export default App;
