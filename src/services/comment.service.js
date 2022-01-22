import {axiosServices} from "./axios.services";
import {urls} from "./urls";

export const commentsService = {
    getAll: () => axiosServices.get(urls.comments).then(value => value.data),
    getById: (id) => axiosServices.get(`${urls.comments}/${id}`).then(value => value.data)
}