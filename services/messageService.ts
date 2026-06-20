import axios from "axios";
type ObjectType = { text: string };
const getAll = () =>
    axios
        .get(`${process.env.NEXT_PUBLIC_SERVICE_URL}`)
        .then((response) => response.data);

const create = (object: ObjectType) =>
    axios
        .post(`${process.env.NEXT_PUBLIC_SERVICE_URL}`, object)
        .then((response) => response.data);

const update = (id: string, object: ObjectType) =>
    axios
        .patch(`${process.env.NEXT_PUBLIC_SERVICE_URL}/${id}`, object)
        .then((response) => response.data);

const deleteOne = (id: string) =>
    axios
        .delete(`${process.env.NEXT_PUBLIC_SERVICE_URL}/${id}`)
        .then((response) => response.data);

const messageService = {
    getAll,
    create,
    update,
    deleteOne,
};

export default messageService;
