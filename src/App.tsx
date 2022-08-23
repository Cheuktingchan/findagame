import * as React from 'react'
import "./App.css";
import CategorySelectHeader from "./category-select-header";
import Title from "./title-button";

function App() {
    return (
        <div className="App">
            <Title>Find a game!</Title>
            <CategorySelectHeader categoryText='Platform!'/>
        </div>
    );
}

export default App;
