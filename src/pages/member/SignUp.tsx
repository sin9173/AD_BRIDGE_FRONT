import { useNavigate } from "react-router-dom";
import { ISignup, signup } from "../../api/member/memberApi";
import Header from "../../components/Header";
import { CenterContainer, MemberBtnDiv, MemberCenterLogo, MemberInput, MemberInputContainer, MemberLogoUnder, MemberSubBtnDiv, SubTitle } from "../../styles/member/MemberStyles"

import { useForm } from 'react-hook-form';

const SignUp = () => {

    const {register, handleSubmit, setError, formState : {errors}} = useForm<ISignup>();

    const navigate = useNavigate();

    const handleSignup = async (data:ISignup) => {
        console.log("member : " + data);

        if(data.password !== data.password1) {
            setError("password1", {message : "비밀번호가 동일한지 확인해주세요."}, {shouldFocus :true});
        }

        data.username = data.email;

        await signup(data) 
        .then((response) => {
            alert('가입되었습니다.');
            navigate('/login');
            return;
        })
        .catch((error) => {
            console.log("error : " + JSON.stringify(error));
            alert(`${error?.message} (CODE : ${error?.code})`);
            return;
        })

    }

    console.log(errors);

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
                <form onSubmit={handleSubmit(handleSignup)}>
                <SubTitle>성함</SubTitle>
                <MemberInput {...register("name")} type="text" placeholder="성함을 입력해 주세요."/>

                <SubTitle>이메일</SubTitle>
                <MemberInput {...register("email", {required : "이메일을 입력해주세요."})} type="text" placeholder="이메일을 입력해 주세요."/>

                <SubTitle>휴대폰 번호</SubTitle>
                <MemberInput {...register("phone", {required : "휴대폰번호를 입력해주세요."})} type="text" placeholder="01012345678"/>

                <SubTitle>비밀번호<span>(8자리 이상, 영문+숫자 조합)</span></SubTitle>
                <MemberInput {...register("password", {required : "비밀번호를 입력해주세요."})} type="password" placeholder="********"/>

                <SubTitle>비밀번호 확인<span>(8자리 이상, 영문+숫자 조합)</span></SubTitle>
                <MemberInput type="password" placeholder="********"/>

                <MemberBtnDiv>
                    <button>다음</button>
                </MemberBtnDiv>
                </form>
            </MemberInputContainer>

        </CenterContainer>
    </>
    
}


export default SignUp;