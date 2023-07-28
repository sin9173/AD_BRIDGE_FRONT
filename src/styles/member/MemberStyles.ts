import styled from "styled-components";

export const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 150px;

`;

export const MemberCenterLogo = styled.div`
    width: 400px;
    height: 8vh;
    padding: 2vh;
    img{
        max-width: 100%;
    }
`;

export const MemberLogoUnder = styled.div`
    font-size: 25px;
    color: #2cb5a9;
    font-weight: 700;
`;

export const SubTitle = styled.div`
    font-size : 23px;
    font-weight: 600;
    margin-bottom: 10px;
    
    color : #2cb5a9;

    span {
        color : #777777;
        margin-left : 5px;
    }

`;

export const MemberInput = styled.input`
    width: 100%;
    height: 50px;

    font-size: 20px;

    border: 1px solid #777777;
    border-radius: 5px;
`;


export const MemberBtnDiv = styled.div`
    width: 100%;
    button {
        width: 100%;
        height: 65px;
        background: #2cb5a9;
        border: unset;
        border-radius: 5px;
        color : white;
        font-size: 1.3rem;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const MemberSubBtnDiv = styled.div`
    width: 100%;
    display: flex;
    
    justify-content: space-between;
    margin-top: 10px;
    button {
        
        width: 49%;
        height: 65px;
        background: #777777;
        border: unset;
        border-radius: 5px;
        color : white;
        font-size: 1.3rem;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const MemberInputContainer = styled.div`
    margin-top: 100px;
    width: 620px;

    max-width: 100%;
    input {
        margin-bottom : 50px;
        
    }
`;
