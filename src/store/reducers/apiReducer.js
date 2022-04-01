import { TRANSLATE_AI_API, TRANSLATE_API, TRANSLATE_NUMBER_API } from "../types/api";

const initialState = {
    [TRANSLATE_API]: {},
    [TRANSLATE_AI_API]: {},
    [TRANSLATE_NUMBER_API]: {}
};

export function Api(state = initialState, action) {
    if ([TRANSLATE_API, TRANSLATE_AI_API, TRANSLATE_NUMBER_API].includes(action.type)) {
        return { ...state, [action.type]: action.data };
    }
    return state;
}