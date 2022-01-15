import {axiosServices} from "./axios.services";
import {urls} from "../configs/urls";

export const postServices = {
    getyUserId: (id) => axiosServices.get(`${urls.posts}?userId=${id}`).then(value => value.data)

}