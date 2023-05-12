import { useContext } from "react";
import { HolidayContext } from "../context/HolidayContext";

function Holiday() {
    const { count, setCount } = useContext(HolidayContext);

    return (
        <div className="mt-20 flex flex-col justify-center font-Poppins">
            <h1 className="text-8xl italic font-bold">
                <span className="text-9xl text-MentorPurple">38</span> years
            </h1>
            <h1 className="text-8xl italic font-bold">
                <span className="text-9xl text-MentorPurple">3</span> months
            </h1>
            <h1 className="text-8xl italic font-bold">
                <span className="text-9xl text-MentorPurple">26</span> days
            </h1>
            <p>{count}</p>
        </div>
    );
}
export default Holiday;
