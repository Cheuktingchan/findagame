import * as React from 'react'
import "./App.css";
import CategorySelectHeader from "./category-select-header";
import Title from "./title-button";

function App() {
    return (
        <div className="App">
            <Title>Find a game!</Title>
            <CategorySelectHeader/>
        </div>
    );
}

export default App;
