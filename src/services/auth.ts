import axios from "axios";
import { LoginRequestDto } from "../dto/login";

export const LoginService = (url:string|undefined,body: LoginRequestDto) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios
        .post(`${url}/auth/login`, body)
        .then((res) => res.data);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
