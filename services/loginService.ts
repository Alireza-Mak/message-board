import axios from "axios";
type ObjectType = { username: string; password: string };

const loginService = (object: ObjectType) =>
    axios
        .post(`${process.env.NEXT_PUBLIC_LOGIN_URL}`, object)
        .then((response) => response.data);

export default loginService;
