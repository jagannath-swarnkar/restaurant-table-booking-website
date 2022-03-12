import { Dispatch } from "redux";
import { get, post } from "../../utils/request";
import { setCookie } from "../../utils/session";
import { ActionType, ActionTypes } from "../ActionTypes";


// ---------------------------------action-interfaces---------------------------
export interface ConfitAction {
    type: ActionType.SET_CONFIG,
    payload: ConfigState
}

// -----------------------------------action-creators--------------------------

export type ConfigState = {
    isMobile?: boolean,
    lang?: string,
    height?: number,
    width?: number
}
export const setConfig = (payload: ConfigState) => {
    return async function (dispatch: Dispatch<ActionTypes>) {
        dispatch({
            type: ActionType.SET_CONFIG,
            payload: payload
        })
    }
}

export type ILoginPayload = {
    email: string,
    password: string
}
export const login = async(payload: ILoginPayload) => {
    return post("/login", payload);

}