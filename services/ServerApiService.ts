import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { from, Observable } from "rxjs";

import { mapError } from "@/utils/ObservableUtils";

class Service {
  public get(path: string, config?: AxiosRequestConfig | { params: string | URLSearchParams }): Observable<AxiosResponse> {
    return from(axios.get(path, config)).pipe(mapError());
  }
}

export const ServerApiService = new Service();
