import { createContext, useState } from "react";

export const HolidayContext = createContext(0);

// @ts-ignore

export const HolidayProvider = ({ children }) => {
    const [count, setCount] = useState<number>(1);

    return (
        <HolidayContext.Provider
            // @ts-ignore
            value={{
                count,
                setCount,
            }}
        >
            {children}
        </HolidayContext.Provider>
    );
};
