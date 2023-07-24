import MatchingHeader from "../../components/MatchingHeader";
import { AquaBtn, BackGroundImg } from "../../styles/MainStyled";


const MatchingStart = () => {
    const moveStage = () => {
        window.location.href='/match/stage';
    }
    return <div>
        <MatchingHeader/>

        <BackGroundImg>
            <img src="/images/main_4.jpg"></img>
            <AquaBtn onClick={moveStage} theme={{bottom : "150px"}}>매칭서비스 신청하기</AquaBtn>
        </BackGroundImg>

    </div>
}

export default MatchingStart;