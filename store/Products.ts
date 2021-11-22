// eslint-disable-next-line import/named
import { ActionContext, ActionTree } from "vuex";

import { IProduct } from "@/services/ShopService";

export const state = () => ({
  products: {} as IProduct[]
});

export type ProductState = ReturnType<typeof state>;

export const mutations = {
  setProducts: (currentState: ProductState, payload: IProduct[]) => {
    currentState.products = { ...payload };
  },
};

export const actions: ActionTree<ProductState, ProductState> = {
  setProducts(context: ActionContext<ProductState, any>, data: IProduct[]): void {
    context.commit("setProducts", data);
  },
};
