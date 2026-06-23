import { jwtDecode } from "jwt-decode";

const setToken = (token) => sessionStorage.setItem("token", token);
const tokenExists = () => (sessionStorage.getItem("token") ? true : false);
const hasTokenExpired = () => {
    const token = sessionStorage.getItem("token");
    if (!token) return true;
    const decodedToken = jwtDecode(token);
    if (Date.now() > decodedToken.exp * 1000) {
        sessionStorage.removeItem("token");
        return true;
    }
    return false;
};

const auth = { setToken, tokenExists, hasTokenExpired };
export default auth;
