import * as React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const searchGame = async () => {
    const response = await fetch("https://corsproxy.io/?https://api.igdb.com/v4/games/", {
        method: "POST",
        body: "fields *; where id = 48;",
        headers: {
            'Client-ID': "m9a7arsnyqz7si0vwzz2npw453av42",
            'Authorization': "Bearer vwx9o0h4ekxsh96q8zw1x8erx0c97x",
        },
    });
    const data = await response.json();
    console.log(data);
};
searchGame();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
