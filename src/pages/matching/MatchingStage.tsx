import React, { useState } from 'react';

import MatchingWriteHeader from "../../components/MatchingWriteHeader";
import { ConfirmSubContent, MarginDiv, MatchingBtnDiv, MatchingContentDiv, MatchingStageContainer, MatchingStageLogo, PurposeInputContent, PurposeSelectContent, ScopeSelectContent, SelectSpan, StageSubContent, StageSubTitle, StageTitle } from "../../styles/matching/MatchingStageStyles";

const MatchingStage = () => {

    const [purpose, setPurpose] = useState("");
    const [style, setStyle] = useState("");
    const [makeCount, setMakeCount] = useState("");
    const [videoLength, setVideoLength] = useState("");
    const [hopeDeliveryDate, setHopeDeliveryDate] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const [company, setComapny] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [budget, setBudget] = useState("");
    const [content, setContent] = useState("");

    const [scope, setScope] = useState<String[]>([]);

    const [writePurpose, setWritePurpose] = useState(true);
    const [writeStyle, setWriteStyle] = useState(false);
    const [writeScope, setWriteScope] = useState(false);
    const [writeDate, setWriteDate] = useState(false);
    const [writeConfirm, setWriteConfirm] = useState(false);

    const writeClear = () => {
        setWritePurpose(false);
        setWriteStyle(false);
        setWriteScope(false);
        setWriteDate(false);
        setWriteConfirm(false);
    }

    const moveNext = () => {
        if(writePurpose) moveStyle();
        if(writeStyle) moveScope();
        if(writeScope) moveDate();
        if(writeDate) moveConfirm();
    }

    const movePurpose = () => {
        writeClear();
        setWritePurpose(true);
    }

    const moveStyle = () => {
        writeClear();
        setWriteStyle(true);
    }

    const moveScope = () => {
        writeClear();
        setWriteScope(true);
    }

    const moveDate = () => {
        writeClear();
        setWriteDate(true);
    }

    const moveConfirm = () => {
        writeClear();
        setWriteConfirm(true);
    }

    return <div>
        <MatchingWriteHeader
            writePurpose={writePurpose}
            writeStyle={writeStyle}
            writeScope={writeScope}
            writeDate={writeDate}
            writeConfirm={writeConfirm}

            movePurpose={movePurpose}
            moveStyle={moveStyle}
            moveScope={moveScope}
            moveDate={moveDate}
            moveConfirm={moveConfirm}
        />
        <MatchingStageContainer>
            <MatchingStageLogo>
                <img src="/images/logo_black.png"></img>
            </MatchingStageLogo>
            <MatchingContentDiv>

                {/*제작목적 */}
                {writePurpose?
                <div>
                    <StageTitle>
                        <span>어떤 영상을 제작</span>하고 싶으세요?
                    </StageTitle>
                    <PurposeSelectContent>
                        <SelectSpan>기업, 사업 홍보 및 행사 영상</SelectSpan>
                        <SelectSpan>앱, 서비스, 제품 등 홍보영상</SelectSpan>
                        <SelectSpan>강의 및 사내 교육</SelectSpan>
                        <SelectSpan>유튜브 제작</SelectSpan>
                    </PurposeSelectContent>
                    <PurposeInputContent>
                        <SelectSpan>기타</SelectSpan><input type='text' placeholder='EX) 전시회, 비즈니스 미팅'/>
                    </PurposeInputContent>
                </div>:''}

                {/*연출 스타일 */}
                {writeStyle?
                <div>
                    <StageTitle>
                        <span>어떤 연출의 영상</span>을 원하시나요?
                    </StageTitle>
                    <PurposeSelectContent>
                        <SelectSpan>제품/모델<br/>촬영</SelectSpan>
                        <SelectSpan>배우 및 모델<br/>연기</SelectSpan>
                        <SelectSpan>회사 및 매장<br/>촬영</SelectSpan>
                        <SelectSpan>인터뷰 및 강의</SelectSpan>
                        <SelectSpan>캐릭터 / 인포그래픽</SelectSpan>
                        <SelectSpan>3D 그래픽</SelectSpan>
                    </PurposeSelectContent>
                    <PurposeInputContent>
                        <SelectSpan>기타</SelectSpan><input type='text' placeholder='EX) 브랜드 필름'/>
                    </PurposeInputContent>
                </div>:''}


                {/*제작 범위 */}
                {writeScope?
                <div>
                    <StageTitle>
                        <span>필요한 작업을 선택</span>해 주세요.
                    </StageTitle>
                    <ScopeSelectContent>
                        <SelectSpan>일반촬영</SelectSpan>
                        <SelectSpan>드론촬영</SelectSpan>
                        <SelectSpan>모델섭외</SelectSpan>
                        <SelectSpan>성우섭외</SelectSpan>
                        <SelectSpan>자막(영어)</SelectSpan>
                        <SelectSpan>자막(한국어)</SelectSpan>
                        <SelectSpan>촬영장소섭외</SelectSpan>
                        <SelectSpan>없음</SelectSpan>
                    </ScopeSelectContent>
                </div>:''}

                {/*제작 기간 */}
                {writeDate?
                <div>
                    <StageTitle>
                        <span>제작 조건 및 일정을 확인</span>해주세요.
                    </StageTitle>
                    <div>
                        <StageSubTitle>제작편수</StageSubTitle>
                        <StageSubContent>
                            <SelectSpan>1편</SelectSpan>
                            <SelectSpan>2편</SelectSpan>
                            <input type='text' placeholder='직접입력'/>
                        </StageSubContent>
                    </div>

                    <div>
                        <StageSubTitle>영상길이</StageSubTitle>
                        <StageSubContent>
                            <SelectSpan>30초-1분이내</SelectSpan>
                            <SelectSpan>1-3분 이내</SelectSpan>
                            <input type='text' placeholder='직접입력'/>
                        </StageSubContent>
                    </div>

                    <div>
                        <StageSubTitle>제작편수</StageSubTitle>
                        <StageSubContent>
                            <SelectSpan>2주이내</SelectSpan>
                            <SelectSpan>1달 이내</SelectSpan>
                            <input type='text' placeholder='직접입력'/>
                        </StageSubContent>
                    </div>
                </div>:''}


                {/*상세정보 */}
                {writeConfirm?
                <div>
                    <StageTitle>
                        <span>작성 내용을 한번 더</span> 확인해주세요.
                    </StageTitle>
                    <div>
                        <StageSubTitle>제작목적</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>영상스타일</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>제작범위</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>제작기간</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <MarginDiv></MarginDiv>

                    <StageTitle>
                        <span>제작하는 영상의 상세정보</span> 입력해주세요..
                    </StageTitle>
                    <div>
                        <StageSubTitle>영상 제목</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>업체명</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>참고영상링크</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>예산범위</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>상세 제작 내용</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>
                </div>:''}

            </MatchingContentDiv>
            <MatchingBtnDiv>
                {
                    writeConfirm?
                    <button>견적요청하기</button>
                    :<button onClick={moveNext}>다음</button>
                }
            </MatchingBtnDiv>
        </MatchingStageContainer>
    </div>
}

export default MatchingStage;