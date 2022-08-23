import * as React from "react";
import styled from "styled-components";
import CategorySelectHeader from "./category-select-header";
import Title from "./title-button";

const TitleScreenContainer = () => {
    return(
    <div>
        <Title>Find a game!</Title>
        <CategorySelectHeader categoryText='Platform!'/>
    </div>
    );
};

export default TitleScreenContainer;