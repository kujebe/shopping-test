import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ServerApiService } from "@/services/ServerApiService";
import { IUser } from "@/store/Session";

const baseURL = "/api/users/";

class Service {
  public getUser(email: string, config?: { [key: string]: string }): Observable<IUser> {
    const url = config
      ? `${config.shopUrl}${baseURL}/users?email=${email}`
      : `${baseURL}/users?email=${email}`;

    return ServerApiService.get(url)
      .pipe(map((response) => response.data[0]))
  }
}

export const AuthService = new Service();
