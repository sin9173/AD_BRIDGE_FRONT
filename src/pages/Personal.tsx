import { styled } from "styled-components"
import Header from "../components/Header"


const PersonContainer = styled.div`
    width: 100%;
    img {
        width: 100%;
    }
`;

const Personal = () => {
    return <div>
        <Header bgColor="white" color="black" logo="/images/logo_black.png"/>
        <PersonContainer>
            <img src="/images/personal.jpg"/>
        </PersonContainer>
    </div>
}

export default Personal;