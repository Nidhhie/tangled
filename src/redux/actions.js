import actionTypes from "./actionTypes";

export function saveUser(payload) {
    return(
        {
            type:actionTypes.SAVE_USER,
            payload
        }
    )
}