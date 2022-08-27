import * as React from "react";
import styled from "styled-components";
import CardContainer from "./card-container";
import Title from "./title-button";

const S = {
    div: styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 100vh;
    `,
};

const TitleScreenContainer = () => {
    return (
        <S.div>
            <Title>Find a game!</Title>
            <CardContainer></CardContainer>
        </S.div>
    );
};

export default TitleScreenContainer;
