import * as React from "react";
import styled from "styled-components";

const S = {
    div: styled.div`
        background-color: red;
        width: 8rem;
        height: 1.5rem;
        border-radius: 5px;
    `,
};

interface Props {
    categoryText: string;
}
const CategorySelectHeader = (props: Props) => {
    return <S.div>{props.categoryText}</S.div>;
};

export default CategorySelectHeader;
