import * as React from "react";
import styled from "styled-components";

const S = {
    div: styled.div`
        width: 90%;
        height: 80%;
        background-color: red;
    `,
};

const CardContainer = () => {
    return <S.div></S.div>;
};

export default CardContainer;
