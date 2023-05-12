const HOLIDAYS = [
    {
        date: new Date("01/01/2023"),
        name: "Año nuevo",
    },
    {
        date: new Date("24/03/2023"),
        name: "Día Nacional de la Memoria por la Verdad y la Justicia",
    },
    {
        date: new Date("07/04/2023"),
        name: "Viernes Santo",
    },
    {
        date: new Date("25/05/2023"),
        name: "Día de la Revolución de Mayo",
    },
    {
        date: new Date("20/06/2023"),
        name: "Paso a la Inmortalidad del General Manuel Belgrano",
    },
    {
        date: new Date("21/08/2023"),
        name: "Paso a la Inmortalidad del General José de San Martín",
    },
    {
        date: new Date("20/11/2023"),
        name: "Día de la Soberanía Nacional",
    },
];

const today = new Date();
const nextHoliday = HOLIDAYS.find((holiday) => holiday.date > today) || {
    ...HOLIDAYS[0],
    date: new Date(
        HOLIDAYS[0].date.getFullYear() + 1,
        HOLIDAYS[0].date.getMonth(),
        HOLIDAYS[0].date.getDate() + 1
    ),
};

const diferenciaEnMilisegundos = nextHoliday.date.getTime() - today.getTime();
const diferenciaEnDias = Math.round(diferenciaEnMilisegundos / 86400000);
function HolidayForm() {
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
                />
            </div>
            <div className="flex flex-col">
                <label
                    htmlFor="year"
                    className="text-MentorSmokeyGrey text-xl tracking-widest"
                >
                    Year
                </label>
                <input
                    className="max-w-xs p-5 text-inputSize border-2 border-white rounded-md outline-none focus:border-MentorPurple caret-MentorPurple"
                    type="number"
                    name="year"
                    id="year"
                />
            </div>
            <button onClick={(e) => e.preventDefault()}>Submit</button>
        </form>
    );
}
export default HolidayForm;
