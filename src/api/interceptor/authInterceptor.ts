import axios from "axios";
import { tokenRenew } from "../auth/authApi";

const axiosInstance = axios.create({
    // baseURL : "http://localhost:8080/adbridge",
    baseURL : "http://adbridge.net:8080/adbridge",
    withCredentials : true,
    timeout: 20000
})

axiosInstance.interceptors.request.use((config) => {
    // console.log("config : " + config);
    return config;
}, 
(error) => {
    console.log("instance Request Errror : " + error);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
    let result = response?.data;
    const token = response?.headers['token'];
    if(token) {
        result.data.token = response?.headers['token'];
    }
    // console.log("response : " + JSON.stringify(response));
    return result;
},
async (error) => {
    let status = error?.status;
    // const {
    //     config,
    //     response : { status }
    // } = error;

    if(!status) {
        let messageTemp = error?.message;
        messageTemp = messageTemp.replace("Request failed with status code ", "");

        status = Number(messageTemp);
    }

    // console.log("error : " + JSON.stringify(error));

    // console.log("status : " + status);
    if(!status) {
        // console.log("message : " + error?.message);
        return Promise.reject({
            code : '99999',
            message : error?.message
        })
    }


    if(status === 401 && error.config.url!=='/login') {
        
        if(error.config.url=='/token/renew') {
            alert("다시 로그인 해주세요.");
            window.location.href='/login';
        }
        // console.log("code : " + + error.response.data.code);
        // console.log("message : " + error.response.data.message);

        
        let renewResponse;
        await tokenRenew()
        .then((obj) => {
            // console.log("obj : " + JSON.stringify(obj));
            renewResponse = obj;

            if(renewResponse.status === 200) {
                const renewToken = renewResponse?.headers['token'];
                const originRequest = error.config;
    
                //
                originRequest.headers.Authentication = `Authentication Bearer ${renewToken}`;
    
                localStorage.setItem('accessToken', renewToken);
                return axiosInstance(originRequest);
            } else if(renewResponse.status === 401) {
                alert("다시 로그인 해주세요.");
                window.location.href='/login';
            }
        }) 
        .catch((error) => {
            // console.log("renew Error : " + JSON.stringify(error));

        })

        // console.log("renew Response : " + JSON.stringify(renewResponse));
    }

    // console.log("error : " + JSON.stringify(error));
    alert(`${error?.message} (CODE : ${error?.code})`);
    return Promise.reject(error?.response?.data);
});

export default axiosInstance;