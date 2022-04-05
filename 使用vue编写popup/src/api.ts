import axios from "axios";
import * as lib from "./lib";

export const cli = axios.create()

export function camelCase(resp: any) {
    resp.data = lib.camelCase(resp.data);
    return resp;
}

export function pipList() {
    return axios.get("/api/piplist");
}

export function getModuleInfo(moduleName: string) {
    return axios.get("/api/get_module_info", {
        params: {
            path: moduleName,
        }
    })
}