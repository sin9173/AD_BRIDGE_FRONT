import React, { useState } from 'react';

import MatchingWriteHeader from "../../components/MatchingWriteHeader";
import { MatchingBtnDiv, MatchingContentDiv, MatchingStageContainer, MatchingStageLogo } from "../../styles/matching/MatchingStageStyles";

const MatchingStage = () => {

    const [purpose, setPurpose] = useState("");
    const [style, setStyle] = useState("");
    const [makeCount, setMakeCount] = useState("");
    const [videoLength, setVideoLength] = useState("");
    const [hopeDeliveryDate, setHopeDeliveryDate] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const [company, setComapny] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [budget, setBudget] = useState("");
    const [content, setContent] = useState("");

    const [scope, setScope] = useState<String[]>([]);

    const [writePurpose, setWritePurpose] = useState(true);
    const [writeStyle, setWriteStyle] = useState(false);
    const [writeScope, setWriteScope] = useState(false);
    const [writeDate, setWriteDate] = useState(false);
    const [writeConfirm, setWriteConfirm] = useState(false);

    const writeClear = () => {
        setWritePurpose(false);
        setWriteStyle(false);
        setWriteScope(false);
        setWriteDate(false);
        setWriteConfirm(false);
    }

    const movePurpose = () => {
        writeClear();
        setWritePurpose(true);
    }

    const moveStyle = () => {
        writeClear();
        setWriteStyle(true);
    }

    const moveScope = () => {
        writeClear();
        setWriteScope(true);
    }

    const moveDate = () => {
        writeClear();
        setWriteDate(true);
    }

    const moveConfirm = () => {
        writeClear();
        setWriteConfirm(true);
    }

    return <div>
        <MatchingWriteHeader/>
        <MatchingStageContainer>
            <MatchingStageLogo>
                <img src="/images/logo_black.png"></img>
            </MatchingStageLogo>
            <MatchingContentDiv>
                내용
            </MatchingContentDiv>
            <MatchingBtnDiv>
                <button>다음</button>
            </MatchingBtnDiv>
        </MatchingStageContainer>
    </div>
}

export default MatchingStage;