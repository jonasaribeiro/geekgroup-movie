import { ReactNode, createContext } from 'react';

interface iDescriptionContext {
    minuteToHour: (minutes: number) => string;
    returnImg: (image: string) => string;
}

export const DescriptionContext = createContext({} as iDescriptionContext);

export const DescriptionProvider = ({ children }: { children: ReactNode }) => {
    function minuteToHour(minutes: number) {
        const hour = (minutes / 60).toFixed(0);
        const minute = minutes % 60;
        return `${hour}h ${minute}m`;
    }

    function returnImg(image: string) {
        return `https://image.tmdb.org/3/t/p/w500${image}`;
    }

    return (
        <DescriptionContext.Provider
            value={{
                minuteToHour,
                returnImg,
            }}
        >
            {children}
        </DescriptionContext.Provider>
    );
};
