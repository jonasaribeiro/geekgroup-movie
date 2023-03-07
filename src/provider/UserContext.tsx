import { ReactNode, createContext, useState } from 'react';

interface iUser {
    name: string;
    email: string;
    img: string;
}

interface iMovie {
    title: string;
    id: Number;
}

interface iUserContext {
    user: iUser;
    setUser: React.Dispatch<React.SetStateAction<iUser>>;
    savedMovies: iMovie[];
    setSavedMovies: React.Dispatch<React.SetStateAction<iMovie[]>>;
}

const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState({} as iUser);
    const [savedMovies, setSavedMovies] = useState({} as iMovie[]);

    return (
        <UserContext.Provider
            value={{ user, setUser, savedMovies, setSavedMovies }}
        >
            {children}
        </UserContext.Provider>
    );
};
