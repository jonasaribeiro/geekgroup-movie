import { GlobalStyles } from './styles/global';
import Router from './routes';
import { ProfilePage } from './pages/Profile/profile';

function App() {
    return (
        <>
            <GlobalStyles />
            <ProfilePage />
        </>
    );
}

export default App;
