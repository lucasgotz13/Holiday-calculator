import Holiday from "./components/Holiday";
import HolidayForm from "./components/HolidayForm";

function App() {
    return (
        <div className="p-20 h-screen flex flex-col justify-center items-center font-Poppins">
            <HolidayForm />
            <Holiday />
        </div>
    );
}

export default App;
