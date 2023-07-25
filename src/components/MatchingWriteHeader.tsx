import { useNavigate } from "react-router-dom";
import { MatchingWriteHeaderContainer, MatchingWriteHeaderLogoDiv, MatchingWriteStageDiv, WritingSpan } from "../styles/matching/MatchingWriteHeaderStyles";
import { MatchingExitBtn } from "../styles/matching/MatchingHeaderStyles";

interface MatchingWriteHeaderProps {
    writePurpose : boolean;
    writeStyle : boolean;
    writeScope : boolean;
    writeDate : boolean;
    writeConfirm : boolean;

    movePurpose() : void;
    moveStyle() : void;
    moveScope() : void;
    moveDate() : void;
    moveConfirm() : void;
}

const MatchingWriteHeader = (props : MatchingWriteHeaderProps) => {
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
            <WritingSpan selected={props.writePurpose} onClick={props.movePurpose}>1 제작 목적</WritingSpan>
        </div>
        <div>
            <WritingSpan selected={props.writeStyle} onClick={props.moveStyle}>2 연출스타일</WritingSpan>
        </div>
        <div>
            <WritingSpan selected={props.writeScope} onClick={props.moveScope}>3 제작 범위</WritingSpan>
        </div>
        <div>
            <WritingSpan selected={props.writeDate} onClick={props.moveDate}>4 제작 기간</WritingSpan>
        </div>
        <div>
            <WritingSpan selected={props.writeConfirm} onClick={props.moveConfirm}>5 상세정보</WritingSpan>
        </div>
        <MatchingExitBtn onClick={exit}>
            나가기
        </MatchingExitBtn>
        </MatchingWriteStageDiv>
    </MatchingWriteHeaderContainer>
}

export default MatchingWriteHeader;