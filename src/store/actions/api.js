import { FETCH_API } from "../../utils/constants";
import { BASE_URL } from "../api.middleware";
import { TRANSLATE_AI_API, TRANSLATE_API, TRANSLATE_NUMBER_API } from "../types/api";



export const fetchTranslateAPI = ({ data, type, lan }) => {
    return {
        [FETCH_API]: {
            method: "POST",
            url: `${BASE_URL}/api/v1/translate/${type}`,
            data: { to: lan, source: data }
        },
        api: TRANSLATE_API
    }
};

export const fetchAiTranslateAPI = ({ data, lan }) => {
    return {
        [FETCH_API]: {
            method: "POST",
            url: `${BASE_URL}/api/v1/translate/ai-convert`,
            data: {
                toLan: lan,
                text: data
            }
        },
        api: TRANSLATE_AI_API
    }
};

export const fetchNumberTranslateAPI = ({ data, lan }) => {
    return {
        [FETCH_API]: {
            method: "POST",
            url: `${BASE_URL}/api/v1/translate/number`,
            data: {
                toLan: lan,
                number: data
            }
        },
        api: TRANSLATE_NUMBER_API
    }
};