import { CompanyLinks, CustomCenter, FooterBlockDiv, FooterCompany, FooterContainer, FooterLogo, FooterWork, RequireBtn, WorkTime } from "../styles/FooterStyles";

const Footer = () => {
    return <FooterContainer>
        <FooterBlockDiv>
        <FooterLogo>
            <div>
            <img src="/images/footer_logo.png" alt="sample"/>
            </div>
        </FooterLogo>
        <FooterWork>
            <CustomCenter>고객센터</CustomCenter>
            <WorkTime>
                <div>
                    평일 09:00 - 18:00 (주말, 공휴일 휴무)
                </div>
                <div>
                    adbridge@naver.com
                </div>
            </WorkTime>
            <div>
                <RequireBtn>문의하기</RequireBtn>
            </div>
        </FooterWork>
        </FooterBlockDiv>

        <FooterBlockDiv>
            <FooterCompany>
                <CompanyLinks>
                    <div>이용약관</div>
                    <div>개인정보 처리방침</div>
                    <div>제휴'협력 문의</div>
                </CompanyLinks>
                <div>
                    <div>허니뱃저픽처스 주식회사 | 대표 정지우 | 광주광역시 동구 금남로 245, 5층 517호 1인창조기업지원센터(금남로 1가, 전일빌딩) | 연락처 : 010-9203-8570 | 사업자등록번호 : 200111-0652945 |</div>
                    <div>통신판매신고업: 2023-0000-0000호 | 에드브릿지 통신판매중개자이며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.</div>
                </div>
                <div>

                </div>
            </FooterCompany>
        </FooterBlockDiv>
    </FooterContainer>
}

export default Footer;