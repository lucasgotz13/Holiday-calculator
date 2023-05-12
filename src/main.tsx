import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HolidayProvider } from "./context/HolidayContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <HolidayProvider>
            <App />
        </HolidayProvider>
    </React.StrictMode>
);
