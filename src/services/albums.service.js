import {axiosServices} from "./axios.services";
import {urls} from "./urls";

export const albumService = {
    getAll: () => axiosServices.get(urls.albums).then(value => value.data),
    getById: (id) => axiosServices.get(`${urls.albums}/${id}`).then(value => value.data)
}