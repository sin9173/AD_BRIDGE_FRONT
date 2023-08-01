import React, { FormEvent, useEffect, useState } from 'react';

import MatchingWriteHeader from "../../components/MatchingWriteHeader";
import { ConfirmSubContent, ConfirmSubContentDetail, MarginDiv, MatchingBtnDiv, MatchingContentDiv, MatchingStageContainer, MatchingStageLogo, PurposeInputContent, PurposeSelectContent, ScopeSelectContent, SelectSpan, StageSubContent, StageSubTitle, StageTitle } from "../../styles/matching/MatchingStageStyles";
import { IMatchSave, IScope, matchSave } from '../../api/match/matchApi';
import { currentMemberState } from '../../atoms/memberAtoms';

import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

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

    useEffect(() => {
        if(!currentMember.member_id) {
            alert("다시 로그인 해주세요.");
            window.location.href='/login';
            return;
        }

        // console.log("purpose : " + purpose);
        // console.log("style : " + style);
        // console.log("makeCount : " + makeCount);
        // console.log("videoLength : " + videoLength);
        // console.log("hopeDeliveryDate : " + hopeDeliveryDate);
        // console.log("videoTitle : " + videoTitle);
        // console.log("comapny : " + company);
        // console.log("videoLink : " + videoLink);
        // console.log("budget : " + budget);
        // console.log("content : " + content);
        // console.log("scope : " + scope);
    }, [])

    // const currentMember = useRecoilValue(currentMemberState);
    const [currentMember, setCurrentMember] = useRecoilState(currentMemberState);

    const navigate = useNavigate();

    const handleMatchSave = async () => {

        if(!currentMember.member_id) {
            alert("다시 로그인 해주세요.");
            window.location.href='/login';
            return;
        }

        const scope_list = scope.map((s) => {return {name : s}})
        const req_data : IMatchSave = {
            purpose : purpose,
            style : style,
            make_count : makeCount,
            video_length : videoLength,
            hope_delivery_date : hopeDeliveryDate,
            video_title : videoTitle,
            company : company,
            video_link : videoLink,
            budget : budget,
            content : content,
            scope_list : scope_list,

            member_id : currentMember.member_id

        }

        await matchSave(req_data, currentMember)
        .then((response) => {
            const renewToken = localStorage.getItem('accessToken');
            if(renewToken) {
                currentMember.token = renewToken;
                setCurrentMember(currentMember);
                localStorage.removeItem('accessToken');
            }
            alert('등록되었습니다.');
            navigate('/');
            return;
        })
        .catch((error) => {
            console.log("error : " + JSON.stringify(error));
            alert(`${error?.message} (CODE : ${error?.code})`);
            return;
        })
    }

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

    const purposeList = ["기업, 사업 홍보 및 행사 영상", "앱, 서비스, 제품 등 홍보영상", "강의 및 사내 교육", "유튜브 제작"];
    const styleList = ["제품/모델 촬영", "배우 및 모델 연기", "회사 및 매장 촬영", "인터뷰 및 강의", "캐릭터 / 인포그래픽", "3D 그래픽"];
    const scopeList = ["일반촬영", "드론촬영", "모델섭외", "성우섭외", "자막(영어)", "자막(한국어)", "촬영장소섭외"];
    const makeCountList = ["1편", "2편"];
    const videoLengthList = ["30초-1분이내", "1-3분 이내"];
    const hopeDeliveryDateList = ["2주이내", "1달 이내"];


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
                        {purposeList.map((p) => {
                            return <SelectSpan key={`purpose_${p}`}selected={purpose===p?true:false} onClick={() => {setPurpose(p)}}>{p}</SelectSpan>
                        })}
                    </PurposeSelectContent>
                    <PurposeInputContent>
                        <SelectSpan selected={purposeList.findIndex((o) => o===purpose)===-1}>
                            기타
                        </SelectSpan><input type='text' value={purpose} onChange={(event:FormEvent<HTMLInputElement>) => {setPurpose(event.currentTarget.value)}} placeholder='EX) 전시회, 비즈니스 미팅'/>
                    </PurposeInputContent>
                </div>:''}

                {/*연출 스타일 */}
                {writeStyle?
                <div>
                    <StageTitle>
                        <span>어떤 연출의 영상</span>을 원하시나요?
                    </StageTitle>
                    <PurposeSelectContent>
                        {styleList.map(s => 
                            <SelectSpan key={`style_${s}`} selected={style===s} onClick={() => {setStyle(s)}}>
                                {s==="제품/모델 촬영"
                                ?"제품/모델\n촬영"
                                :s==="배우 및 모델 연기"
                                ?"배우 및 모델\n연기"
                                :s==="회사 및 매장 촬영"
                                ?"회사 및 매장\n촬영"
                                :s}
                            </SelectSpan>
                        )}
                        {/* <SelectSpan>제품/모델<br/>촬영</SelectSpan>
                        <SelectSpan>배우 및 모델<br/>연기</SelectSpan>
                        <SelectSpan>회사 및 매장<br/>촬영</SelectSpan>
                        <SelectSpan>인터뷰 및 강의</SelectSpan>
                        <SelectSpan>캐릭터 / 인포그래픽</SelectSpan>
                        <SelectSpan>3D 그래픽</SelectSpan> */}
                    </PurposeSelectContent>
                    <PurposeInputContent>
                        <SelectSpan selected={styleList.findIndex((o) => o===style)===-1}>기타</SelectSpan><input type='text' value={style} onChange={(event:FormEvent<HTMLInputElement>) => {setStyle(event.currentTarget.value)}} placeholder='EX) 브랜드 필름'/>
                    </PurposeInputContent>
                </div>:''}


                {/*제작 범위 */}
                {writeScope?
                <div>
                    <StageTitle>
                        <span>필요한 작업을 선택</span>해 주세요.
                    </StageTitle>
                    <ScopeSelectContent>
                        {
                            scopeList.map((sc : string) => <SelectSpan key={`scope_${sc}`} 
                            selected={scope.findIndex((o) => o===sc)==(-1)?false:true} 
                            onClick={() => {
                                let arr = [...scope];
                                arr.push(sc);
                                setScope(arr);   
                            }}>
                                {sc}
                            </SelectSpan>)
                        }
                        <SelectSpan selected={scope.length==0} onClick={() => setScope([])}>없음</SelectSpan>
                        {/* <SelectSpan>일반촬영</SelectSpan>
                        <SelectSpan>드론촬영</SelectSpan>
                        <SelectSpan>모델섭외</SelectSpan>
                        <SelectSpan>성우섭외</SelectSpan>
                        <SelectSpan>자막(영어)</SelectSpan>
                        <SelectSpan>자막(한국어)</SelectSpan>
                        <SelectSpan>촬영장소섭외</SelectSpan>
                        <SelectSpan>없음</SelectSpan> */}
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
                            {
                                makeCountList.map((mc) => <SelectSpan key={`makeCount_${mc}`} selected={makeCount===mc} onClick={() => setMakeCount(mc)}>
                                    {mc}
                                </SelectSpan>)
                            }
                            {/* <SelectSpan>1편</SelectSpan>
                            <SelectSpan>2편</SelectSpan> */}
                            <input type='text' value={makeCount} onChange={(event:FormEvent<HTMLInputElement>) => setMakeCount(event.currentTarget.value)}placeholder='직접입력'/>
                        </StageSubContent>
                    </div>

                    <div>
                        <StageSubTitle>영상길이</StageSubTitle>
                        <StageSubContent>
                            {
                                videoLengthList.map((vl) => <SelectSpan key={`videoLength_${vl}`} selected={videoLength==vl} onClick={() => setVideoLength(vl)}>
                                    {vl}
                                </SelectSpan>)
                            }
                            {/* <SelectSpan>30초-1분이내</SelectSpan>
                            <SelectSpan>1-3분 이내</SelectSpan> */}
                            <input type='text' value={videoLength} onChange={(event:FormEvent<HTMLInputElement>) => setVideoLength(event.currentTarget.value)} placeholder='직접입력'/>
                        </StageSubContent>
                    </div>

                    <div>
                        <StageSubTitle>희망 납품 일자</StageSubTitle>
                        <StageSubContent>
                            {
                                hopeDeliveryDateList.map((h) => <SelectSpan key={`hope_${h}`} selected={hopeDeliveryDate===h} onClick={() => setHopeDeliveryDate(h)}>
                                    {h}
                                </SelectSpan>)
                            }
                            {/* <SelectSpan>2주이내</SelectSpan>
                            <SelectSpan>1달 이내</SelectSpan> */}
                            <input type='text' value={hopeDeliveryDate} onChange={(event:FormEvent<HTMLInputElement>) => setHopeDeliveryDate(event.currentTarget.value)} placeholder='직접입력'/>
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
                            <input type='text' value={purpose} onChange={(event:FormEvent<HTMLInputElement>) => {
                                setPurpose(event.currentTarget.value);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>영상스타일</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' value={style} onChange={(event:FormEvent<HTMLInputElement>) => {
                                setStyle(event.currentTarget.value);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>제작범위</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' value={scope.join(",")} onChange={(event:FormEvent<HTMLInputElement>) => {
                                let arr : string[] = event.currentTarget.value.split(",");
                                setScope(arr);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>제작편수</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' value={makeCount} onChange={(event:FormEvent<HTMLInputElement>) => {
                                setMakeCount(event.currentTarget.value);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>영상길이</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' value={videoLength} onChange={(event:FormEvent<HTMLInputElement>) => {
                                setVideoLength(event.currentTarget.value);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>희망 납품 일자</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' value={hopeDeliveryDate} onChange={(event:FormEvent<HTMLInputElement>) => {
                                setHopeDeliveryDate(event.currentTarget.value);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <MarginDiv></MarginDiv>

                    <StageTitle>
                        <span>제작하는 영상의 상세정보</span> 입력해주세요..
                    </StageTitle>
                    <div>
                        <StageSubTitle>영상 제목</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' value={videoTitle} onChange={(event:FormEvent<HTMLInputElement>) => {
                                setVideoTitle(event.currentTarget.value);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>업체명</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' value={company} onChange={(event:FormEvent<HTMLInputElement>) => {
                                setComapny(event.currentTarget.value);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>참고영상링크</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' value={videoLink} onChange={(event:FormEvent<HTMLInputElement>) => {
                                setVideoLink(event.currentTarget.value);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>예산범위</StageSubTitle>
                        <ConfirmSubContent>
                            <input type='text' value={budget} onChange={(event:FormEvent<HTMLInputElement>) => {
                                setBudget(event.currentTarget.value);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContent>
                    </div>

                    <div>
                        <StageSubTitle>상세 제작 내용</StageSubTitle>
                        <ConfirmSubContentDetail>
                            <input type='text' value={content} onChange={(event:FormEvent<HTMLInputElement>) => {
                                setContent(event.currentTarget.value);
                            }} placeholder='직접입력'/>
                        </ConfirmSubContentDetail>
                    </div>
                </div>:''}

            </MatchingContentDiv>
            <MatchingBtnDiv>
                {
                    writeConfirm?
                    <button onClick={handleMatchSave}>견적요청하기</button>
                    :<button onClick={moveNext}>다음</button>
                }
            </MatchingBtnDiv>
        </MatchingStageContainer>
    </div>
}

export default MatchingStage;