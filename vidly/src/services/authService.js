import http from "./htttpService";
import {apiUrl} from "../config.json";
import jwtDecode from 'jwt-decode';


const apiEndPoint = apiUrl+"/auth";
const tokenKey ="token";

http.setJwt(getJwt());

export async function login(email,password) {
  const {data:jwt}=await http.post(apiEndPoint,{email,password});
  localStorage.setItem(tokenKey,jwt);
}


export async function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey,jwt);
  }

export function logout(){
    localStorage.removeItem(tokenKey);
}

export function getJwt(){
    return localStorage.getItem(tokenKey);
}

export function getCurrentUser(){
    try {
        const jwt= localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }

}

export default {
login,
logout,
getCurrentUser,
loginWithJwt,
getJwt
};