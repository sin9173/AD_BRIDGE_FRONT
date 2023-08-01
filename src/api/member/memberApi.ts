import { ICurrentMember } from "../../atoms/memberAtoms";
import axiosInstance from "../interceptor/authInterceptor";


export interface ISignup {
    username : string;
    password : string;
    password1 : string;
    email : string;
    name : string;
    phone : string;
}

export interface IPasswordChange {
    memberId : number;
    password : string;
}

// 회원가입
export const signup = async (data: ISignup) => {
    return await axiosInstance.post('/signup', data);
}

//비밀번호 수정
export const passwordChange = async (data: IPasswordChange) => {
    return await axiosInstance.patch(`/member/${data.memberId}/password`, data);
}

//회원정보 조회
export const getMember = async (memberId : number, currentMember : ICurrentMember) => {
    return await axiosInstance.get(`/member/${memberId}`, {
        headers : {
            token : currentMember.token
        }
    });
}