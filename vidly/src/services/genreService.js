import http from './htttpService';
import {apiUrl} from "../config.json";


const apiEndPoint = apiUrl+"/genres";


export function  getGenres() {
    return http.get(apiEndPoint);
    //console.log(result);
  }