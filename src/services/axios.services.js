import axios from "axios";
import baseUrl from "../configs/urls";

export  const axiosServices = axios.create({baseURL: baseUrl});

