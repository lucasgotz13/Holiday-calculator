function DateForm() {
    return (
        <form className="mt-44 flex items-center gap-5 justify-center">
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
        </form>
    );
}
export default DateForm;
