import Header from "../../components/Header";
import { AquaBtnNonAbsolte } from "../../styles/MainStyled";
import { MatchingColumn, MatchingConfirm } from "../../styles/admin/AdminMatchingDetailStyles";
import { CardSpan, Green, MatchingListContainer, MatchingListDataDiv, MatchingListTitleDiv } from "../../styles/admin/AdminMatchingListStyles";


const AdminMatchingDetail = () => {
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
                <p>123</p>
            </CardSpan>
            <CardSpan background="#78d0c8">
                <p>전체매칭수</p>
                <p>123</p>
            </CardSpan>
            <CardSpan background="#2cb5a9">
                <p>확인하지않은 매칭</p>
                <p>123</p>
            </CardSpan>
        </div>
        <div>
            <Green size={30} weight={600}>영상 제목</Green>
        </div>
        <div>
            <MatchingColumn>
                <Green size={25} weight={500}>제작 목적</Green>
                <input type="text"></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>영상스타일</Green>
                <input type="text"></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>제작 범위</Green>
                <input type="text"></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>제작 기간</Green>
                <input type="text"></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>영상 제목</Green>
                <input type="text"></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>업체명</Green>
                <input type="text"></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>참고영상링크</Green>
                <input type="text"></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>예산범위</Green>
                <input type="text"></input>
            </MatchingColumn>

            <MatchingColumn>
                <Green size={25} weight={500}>상세 제작 내용</Green>
                <textarea></textarea>
            </MatchingColumn>

        </div>

        <MatchingConfirm>
            <AquaBtnNonAbsolte>확인</AquaBtnNonAbsolte>
        </MatchingConfirm>
    </MatchingListDataDiv>

    
</MatchingListContainer>

    </div>

}

export default AdminMatchingDetail;