import styled from 'styled-components';

export const MatchingWriteHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 16vh;

    justify-content: space-around;

    background: black;
    color : white;
`;

export const MatchingWriteHeaderLogoDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 20%;
    img {
        width: 250px;
    }
`;

export const MatchingWriteStageDiv = styled.div`
    display: flex;
    width: 50vw;
    font-size: 1.2rem;
    font-weight: 700;
    div {
        padding: 10px;
    }

    div:nth-child(6) {
        margin-left: 30px;
    }
`;
