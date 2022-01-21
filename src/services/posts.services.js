import {axiosServices} from "./axios.services";
import {urls} from "../configs/urls";

export const postServices = {
    getAll: () => axiosServices.get(urls.posts).then(value => value.data),
    getById:(id) => axiosServices.get(`${urls.posts}/${id}`).then(value => value.data)
}