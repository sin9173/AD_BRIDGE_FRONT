import styled from 'styled-components';

export const MatchingHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 16vh;

    justify-content: center;

    background: black;
    color : white;
`;

export const MatchingHeaderLogoDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 20%;
    img {
        width: 200px;
    }
`;

export const MatchingStageDiv = styled.div`
    display: flex;
    /* justify-content: space-around; */
    width: 50vw;
    font-size: 1.2rem;
    font-weight: 700;
    div {
        padding: 10px;
    }
`;

export const MatchingExitBtn = styled.div`
    cursor: pointer;
`;