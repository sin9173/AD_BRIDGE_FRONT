import styled from 'styled-components';

export const FooterContainer = styled.div`
    /* position: absolute;
    bottom: 0; */
    position:relative;
    transform: translateY(0%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    height: 50vh;
    background: black;
    color : white;
`;

//FOOTER 로고
export const FooterLogo = styled.div`
    width: 300px;
    height: 200px;
    /* border: 1px solid blue; */
    align-items: center;
    display: flex;
    img {
        max-width: 250px;
    }
`;

//FOOTER 고객센터
export const FooterWork = styled.div`
    width: 600px;
    height: 80px;
    /* border: 1px solid red; */
    display: flex;
    div {
        margin-right: 10px;
        padding:1px;
    }
`;

export const WorkTime = styled.div`
    font-size: 1.3rem;
`;

export const CustomCenter = styled.div`
    font-size: 1.5rem;
    color:#2cb5a9;
    font-weight: bold;
`;


//FOOTER 이용약관, 사업자정보
export const FooterCompany = styled.div`
    /* width: 100%; */
    height: 200px;
    /* border: 1px solid green; */
    flex-direction: column;
    color: lightgrey;
    div {
        padding-top: 5px;
        padding-bottom: 5px;
    }
`;

export const FooterBlockDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
`;

export const CompanyLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
    font-weight: 700;
    div:nth-child(1) {
        width: 100px;
    };
    div:nth-child(2) {
        width: 170px;
    }

`;


export const RequireBtn = styled.button`
    border: 1px solid #2cb5a9;
    background: unset;
    color:white;
    padding: 7px 15px 7px 15px;
`;