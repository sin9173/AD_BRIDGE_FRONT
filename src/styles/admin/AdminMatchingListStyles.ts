
import styled from "styled-components";

export const MatchingListContainer = styled.div`
    display: flex;

    justify-content: center;

    align-items: flex-start;

    flex-wrap: wrap;

    background: #e7f6f5;

    padding: 5% 5% 5% 5%;

    &>div {
        display: block;
        width: 90%;
    }
`;

export const MatchingListTitleDiv = styled.div`
    font-size: 30px;
    font-weight: 700;
`;

export const MatchingListDataDiv = styled.div`
    margin-top: 50px;
    background: white;

    min-height: 500px;

    border-radius: 10px;

    padding: 5% 0% 5% 3%;

    &>div {
        
        width: 90%;
    }

    &>div:nth-child(1) {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 80px;
        justify-content: space-between;
    }

    &>div:nth-child(2) {
        border-bottom : 2px solid #2cb5a9;
        p {
            margin: 5px;
        }
    }

    &>div:nth-child(3) {
        margin-bottom: 100px;
    }
`;


interface GreenProps {
    size? : number;
    weight? : number;
}

export const Green = styled.p<GreenProps>`
    color: #2cb5a9;
    font-size: ${props => props.size?props.size + 'px':12 + 'px'};
    font-weight: ${props => props.weight?props.weight:500};
`;


export const MatchingTable = styled.table`
    border-top : unset;
    color : #888888;

    tr {
        border-bottom : 1px solid #888888;
        border-right: unset;

        th {
            border-right: 1px solid #2cb5a9;
            border-bottom : 1px solid #888888;
            height: 5vh;
            &:last-child {
                border-right: unset;
            }
        }
     
        td {
            border-right: 1px solid #888888;
            border-bottom : 1px solid #888888;
            height: 5vh;
            &:last-child {
                border-right: unset;
            }
        }

        .date {
            width: 15vw;
            text-align: center;
        }

        .title {
            width: 45vw;
        }

        .name {
            width: 15vw;
            text-align: center;
        }

        .phone {
            width: 20vw;
            text-align: center;
        }
        
    }
    
`;

interface CardSpanProps {
    background? : string;
}

export const CardSpan = styled.span<CardSpanProps>`
    width: 430px;
    height: 250px;

    background: ${props => props.background};
    color : white;
    font-weight: 700;
    font-size: 25px;

    border-radius: 10px;

    position: relative;

    p {
        position: absolute;
    }

    p:nth-child(1) {
        left: 20px;
        top : 5px;

        font-weight: 500;
        font-size: 35px;
    }

    p:nth-child(2) {
        right: 35px;
        bottom : 15px;

        font-weight: 700;
        font-size: 35px;
    }
`;