import { Link } from "react-router-dom";
import { CursorPointImg, CusorPointText, HeaderContainer, HeaderLogo, LoginBtn, TextHeaderBtn } from "../styles/HeaderStyles";


export interface HeaderProps {
    bgColor : string;
    color : string;
    logo : string;
}

export const moveMain = () => {
    window.location.href='/';
}

const moveMatch = () => {
    window.location.href='/match/start';
}

const Header:React.FC<HeaderProps> =  (props) => {
    return <HeaderContainer theme={{bgColor : props.bgColor, color:props.color}}>
            <TextHeaderBtn>
                <CusorPointText onClick={moveMatch}>매칭서비스</CusorPointText>
            </TextHeaderBtn>
            <TextHeaderBtn>
                <CusorPointText onClick={moveMain}>기업소개</CusorPointText>
            </TextHeaderBtn>
            <HeaderLogo>
                <a href="/"><CursorPointImg src={props.logo} alt="logo"/></a>
            </HeaderLogo>

            <LoginBtn>
                <CusorPointText><Link to={'/login'}>로그인</Link></CusorPointText>
            </LoginBtn>           
    </HeaderContainer>
}

export default Header;