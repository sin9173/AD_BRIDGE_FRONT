import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header";
import { CardSpan, Green, MatchingListContainer, MatchingListDataDiv, MatchingListTitleDiv, MatchingTable } from "../../styles/admin/AdminMatchingListStyles";
import { currentMemberState } from "../../atoms/memberAtoms";

import { useRecoilState } from 'recoil';
import { IMatchListData, matchingList } from "../../api/match/matchApi";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import Page from "../../components/Page";

export interface pageParam {
    page : number;
    totalElements : number;
    totalPages : number;
    size : number;
    last : boolean;
}


const AdminMatchingList = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [currentMember, setCurrentMember] = useRecoilState(currentMemberState);

    // const {isLoading, isError, data} = useQuery<IMatchListData[]>("matchList", () => getMatchingList().then((obj) => obj).catch((err) => []));

    const [matchingData, setMatchingData] = useState<IMatchListData[]>([]);

    
    const [pageData, setPageData] = useState<pageParam>();


    const getMatchingList = async () => {

        let result : IMatchListData[] = [];

        await matchingList(searchParams, currentMember)
        .then((response) => {
            const renewToken = localStorage.getItem('accessToken');
            if(renewToken) {
                // console.log("old Token : " + currentMember.token);
                currentMember.token = renewToken;
                // console.log("renew TOken : " + currentMember.token);
                setCurrentMember(currentMember);
                localStorage.removeItem('accessToken');
            }
            result = response?.data?.content;

            if(!result) result = [];

            setPageData({
                page : response?.data?.number,
                totalElements : response?.data?.totalElements,
                totalPages : response?.data?.totalPages,
                size : response?.data?.size,
                last : response?.data?.last
            })
        })
        .catch((error) => {
            // console.log("error : " + JSON.stringify(error));
            alert(`${error?.message} (CODE : ${error?.code})`);
            result = [];
        })

        setMatchingData(result);

        return result;
    }

    useEffect(() => {
        // console.log("data : " + data);

        getMatchingList();

        console.log("page : " + pageData);
    }, [searchParams])


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
                        <p>{pageData?.totalElements}</p>
                    </CardSpan>
                    <CardSpan background="#2cb5a9">
                        <p>확인하지않은 매칭</p>
                        <p>123</p>
                    </CardSpan>
                </div>
                <div>
                    <Green size={30} weight={600}>확인하지 않은 매칭</Green>
                </div>
                <div>
                    <MatchingTable>
                        {
                            matchingData.map((m) => {
                                return <tr key={m.id}>
                                    <th className="date">{m.created_at}</th>
                                    <th className="title" onClick={() => {window.location.href=`/admin/match/${m.id}`}}>{m.video_title}</th>
                                    <th className="name">{m.member_name}</th>
                                    <th className="phone">{m.phone}</th>
                                </tr>
                            })
                        }
                        {/* <tr>
                            <th className="date">날짜</th>
                            <th className="title">영상제목</th>
                            <th className="name">성함</th>
                            <th className="phone">연락처</th>
                        </tr>
                        <tr>
                            <td className="date">1</td>
                            <td className="title">2</td>
                            <td className="name">3</td>
                            <td className="phone">4</td>
                        </tr>
                        <tr>
                            <td className="date">1</td>
                            <td className="title">2</td>
                            <td className="name">3</td>
                            <td className="phone">4</td>
                        </tr>
                        <tr>
                            <td className="date">1</td>
                            <td className="title">2</td>
                            <td className="name">3</td>
                            <td className="phone">4</td>
                        </tr>
                        <tr>
                            <td className="date">1</td>
                            <td className="title">2</td>
                            <td className="name">3</td>
                            <td className="phone">4</td>
                        </tr>
                        <tr>
                            <td className="date">1</td>
                            <td className="title">2</td>
                            <td className="name">3</td>
                            <td className="phone">4</td>
                        </tr>
                        <tr>
                            <td className="date">1</td>
                            <td className="title">2</td>
                            <td className="name">3</td>
                            <td className="phone">4</td>
                        </tr>
                        <tr>
                            <td className="date">1</td>
                            <td className="title">2</td>
                            <td className="name">3</td>
                            <td className="phone">4</td>
                        </tr>
                        <tr>
                            <td className="date">1</td>
                            <td className="title">2</td>
                            <td className="name">3</td>
                            <td className="phone">4</td>
                        </tr>
                        <tr>
                            <td className="date">1</td>
                            <td className="title">2</td>
                            <td className="name">3</td>
                            <td className="phone">4</td>
                        </tr>
                        <tr>
                            <td className="date">1</td>
                            <td className="title">2</td>
                            <td className="name">3</td>
                            <td className="phone">4</td>
                        </tr> */}

                    </MatchingTable>
                    
                </div>
                <Page props={pageData}/>
            </MatchingListDataDiv>
        </MatchingListContainer>

    </div>
}

export default AdminMatchingList;