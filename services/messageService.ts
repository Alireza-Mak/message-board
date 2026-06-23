import axios from "axios";
type CreateObjectType = {
    object: { text: string , owner: string};
    reqConfig: { Authorization: string };
};
type UpdateObjectType = {
    id: string;
    object: ObjectType;
    reqConfig: { Authorization: string };
};
type DeleteObjectType = {
    id: string;
    reqConfig: { Authorization: string };
};
type ObjectType = { text: string };
const getAll = () =>
    axios
        .get(`${process.env.NEXT_PUBLIC_SERVICE_URL}`)
        .then((response) => response.data);

const create = ({ object, reqConfig }: CreateObjectType) =>
    axios
        .post(`${process.env.NEXT_PUBLIC_SERVICE_URL}`, object, {
            headers: reqConfig,
        })
        .then((response) => response.data);

const update = ({ id, object, reqConfig }: UpdateObjectType) =>
    axios
        .patch(`${process.env.NEXT_PUBLIC_SERVICE_URL}/${id}`, object, {
            headers: reqConfig,
        })
        .then((response) => response.data);

const deleteOne = ({ id, reqConfig }: DeleteObjectType) =>
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
