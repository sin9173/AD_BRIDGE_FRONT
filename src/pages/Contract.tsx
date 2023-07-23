import { styled } from "styled-components";
import Header from "../components/Header";


const ContractContainer = styled.div`
    width: 100%;
    img {
        width: 100%;
    }
`;

const Contract = () => {
    return <div>
        <Header bgColor="white" color="black" logo="/images/logo_black.png"/>
        <ContractContainer>
            <img src="/images/contract_1.jpg"></img>
            <img src="/images/contract_2.jpg"></img>
            <img src="/images/contract_3.jpg"></img>
            <img src="/images/contract_4.jpg"></img>
            <img src="/images/contract_5.jpg"></img>
            <img src="/images/contract_6.jpg"></img>
        </ContractContainer>
    </div>
}

export default Contract;