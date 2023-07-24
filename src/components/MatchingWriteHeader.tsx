import { useNavigate } from "react-router-dom";
import { MatchingWriteHeaderContainer, MatchingWriteHeaderLogoDiv, MatchingWriteStageDiv } from "../styles/matching/MatchingWriteHeaderStyles";
import { MatchingExitBtn } from "../styles/matching/MatchingHeaderStyles";

const MatchingWriteHeader = () => {
    const navigate = useNavigate();

    const exit = () => {
        navigate("/");
    }

    return <MatchingWriteHeaderContainer>
        <MatchingWriteHeaderLogoDiv>
            <a href="/"><img src="/images/logo_white.png"/></a>
        </MatchingWriteHeaderLogoDiv>
        <MatchingWriteStageDiv>
        <div>
            1 제작 목적
        </div>
        <div>
            2 연출스타일
        </div>
        <div>
            3 제작 범위
        </div>
        <div>
            4 제작 기간
        </div>
        <div>
            5 상세정보
        </div>
        <MatchingExitBtn onClick={exit}>
            나가기
        </MatchingExitBtn>
        </MatchingWriteStageDiv>
    </MatchingWriteHeaderContainer>
}

export default MatchingWriteHeader;