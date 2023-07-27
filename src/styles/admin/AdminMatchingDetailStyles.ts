import styled from "styled-components";

export const GreenLine = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #2cb5a9;
`;

export const MatchingColumn = styled.div`
    display: flex;
    flex-direction: column;

    margin-top : 10px;

    margin-bottom: 5px;

    p {
        margin : 20px 0 20px 0;
    }

    input, textarea {
        width: 100%;
        height: 50px;

        font-size: 20px;

        border: 2px solid #2cb5a9;
        border-radius: 5px;
    }

    textarea {
        height: 150px;
    }

`;

export const MatchingConfirm = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;

    button {
        width: 100%;
    }
`;