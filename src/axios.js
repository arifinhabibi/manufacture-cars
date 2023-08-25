import axios from "axios";

export default axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        "X-RapidAPI-Key": "455c9cafdamshcf8df0ad5042661p1db4c8jsnb6bce63fca44",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
    }
})