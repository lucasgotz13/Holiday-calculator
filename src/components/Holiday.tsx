import { useContext } from "react";
import { HolidayContext } from "../context/HolidayContext";

function Holiday() {
    //@ts-ignore
    const { day, month }: { day: number; month: number } =
        useContext(HolidayContext);

    return (
        <div className="mt-20 flex flex-col justify-center font-Poppins">
            <h1 className="text-8xl italic font-bold">
                <span className="text-9xl text-MentorPurple">{month}</span>{" "}
                meses
            </h1>
            <h1 className="text-8xl italic font-bold">
                <span className="text-9xl text-MentorPurple">{day}</span> dias
            </h1>
        </div>
    );
}
export default Holiday;
