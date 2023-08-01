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
    width: 700px;
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


//제작 목적
export const StageTitle = styled.div`
    font-size : 25px;
    font-weight: 700;
    margin-bottom: 50px;
    span {
        color : #2cb5a9;
    }
`;

interface IsSelected {
    selected? : boolean;
}

export const PurposeSelectContent = styled.div`
    display: flex;
    flex-wrap: wrap;

    span {
        width: 45%;
        height: 150px;
    }
    
`;

export const PurposeInputContent = styled.div`
    display: flex;
    align-items: center;
    span {
        width: 20%;
        height: 50px;;
    }

    input {
        width: 68%;
        height: 47px;
        margin: 3px;
        padding-left: 10px;

        border: 2px solid #2cb5a9;
        border-radius: 5px;
    }
`;


export const ScopeSelectContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    margin-top: 50px;

    span {
        width: 30%;
        height: 150px;
        margin-bottom: 20px;
    }
    
`;

export const StageSubTitle = styled.div`
    font-size : 23px;
    font-weight: 600;
    margin-bottom: 10px;
    
    color : #2cb5a9;
`;

export const StageSubContent = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 25px;
    span {
        width: 150px;
        height: 50px;
    }
    input {
        width: 200px;

        height: 47px;
        margin: 3px;
        padding-left: 10px;

        border: 2px solid #2cb5a9;
        border-radius: 5px;

        text-align: center;
    }
`;

export const ConfirmSubContent = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 25px;
    input {
        width: 100%;

        height: 47px;
        margin: 3px;
        padding-left: 10px;

        border: 2px solid #2cb5a9;
        border-radius: 5px;

        text-align: center;
    }
`;

export const ConfirmSubContentDetail = styled(ConfirmSubContent) `
    input {
        height : 150px;
    }
`;

export const SelectSpan = styled.span<IsSelected>`
    display: flex;
    align-items: center;
    justify-content: center;

    white-space: pre-wrap;

    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.selected?'#FFFFFF':'#777777'};

    border: 2px solid #2cb5a9;
    border-radius: 5px;
    margin: 3px;

    background: ${(props) => props.selected?'#2cb5a9':'none'};

    cursor: pointer;

    &:hover {
        background: #2cb5a9;
        color: #FFFFFF;
    }
`;


export const MarginDiv = styled.div`
    margin-top: 150px;
    margin-bottom: 30px;
`;