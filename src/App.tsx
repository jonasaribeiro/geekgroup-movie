import { GlobalStyles } from './styles/global';
import Router from './routes';
import { UserProvider } from './provider/UserContext';
import { UserProvider } from './provider/UserContext';
import { MoviePage } from './pages/MoviePage/moviepage';

function App() {
    return (
        <UserProvider>
            <GlobalStyles />
            <Router />
        </UserProvider>
    );
}

export default App;
