import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    width : 100vw;
    align-items: center;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    height: 16vh;
`;

// export const HeaderLogo = styled.div`
//     position: absolute;
//     display: flex;
//     justify-content: center;
//     justify-self: center;
//     width: 300px;
//     right: 45%;
// `;

// export const TextHeaderBtn = styled.div`
//     width: 15vh;
//     font-size: 13px;
//     padding : 10px;
//     margin: 0px 30px 0px 30px;
//     z-index: 3;
// `;

// export const LoginBtn = styled(TextHeaderBtn)`
//     display: flex;
//     justify-self: self-en;
// `;

// export const CusorPointText = styled.h2`
//     cursor: pointer;
// `;

// export const CursorPointImg = styled.img`
//     max-width: 280px;
//     z-index: 6;
//     cursor: pointer;
// `;

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: center;
    justify-self: center;
    width: 50%;
`;

export const TextHeaderBtn = styled.div`
    width: 15vh;
    font-size: 13px;
    padding : 10px;
    margin: 0px 30px 0px 30px;
`;

export const LoginBtn = styled(TextHeaderBtn)`
    display: flex;
`;

export const CusorPointText = styled.h2`
    cursor: pointer;
`;

export const CursorPointImg = styled.img`
    max-width: 280px;
    z-index: 6;
    cursor: pointer;
`;