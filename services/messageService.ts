import {
    CreateMsgObjType,
    UpdateMsgObjType,
    DeleteMsgObjType,
} from "@/types/all";
import axios from "axios";

const getAll = () =>
    axios
        .get(`${process.env.NEXT_PUBLIC_SERVICE_URL}`)
        .then((response) => response.data);

const create = ({ object, reqConfig }: CreateMsgObjType) =>
    axios
        .post(`${process.env.NEXT_PUBLIC_SERVICE_URL}`, object, {
            headers: reqConfig,
        })
        .then((response) => response.data);

const update = ({ id, object, reqConfig }: UpdateMsgObjType) =>
    axios
        .patch(`${process.env.NEXT_PUBLIC_SERVICE_URL}/${id}`, object, {
            headers: reqConfig,
        })
        .then((response) => response.data);

const deleteOne = ({ id, reqConfig }: DeleteMsgObjType) =>
    axios
        .delete(`${process.env.NEXT_PUBLIC_SERVICE_URL}/${id}`, {
            headers: reqConfig,
        })
        .then((response) => response.data);

const messageService = {
    getAll,
    create,
    update,
    deleteOne,
};

export default messageService;
