import { CursorPointImg, CusorPointText, HeaderContainer, HeaderLogo, LoginBtn, TextHeaderBtn } from "../styles/HeaderStyles";


const Header =  () => {
    return <HeaderContainer>
            <TextHeaderBtn>
                <CusorPointText>매칭서비스</CusorPointText>
            </TextHeaderBtn>
            <TextHeaderBtn>
                <CusorPointText>기업소개</CusorPointText>
            </TextHeaderBtn>
            <HeaderLogo>
                <CursorPointImg src='/images/sample.png' alt="sample"/>
            </HeaderLogo>

            <LoginBtn>
                <CusorPointText>로그인</CusorPointText>
            </LoginBtn>           
    </HeaderContainer>
}

export default Header;