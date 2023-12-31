import styled from 'styled-components';

export const BackGroundUrl = styled.div`
    background-image: url(${props => props.theme.imgPath});
    /* background: grey; */
    width: 100%;
    background-size: 100% 100%;
    height: 800px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    position: relative;

    video {
        /* min-height: 100%;
        min-width: 100%;

        max-width: 100%;
        max-height: 100%; */
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%) translateY(-50%);
        z-index: -1;
    }

    .cation {
        z-index: 1;
        position: relative;
    }
`;

export const BackGroundImg = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    position: relative;
    img {
        width: 100%;
    }
`;

export const MainAquaFont = styled.span`
    font-size: 50px;
    font-weight: 1000;
    color:#2cb5a9;
`;

export const MainWhiteFont = styled.span`
    font-size: 50px;
    font-weight: 700;
    color:white;
`;

export const AquaBtn = styled.button`
    background: #2cb5a9;
    border:unset;
    color:white;
    padding: 15px;
    font-size: 30px;
    font-weight: 700;
    border-radius: 5px;
    margin-top: 20px;

    cursor: pointer;

    position: absolute;
    bottom: ${props => props.theme.bottom};
`;

export const AquaBtnNonAbsolte = styled.button`
    background: #2cb5a9;
    border:unset;
    color:white;
    padding: 15px;
    font-size: 30px;
    font-weight: 700;
    border-radius: 5px;
    margin-top: 20px;

    cursor: pointer;

    bottom: ${props => props.theme.bottom}
`;

