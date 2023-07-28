import useUser from "../../api/auth/UseUser";
import Header from "../../components/Header";
import { CenterContainer, MemberBtnDiv, MemberCenterLogo, MemberInput, MemberInputContainer, MemberLogoUnder, MemberSubBtnDiv, SubTitle } from "../../styles/member/MemberStyles"


const Login = () => {

    const moveSignup = () => {
        window.location.href='/signup';
    }

    // const [user, setUser] = useUser();

    return <>
        <Header bgColor="black" color="white" logo="/images/logo_white.png"/>
        <CenterContainer>

            <MemberCenterLogo>
                <img src="/images/logo_black.png"/>
            </MemberCenterLogo>
            <MemberLogoUnder>
                전문 기획팀의 기획력으로 차별화된 영상을 제작하세요.
            </MemberLogoUnder>
        
            <MemberInputContainer>
                <SubTitle>이메일</SubTitle>
                <MemberInput type="text" placeholder="adbridge@naver.com"/>

                <SubTitle>비밀번호<span>(8자리 이상, 영문+숫자 조합)</span></SubTitle>
                <MemberInput type="text" placeholder="********"/>

                <MemberBtnDiv>
                    <button>로그인</button>
                </MemberBtnDiv>

                <MemberSubBtnDiv>
                    <button onClick={moveSignup}>회원가입</button>
                    <button>비밀번호 찾기</button>
                </MemberSubBtnDiv>
                
            </MemberInputContainer>

        </CenterContainer>
    </>
    
}


export default Login;