import { LoginObjectType } from "@/types/all";
import axios from "axios";

const loginService = (object: LoginObjectType) =>
    axios
        .post(`${process.env.NEXT_PUBLIC_LOGIN_URL}`, object)
        .then((response) => response.data)
        .catch(() => {
            throw new Error("Username or password is not correct.");
        });

export default loginService;
