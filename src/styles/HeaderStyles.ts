import styled from 'styled-components';

export const HeaderContainer = styled.div`
    padding-left: 60px;
    display: flex;
    width : 100%;
    align-items: center;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    height: 16vh;
    position: relative;
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

// export const HeaderLogo = styled.div`
//     display: flex;
//     justify-content: center;
//     justify-self: center;
//     width: 50%;
// `;

export const HeaderLogo = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    /* justify-self: center; */
    /* width: 50%; */
    position : absolute;
    left: 42%;
`;

export const TextHeaderBtn = styled.div`
    width: 15vh;
    font-size: 13px;
    padding : 10px;
    margin: 0px 35px 0px 30px;
`;

export const LoginBtn = styled(TextHeaderBtn)`
    /* display: flex; */
    position: absolute;
    right: 2%;
`;

export const CusorPointText = styled.h2`
    cursor: pointer;
`;

export const CursorPointImg = styled.img`
    max-width: 280px;
    z-index: 6;
    cursor: pointer;
`;