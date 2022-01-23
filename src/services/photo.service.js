import {axiosServices} from "./axios.services";
import {urls} from "./urls";

export const photoService = {
    getAll: () => axiosServices.get(urls.photos).then(value => value.data),
    getById: (id) => axiosServices.get(`${urls.photos}/${id}`).then(value => value.data),
    getByUserId: (id) => axiosServices.get(`${urls.photos}?userId=${id}`).then(value => value.data)
}