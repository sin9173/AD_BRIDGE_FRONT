import styled from 'styled-components';

export const MatchingStageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 150px;

`;

export const MatchingStageLogo = styled.div`
    width: 200px;
    height: 10vh;
    padding: 10vh;
    img{
        max-width: 100%;
    }
`;

export const MatchingContentDiv = styled.div`
    width: 500px;
`;


export const MatchingBtnDiv = styled.div`
    width: 500px;
    padding: 30px;
    button {
        width: 100%;
        height: 45px;
        background: #2cb5a9;
        border: unset;
        border-radius: 5px;
        color : white;
        font-size: 1.0rem;
        font-weight: 600;
        cursor: pointer;
    }
`;
