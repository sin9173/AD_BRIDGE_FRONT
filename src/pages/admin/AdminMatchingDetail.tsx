import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { AquaBtnNonAbsolte } from "../../styles/MainStyled";
import { MatchingColumn, MatchingConfirm } from "../../styles/admin/AdminMatchingDetailStyles";
import { CardSpan, Green, MatchingListContainer, MatchingListDataDiv, MatchingListTitleDiv } from "../../styles/admin/AdminMatchingListStyles";
import { IMatchDetailData, matchingDetail } from "../../api/match/matchApi";
import { useParams } from "react-router-dom";
import { currentMemberState } from "../../atoms/memberAtoms";

import {useRecoilState} from 'recoil';


const AdminMatchingDetail = () => {

    const [matchData, setMatchData] = useState<IMatchDetailData>({});

    const [currentMember, setCurrentMember] = useRecoilState(currentMemberState);

    const params = useParams();

    const getData = async () => {
        console.log(params);
        let result : IMatchDetailData = {};
        await matchingDetail(Number(params?.id), currentMember)
        .then((response) => {
            const renewToken = localStorage.getItem('accessToken');
            if(renewToken) {
                // console.log("old Token : " + currentMember.token);
                currentMember.token = renewToken;
                // console.log("renew TOken : " + currentMember.token);
                setCurrentMember(currentMember);
                localStorage.removeItem('accessToken');
            }
            result = response?.data;
        })
        .catch((error) => {
            // console.log("error : " + JSON.stringify(error));
            alert(`${error?.message} (CODE : ${error?.code})`);
            result = {};
        })

        setMatchData(result);
    }

    useEffect(() => {
        getData();
    }, [params])
    return <div>

<Header bgColor="black" color="white" logo="/images/logo_white.png"/>

<MatchingListContainer>

    <MatchingListTitleDiv>
        관리자 페이지
    </MatchingListTitleDiv>

    <MatchingListDataDiv>
        <div>
            <CardSpan background="#BBBBBB">
                <p>일일 방문자수</p>
                <p>0</p>
            </CardSpan>
            <CardSpan background="#78d0c8">
                <p>전체매칭수</p>
                <p>0</p>
            </CardSpan>
            <CardSpan background="#2cb5a9">
                <p>확인하지않은 매칭</p>
                <p>0</p>
            </CardSpan>
        </div>
        <div>
            <Green size={30} weight={600}>영상 제목</Green>
        </div>
        <div>
            <MatchingColumn>
                <Green size={25} weight={500}>제작 목적</Green>
                <input type="text" value={matchData.purpose}></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>영상스타일</Green>
                <input type="text" value={matchData.style}></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>제작 범위</Green>
                <input type="text" value={matchData.scope_list?.map(o => o.name).join(",")}></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>제작 편수</Green>
                <input type="text" value={matchData.make_count}></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>영상길이</Green>
                <input type="text" value={matchData.video_length}></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>희망 납품 일자</Green>
                <input type="text" value={matchData.hope_delivery_date}></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>영상 제목</Green>
                <input type="text" value={matchData.video_title}></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>업체명</Green>
                <input type="text" value={matchData.company}></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>참고영상링크</Green>
                <input type="text" value={matchData.video_link}></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>예산범위</Green>
                <input type="text" value={matchData.budget}></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>상세 제작 내용</Green>
                <textarea>{matchData?.content}</textarea>
            </MatchingColumn>

        </div>

        <MatchingConfirm>
            <AquaBtnNonAbsolte onClick={() => window.location.href='/admin/matches'}>확인</AquaBtnNonAbsolte>
        </MatchingConfirm>
    </MatchingListDataDiv>

    
</MatchingListContainer>

    </div>

}

export default AdminMatchingDetail;