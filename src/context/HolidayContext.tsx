import { createContext, useState } from "react";

export const HolidayContext = createContext(0);

// @ts-ignore

export const HolidayProvider = ({ children }) => {
    const [count, setCount] = useState<number>(1);
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);

    return (
        <HolidayContext.Provider
            // @ts-ignore
            value={{
                count,
                setCount,
                setDay,
                day,
                month,
                year,
                setMonth,
                setYear,
            }}
        >
            {children}
        </HolidayContext.Provider>
    );
};
