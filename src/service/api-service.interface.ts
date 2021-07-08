import { IUsersResponse } from "../models/user";

export interface IApiService {
  getUsersData(): Promise<IUsersResponse>;
}

export interface IApiUrls {
  users: string;
}
