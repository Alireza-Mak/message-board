const setToken = (token) => sessionStorage.setItem("token", token);
const tokenExists = () => (sessionStorage.getItem("token") ? true : false);

const auth = { setToken, tokenExists };
export default auth;
