// eslint-disable-next-line import/named
import { ActionContext, ActionTree } from "vuex";

export interface ICartItem {
  id: number;
  name: string;
  price: number
}

export const state = () => ({
  items: [] as ICartItem[]
});

export type CartState = ReturnType<typeof state>;

export const mutations = {
  addToCart: (currentState: CartState, payload: ICartItem) => {
    currentState.items.push(payload);
  },
};

export const actions: ActionTree<CartState, CartState> = {
  addToCart(context: ActionContext<CartState, any>, data: ICartItem): void {
    context.commit("addToCart", data);
  },
};

export const getters = {
  cartItemsCount: (storeState: CartState): number => {
    return storeState.items.length;
  }
}
