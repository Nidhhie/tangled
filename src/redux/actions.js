import actionTypes from "./actionTypes";

export function saveUser(payload) {
    // action for saving (on login) and updating (on edit name) the user
    return(
        {
            type:actionTypes.SAVE_USER,
            payload
        }
    )
}