import axios from "axios";
import { IUsersResponse } from "../models/user";
import { IApiService, IApiUrls } from "./api-service.interface";
import { apiUrls } from "./urls";

export class ApiService implements IApiService {
  constructor(private urls: IApiUrls) {}

  getUsersData(per_page?: number, page?: number): Promise<IUsersResponse> {
    const pageNumber = `&page=${page ? page : ""}`;
    const perPage = `?per_page=${per_page ? per_page : ""}`;
    return axios
      .get<IUsersResponse>(this.urls.users.concat(perPage).concat(pageNumber))
      .then((res) => res.data);
  }
}

export const getApiService = () => new ApiService(apiUrls);
