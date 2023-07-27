import Header from "../../components/Header";
import { CardSpan, Green, MatchingListContainer, MatchingListDataDiv, MatchingListTitleDiv, MatchingTable } from "../../styles/admin/AdminMatchingListStyles";

const AdminMatchingList = () => {
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
                    <Green size={30} weight={600}>확인하지 않은 매칭</Green>
                </div>
                <div>
                    <MatchingTable>
                        <tr>
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
                        </tr>

                    </MatchingTable>
                </div>
            </MatchingListDataDiv>
        </MatchingListContainer>

    </div>
}

export default AdminMatchingList;