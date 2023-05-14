import { createContext, useState } from "react";

export const HolidayContext = createContext(0);

// @ts-ignore

export const HolidayProvider = ({ children }) => {
    const [count, setCount] = useState<number>(1);
    const [day, setDay] = useState<number>(0);
    const [month, setMonth] = useState<number>(0);
    const [year, setYear] = useState<number>(0);
    const [holidayName, setHolidayName] = useState<string>("");

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
                holidayName,
                setMonth,
                setYear,
                setHolidayName,
            }}
        >
            {children}
        </HolidayContext.Provider>
    );
};
