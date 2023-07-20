import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    width : 100vw;
    align-items: center;
    background-color: black;
    color: white;
    height: 16vh;
`;

export const HeaderLogo = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 0;
`;

export const TextHeaderBtn = styled.div`
    width: 15vh;
    font-size: 13px;
    padding : 10px;
    margin: 0px 30px 0px 30px;
    z-index: 3;
`;

export const LoginBtn = styled(TextHeaderBtn)`
    display: flex;
    width: 100%;
    justify-content: end;
`;

export const CusorPointText = styled.h2`
    cursor: pointer;
`;

export const CursorPointImg = styled.img`
    cursor: pointer;
`;