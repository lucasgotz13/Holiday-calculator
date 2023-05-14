import { useContext, useEffect, useState } from "react";
import { HolidayContext } from "../context/HolidayContext";

const HOLIDAYS = [
    {
        date: new Date("2023-01-01"),
        name: "Año nuevo",
    },
    {
        date: new Date("2023-03-24"),
        name: "Día Nacional de la Memoria por la Verdad y la Justicia",
    },
    {
        date: new Date("2023-04-07"),
        name: "Viernes Santo",
    },
    {
        date: new Date("2023-05-25"),
        name: "Día de la Revolución de Mayo",
    },
    {
        date: new Date("2023-06-20"),
        name: "Paso a la Inmortalidad del General Manuel Belgrano",
    },
    {
        date: new Date("2023-08-21"),
        name: "Paso a la Inmortalidad del General José de San Martín",
    },
    {
        date: new Date("2023-11-20"),
        name: "Día de la Soberanía Nacional",
    },
];

function HolidayForm() {
    const [dayValue, setDayValue] = useState<string>();
    const [monthValue, setMonthValue] = useState<string>();
    //@ts-ignore
    const { day, month, setDay, setMonth } = useContext(HolidayContext);

    const handleForm = (e: object) => {
        //@ts-ignore
        e.preventDefault();
        const today: Date = new Date(`2023-${monthValue}-${dayValue}`);
        //@ts-ignore
        if (isNaN(today)) return;
        const nextHoliday = HOLIDAYS.find(
            (holiday) => holiday.date > today
        ) || {
            ...HOLIDAYS[0],
            date: new Date(
                HOLIDAYS[0].date.getFullYear() + 1,
                HOLIDAYS[0].date.getMonth(),
                HOLIDAYS[0].date.getDate() + 1
            ),
        };

        const diferenciaEnMilisegundos: number =
            nextHoliday.date.getTime() - today.getTime();
        const diferenciaEnDias: number = Math.round(
            diferenciaEnMilisegundos / 86400000
        );
        const diferenciaEnMeses: number = Math.floor(diferenciaEnDias / 30);

        handleDayMonth(today, diferenciaEnDias, diferenciaEnMeses);
    };

    const handleDayMonth = (
        today: Date,
        diferenciaEnDias: number,
        diferenciaEnMeses: number
    ) => {
        if (
            (diferenciaEnDias >= 31 && (today.getMonth() + 1) % 2 === 0) ||
            (diferenciaEnDias >= 31 && today.getMonth() + 1 === 8)
        ) {
            setDay(diferenciaEnDias - 31);
            setMonth(diferenciaEnMeses);
        } else if (diferenciaEnDias % 30 === 0) {
            setDay(0);
            setMonth(diferenciaEnMeses);
        } else if (diferenciaEnDias >= 30 && (today.getMonth() + 1) % 2 !== 0) {
            setDay(diferenciaEnDias - 30 * diferenciaEnMeses);
            setMonth(diferenciaEnMeses);
        } else {
            setDay(diferenciaEnDias);
            setMonth(diferenciaEnMeses);
        }
    };

    useEffect(() => {
        const today = new Date();
        const nextHoliday = HOLIDAYS.find(
            (holiday) => holiday.date > today
        ) || {
            ...HOLIDAYS[0],
            date: new Date(
                HOLIDAYS[0].date.getFullYear() + 1,
                HOLIDAYS[0].date.getMonth(),
                HOLIDAYS[0].date.getDate() + 1
            ),
        };

        const diferenciaEnMilisegundos =
            nextHoliday.date.getTime() - today.getTime();

        const diferenciaEnDias = Math.round(
            diferenciaEnMilisegundos / 86400000
        );
        const diferenciaEnMeses = Math.floor(diferenciaEnDias / 30);

        handleDayMonth(today, diferenciaEnDias, diferenciaEnMeses);
    }, []);

    return (
        <form className="mt-20 flex items-center gap-5 justify-center">
            <div className="flex flex-col">
                <label
                    htmlFor="day"
                    className="text-MentorSmokeyGrey text-xl tracking-widest"
                >
                    Day
                </label>
                <input
                    className="max-w-xs p-5 text-inputSize border-2 border-white rounded-md  outline-none focus:border-MentorPurple caret-MentorPurple"
                    type="number"
                    name="day"
                    id="day"
                    placeholder="24"
                    onChange={(e) => setDayValue(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label
                    htmlFor="month"
                    className="text-MentorSmokeyGrey text-xl tracking-widest"
                >
                    Month
                </label>
                <input
                    className="max-w-xs p-5 border-2 text-inputSize border-white rounded-md outline-none focus:border-MentorPurple caret-MentorPurple"
                    type="number"
                    name="month"
                    id="month"
                    placeholder="05"
                    onChange={(e) => setMonthValue(e.target.value)}
                />
            </div>
            <button onClick={handleForm}>Submit</button>
        </form>
    );
}
export default HolidayForm;
