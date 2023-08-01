import { Link } from "react-router-dom";
import { CursorPointImg, CusorPointText, HeaderContainer, HeaderLogo, LoginBtn, TextHeaderBtn, UserImg } from "../styles/HeaderStyles";
import { ICurrentMember, currentMemberState } from "../atoms/memberAtoms";

import { useRecoilValue } from 'recoil';

export interface HeaderProps {
    bgColor : string;
    color : string;
    logo : string;
    currentMember? : ICurrentMember
}

export const moveMain = () => {
    window.location.href='/';
}

const moveMatch = () => {
    window.location.href='/match/start';
}

const moveAdminMatch = () => {
    window.location.href='/admin/matches';
}



const Header:React.FC<HeaderProps> =  (props) => {
    return <HeaderContainer theme={{bgColor : props.bgColor, color:props.color}}>
            <TextHeaderBtn>
                <CusorPointText onClick={moveMatch}>매칭서비스</CusorPointText>
            </TextHeaderBtn>
            <TextHeaderBtn>
                <CusorPointText onClick={moveMain}>기업소개</CusorPointText>
            </TextHeaderBtn>
            {
                props?.currentMember?.role_code==='ADMIN'?
                <TextHeaderBtn>
                    <CusorPointText onClick={moveAdminMatch}>관리자</CusorPointText>
                </TextHeaderBtn>:''
            }
            <HeaderLogo>
                <a href="/"><CursorPointImg src={props.logo} alt="logo"/></a>
            </HeaderLogo>

            <LoginBtn>
                {
                    props?.currentMember?.username ?
                    <UserImg>{props?.currentMember?.name} 님</UserImg>
                    :<CusorPointText><Link to={'/login'}>로그인</Link></CusorPointText>
                }
            </LoginBtn>           
    </HeaderContainer>
}

export default Header;