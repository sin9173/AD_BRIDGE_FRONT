import Header from "../components/Header";
import { AquaBtn, AquaBtnNonAbsolte, BackGroundImg, BackGroundUrl, MainAquaFont, MainWhiteFont } from "../styles/MainStyled";

const Main = () => {

    const moveMatch = () => {
        window.location.href='/match/start';
    }
    return <div>
        <Header bgColor="white" color="black" logo="/images/logo_black.png"/>
        <BackGroundUrl theme={{imgPath : ''}}>
            <div>
                <div>
                    <MainAquaFont>AD Bridge 각 분야 전문 담당팀이</MainAquaFont><br/>
                    <MainAquaFont>차별화된 기획력</MainAquaFont><MainWhiteFont>으로</MainWhiteFont><br/>
                    <MainAquaFont>고객님에게 꼭 필요한 영상</MainAquaFont><MainWhiteFont>을</MainWhiteFont><br/>
                    <MainWhiteFont>기획해드립니다.</MainWhiteFont>
                </div>
                <div>
                    <AquaBtnNonAbsolte onClick={moveMatch} >매칭서비스 이용하기</AquaBtnNonAbsolte>
                </div>
            </div>
        </BackGroundUrl>
        <BackGroundImg>
            <img src="/images/main_1.jpg"></img>
        </BackGroundImg>
        <BackGroundImg>
            <img src="/images/main_2.jpg"></img>
        </BackGroundImg>
        <BackGroundImg>
            <img src="/images/main_3.jpg"></img>
        </BackGroundImg>
        <BackGroundImg>
            <img src="/images/main_4.jpg"></img>
            <AquaBtn onClick={moveMatch} theme={{bottom : "150px"}}>매칭서비스 신청하기</AquaBtn>
        </BackGroundImg>
        <BackGroundImg>
            
        </BackGroundImg>
    </div>
}

export default Main;