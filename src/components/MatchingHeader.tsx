import { MatchingHeaderContainer, MatchingHeaderLogoDiv, MatchingStageDiv } from "../styles/matching/MatchingHeaderStyles";


const MatchingHeader = () => {
    return <MatchingHeaderContainer>
        <MatchingHeaderLogoDiv>
            <img src="/images/logo_white.png"/>
        </MatchingHeaderLogoDiv>

        <MatchingStageDiv>
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
        <div>
            나가기
        </div>
        </MatchingStageDiv>
        
    </MatchingHeaderContainer>
}

export default MatchingHeader;