import { ENV } from "../env";
import { IApiUrls } from "./api-service.interface";

export const apiUrl = ENV.USER_API_URL;

export const apiUrls: IApiUrls = {
  users: apiUrl,
};
