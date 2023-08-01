import { ICurrentMember } from "../../atoms/memberAtoms";
import axiosInstance from "../interceptor/authInterceptor";

export interface LoginParams {
    username : string;
    password : string;
}

export interface getMemberParams {
    memberId : number;
}

export const login = async (params : LoginParams) => {
    const response = await axiosInstance.post('/login', params)
    return response;
}

export const getMember = async (params : getMemberParams, currentMember : ICurrentMember) => {
    const response = await axiosInstance.get('/member/1', {
        headers : {
            token : currentMember.token
        }
    })
    return response;
}

export const tokenCheckTest = async (currentMember : ICurrentMember) => {
    const response = await axiosInstance.get('/member/1', {
        headers : {
            token : currentMember.token
        }
    })
    return response;
}

export const tokenRenew = async () => {
    return await axiosInstance.get('/token/renew', {withCredentials : true});
}