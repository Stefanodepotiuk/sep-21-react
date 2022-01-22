import {axiosServices} from "./axios.services";
import {urls} from "./urls";

export const userService = {
    getAll: () => axiosServices.get(urls.users).then(value => value.data),
    getById: (id) => axiosServices.get(`${urls.users}/${id}`).then(value => value.data)
}