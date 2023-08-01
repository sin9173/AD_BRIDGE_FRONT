import { ICurrentMember } from "../../atoms/memberAtoms";
import axiosInstance from "../interceptor/authInterceptor";

//매칭데이터
export interface IMatchSave {
    member_id : number; //회원 인덱스
    
    purpose : string; // 제작목적
    
    style : string; //연출스타일
    
    /** 제작 기간 */
    make_count : string; //제작편수
    
    video_length : string; //영상길이
    
    hope_delivery_date : string; //희망 납품일자
    
    
    /** 상세정보 */
    video_title : string; //영상제목
    
    company : string; // 업체명
    
    video_link : string; //참고영상링크
    
    budget : string; //예산범위
    
    content : string; //상세제작내용

    scope_list : IScope[]; //제작범위
}

export interface IScope {
    name : String;
}

// 매칭등록
export const matchSave = async (data: IMatchSave, currentMember : ICurrentMember) => {
    return await axiosInstance.post('/match', data, {
        headers : {
            Authentication : `Bearer ${currentMember.token}`
        }
    });
}

// export interface IMatchSearchData {

//     page : number;

//     username : string; //회원 아이디
    
//     email : string; // 회원 이메일
    
//     name : string; //회원명
    
//     phone : string; //전화번호

//     purpose : string; //제작목적

//     style : string; //연출스타일

//     video_title : string; //영상제목

//     company : string; //업체명

//     check_yn : boolean; // 확인 여부
// }

export interface IMatchListData {

    id : number;

    /** 회원 정보 */
    username : string; //회원 아이디

    email : string; // 회원 이메일
    
    member_name : string; //회원명
    
    phone : string; //전화번호

    /** 매칭데이터 */
    purpose : string; // 제작목적

    style : string; //연출스타일

    /** 제작 기간 */
    make_count : string; //제작편수

    video_length : string; //영상길이

    hope_delivery_date : string; //희망 납품일자


    /** 상세정보 */
    video_title : string; //영상제목

    company : string; // 업체명

    video_link : string; //참고영상링크
    
    budget : string; //예산범위

    content : string; //상세제작내용

    check_yn : boolean; //확인여부

    created_at : string;
}

export interface IMatchDetailData {
    id? : number;

    /** 회원 정보 */
    username? : string; //회원 아이디

    email? : string; // 회원 이메일
    
    member_name? : string; //회원명
    
    phone? : string; //전화번호

    /** 매칭데이터 */
    purpose? : string; // 제작목적

    style? : string; //연출스타일

    /** 제작 기간 */
    make_count? : string; //제작편수

    video_length? : string; //영상길이

    hope_delivery_date? : string; //희망 납품일자


    /** 상세정보 */
    video_title? : string; //영상제목

    company? : string; // 업체명

    video_link? : string; //참고영상링크
    
    budget? : string; //예산범위

    content? : string; //상세제작내용

    check_yn? : boolean; //확인여부

    created_at? : string;


    scope_list? : IScope[];
}

export const matchingList = async (data: URLSearchParams, currentMember : ICurrentMember) => {
    return await axiosInstance.get('/admin/matches', {
        params : data,
        headers : {
            Authentication : `Bearer ${currentMember.token}`
        }
    })
}

export const matchingDetail = async (id : number, currentMember : ICurrentMember) => {
    return await axiosInstance.get(`/admin/match/${id}`, {
        headers : {
            Authentication : `Bearer ${currentMember.token}`
        }
    })
}