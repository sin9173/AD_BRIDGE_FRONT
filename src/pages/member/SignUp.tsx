import Header from "../../components/Header";
import { CenterContainer, MemberBtnDiv, MemberCenterLogo, MemberInput, MemberInputContainer, MemberLogoUnder, MemberSubBtnDiv, SubTitle } from "../../styles/member/MemberStyles"


const SignUp = () => {
    return <>
        <Header bgColor="black" color="white" logo="/images/logo_white.png"/>
        <CenterContainer>

            <MemberCenterLogo>
                <img src="/images/logo_black.png"/>
            </MemberCenterLogo>
            <MemberLogoUnder>
                회원가입
            </MemberLogoUnder>
        
            <MemberInputContainer>
                <SubTitle>성함</SubTitle>
                <MemberInput type="text" placeholder="성함을 입력해 주세요."/>

                <SubTitle>이메일</SubTitle>
                <MemberInput type="text" placeholder="이메일을 입력해 주세요."/>

                <SubTitle>휴대폰 번호</SubTitle>
                <MemberInput type="text" placeholder="01012345678"/>

                <SubTitle>비밀번호<span>(8자리 이상, 영문+숫자 조합)</span></SubTitle>
                <MemberInput type="password" placeholder="********"/>

                <SubTitle>비밀번호 확인<span>(8자리 이상, 영문+숫자 조합)</span></SubTitle>
                <MemberInput type="password" placeholder="********"/>

                <MemberBtnDiv>
                    <button>다음</button>
                </MemberBtnDiv>

            </MemberInputContainer>

        </CenterContainer>
    </>
    
}


export default SignUp;