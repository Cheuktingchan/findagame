import React from "react";
import styled from "styled-components";

const S = {
    div: styled.div`
        background-color: red;
        width: 8rem;
        height: 1.5rem;
        position: absolute;
        left: 50%;
        border-radius: 5px;
        transform: translate(-50%, 0);
    `,
};

const CategorySelectHeader = () => {
    return <S.div>Platform</S.div>;
};

export default CategorySelectHeader;
