import { createContext, useState } from "react";

interface HolidayContextProps {
    day: number;
    month: number;
    holidayName: string;
    setDay: (day: number) => void;
    setMonth: (month: number) => void;
    setHolidayName: (holidayName: string) => void;
}

export const HolidayContext = createContext<HolidayContextProps>({
    day: 0,
    month: 0,
    holidayName: "",
    setDay: () => {},
    setMonth: () => {},
    setHolidayName: () => {},
});

// @ts-ignore

export const HolidayProvider = ({ children }) => {
    const [day, setDay] = useState<number>(0);
    const [month, setMonth] = useState<number>(0);
    const [holidayName, setHolidayName] = useState<string>("");

    return (
        <HolidayContext.Provider
            // @ts-ignore
            value={{
                setDay,
                day,
                month,
                holidayName,
                setMonth,
                setHolidayName,
            }}
        >
            {children}
        </HolidayContext.Provider>
    );
};
