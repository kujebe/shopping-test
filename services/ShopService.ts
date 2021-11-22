import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ServerApiService } from "@/services/ServerApiService";

export interface IProduct {
  id: number;
  sku: string;
  name: string;
  description: string;
  price: number;
}

const baseURL = "/api/shop/";

class Service {
  public getProducts(config?: { [key: string]: string }): Observable<IProduct[]> {
    const url = config
      ? `${config.shopUrl}${baseURL}/products`
      : `${baseURL}/products`;

    return ServerApiService.get(url)
      .pipe(map((response) => response.data))
  }

}

export const ShopService = new Service();
