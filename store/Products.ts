import groupBy from "lodash-es/groupBy";
// eslint-disable-next-line import/named
import { ActionContext, ActionTree } from "vuex";

import { IProduct } from "@/services/ShopService";

export interface ICategory {
  name: string;
  count: number;
}

export const state = () => ({
  products: {} as IProduct[],
  filteredProducts: {} as IProduct[]
});



export type ProductState = ReturnType<typeof state>;

export const mutations = {
  setProducts: (currentState: ProductState, payload: IProduct[]) => {
    currentState.products = { ...payload };
  },
  setFilteredProducts: (currentState: ProductState, payload: IProduct[]) => {
    currentState.filteredProducts = { ...payload };
  },
};

export const actions: ActionTree<ProductState, ProductState> = {
  setProducts(context: ActionContext<ProductState, any>, data: IProduct[]): void {
    context.commit("setProducts", data);
  },
  setFilteredProducts(context: ActionContext<ProductState, any>, data: IProduct[]): void {
    context.commit("setFilteredProducts", data);
  }
};

export const getters = {
  categories: (storeState: ProductState): ICategory[] => {
    return Object
    .entries(groupBy(storeState.products, "category"))
    .map(([categoryName, products]) => ({ name: categoryName, count: products.length}));
  }
}
