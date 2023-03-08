import { GlobalStyles } from './styles/global';
import { UserProvider } from './provider/UserContext';
import Router from './routes';


function App() {
    return (
        <UserProvider>
            <GlobalStyles />
            <Router />
        </UserProvider>
    );
}

export default App;
