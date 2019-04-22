import axios from "axios";
import apiConfig from "@/apiConfig";

axios.defaults.baseURL = apiConfig.baseUrl;

export default class AxiosConfig {
    /**
     * @description get 请求
     * @param url 请求地址
     * @param data 参数
     */
    static axiosGet(url: string, data: any) {
        return axios({
            method: "get",
            url,
            params: data,
        });
    }

    /**
     * @description post 请求
     * @param url 请求地址
     * @param data 参数
     * @param isJson 是否为 json 格式，默认 form 表单格式
     */
    static axiosPost(url: string, data: any, isJson: boolean = false) {
        if (isJson) {
            return axios({
                method: "post",
                url,
                data,
            });
        } else {
            return axios({
                method: "post",
                url,
                params: data,
            });
        }
    }

    /**
     * @description put 请求
     * @param url 请求地址
     * @param data 参数
     * @param isJson 是否为 json 格式，默认 form 表单格式
     */
    static axiosPut(url: string, data: any, isJson: boolean = false) {
        if (isJson) {
            return axios({
                method: "put",
                url,
                data,
            });
        } else {
            return axios({
                method: "put",
                url,
                params: data,
            });
        }
    }

    /**
     * @description delete 请求
     * @param url 请求地址
     * @param data 参数
     * @param isJson 是否为 json 格式，默认 form 表单格式
     */
    static axiosDelete(url: string, data: any, isJson: boolean = false) {
        if (isJson) {
            return axios({
                method: "delete",
                url,
                data,
            });
        } else {
            return axios({
                method: "delete",
                url,
                params: data,
            });
        }
    }
}

