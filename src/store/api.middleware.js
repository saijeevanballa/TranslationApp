import axios from "axios";
import { toast } from "react-toastify";

import { defaultTostStyle, FETCH_API } from "../utils/constants";
import { SHOW_LOADER, STOP_LOADER } from "./types/loader";

export const BASE_URL = "https://ai-translation-apis.p.rapidapi.com";
// export const BASE_URL = "http://localhost:8080"


const FetchAPI = (store) => (next) => async (action) => {
    try {
        if (!action[FETCH_API]) {
            return next(action);
        }
        next({ type: SHOW_LOADER })
        action[FETCH_API].headers = {
            'content-type': 'application/json',
            'X-RapidAPI-Host': 'ai-translation-apis.p.rapidapi.com',
            'X-RapidAPI-Key': store.getState().authentication.token,
            ...action[FETCH_API].headers
        }
        console.log(action[FETCH_API])
        let response = await axios(action[FETCH_API])
        next({ type: `${action.api}`, data: response.data })
        return response
    } catch (error) {
        console.log(error)
        toast("Something went wrong. Please try again.", { type: "error", ...defaultTostStyle });
    } finally {
        next({ type: STOP_LOADER })
    }
}

export default FetchAPI