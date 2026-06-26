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
const getLoggedInUsername = () => {
    const token = sessionStorage.getItem("token");
    if (!token) return "none";

    return jwtDecode(token).username;
};
const removeToken = () => sessionStorage.removeItem("token");

const auth = {
    setToken,
    tokenExists,
    hasTokenExpired,
    getLoggedInUsername,
    removeToken,
};
export default auth;
