type LoginObjectType = { username: string; password: string };
type MsgObjType = { text: string };

type CreateMsgObjType = {
    object: { text: string; owner: string };
    reqConfig: { Authorization: string };
};
type UpdateMsgObjType = {
    id: string;
    object: MsgObjType;
    reqConfig: { Authorization: string };
};
type DeleteMsgObjType = {
    id: string;
    reqConfig: { Authorization: string };
};
export type {
    LoginObjectType,
    CreateMsgObjType,
    UpdateMsgObjType,
    DeleteMsgObjType,
};
