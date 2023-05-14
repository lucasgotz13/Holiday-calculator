import { useContext } from "react";
import { HolidayContext } from "../context/HolidayContext";

function Holiday() {
    //@ts-ignore
    const { day, month, holidayName }: { day: number; month: number } =
        useContext(HolidayContext);

    return (
        <div className="mt-10 flex flex-col items-center font-Poppins">
            <p className="mb-5 text-3xl">El proximo feriado es dentro de:</p>
            <p className="text-8xl italic font-bold">
                <span className="text-9xl text-MentorPurple">{month}</span>{" "}
                meses
            </p>
            <p className="text-8xl italic font-bold">
                <span className="text-9xl text-MentorPurple">{day}</span> dias
            </p>
            <p className="mt-5 text-3xl italic">{holidayName}</p>
        </div>
    );
}
export default Holiday;
