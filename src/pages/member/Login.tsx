// import { useQuery } from "react-query";
import Header from "../../components/Header";
import { CenterContainer, MemberBtnDiv, MemberCenterLogo, MemberInput, MemberInputContainer, MemberLogoUnder, MemberSubBtnDiv, SubTitle } from "../../styles/member/MemberStyles"
import { LoginParams, getMember, login } from "../../api/auth/authApi";
import { useEffect } from "react";

import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { ICurrentMember, currentMemberState } from "../../atoms/memberAtoms";

import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const Login = () => {

    // const selectCurrentMember = useRecoilValue(currentMemberSelector);

    // const {data: tokenCheckTestData, error:tokenCheckError} = useQuery("tokenTest", () => tokenCheckTest(selectCurrentMember));

    const [currentMember, setCurrentMember] = useRecoilState(currentMemberState);

    const navigate = useNavigate();

    // const setCurrentMember = useSetRecoilState(currentMemberState);
    // const currentMember = useRecoilValue(currentMemberState);

    useEffect(() => {
        console.log("currentUser ID : " + currentMember.member_id);
        console.log("currentUser Name : " +currentMember.username);
        console.log("currentUser Token : " + currentMember.token);

    }, [])

    

    // const {data : currentMemberData} = useQuery("currentMember", () => getMember({memberId : currentMember.member_id?currentMember.member_id:0}, currentMember));

    const moveSignup = () => {
        window.location.href='/signup';
    }

    const { register, handleSubmit, setValue} = useForm<LoginParams>();

    const handleLogin = async (data : LoginParams) => {

        console.log("data : " + data);

        let responseMember : ICurrentMember = {

        }
        
        await login(data)
        .then((response) => {
            console.log("response : " + JSON.stringify(response));
            responseMember = {
                member_id : response?.data?.member_id,
                username : response?.data?.username,
                name : response?.data?.name,
                phone : response?.data?.phone,
                role_code : response?.data?.role_code,
                role_name : response?.data?.role_name,
                token : response?.data?.token
            }

            console.log("responseMember : " + JSON.stringify(responseMember));

            navigate('/');
        })
        .catch((error) => {
            console.log("error : " + JSON.stringify(error));
            alert(`${error?.message} (CODE : ${error?.code})`);
            return;
        });

        await setCurrentMember(oldMember => responseMember);

        console.log("current Member Login : " + JSON.stringify(currentMember));
    }

    return <>
        <Header bgColor="black" color="white" logo="/images/logo_white.png" currentMember={currentMember}/>
        <CenterContainer>

            <MemberCenterLogo>
                <img src="/images/logo_black.png"/>
            </MemberCenterLogo>
            <MemberLogoUnder>
                전문 기획팀의 기획력으로 차별화된 영상을 제작하세요.
            </MemberLogoUnder>
        
            <MemberInputContainer>
                <form onSubmit={handleSubmit(handleLogin)}>
                <SubTitle>이메일</SubTitle>
                <MemberInput {...register("username", {required : "이메일을 입력해주세요."})} type="text" placeholder="adbridge@naver.com"/>

                <SubTitle>비밀번호<span>(8자리 이상, 영문+숫자 조합)</span></SubTitle>
                <MemberInput {...register("password", {required : "비밀번호를 입력해주세요."})} type="password" placeholder="********"/>

                <MemberBtnDiv>
                    <button>로그인</button>
                </MemberBtnDiv>

                </form>
                <MemberSubBtnDiv>
                    <button onClick={moveSignup}>회원가입</button>
                    <button>비밀번호 찾기</button>
                </MemberSubBtnDiv>
            </MemberInputContainer>

        </CenterContainer>
    </>
    
}


export default Login;