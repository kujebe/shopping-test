// eslint-disable-next-line import/named
import { ActionContext, ActionTree } from "vuex";

export interface ICartItem {
  id: number;
  sku: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const state = () => ({
  items: [] as ICartItem[]
});

export type CartState = ReturnType<typeof state>;

export const mutations = {
  addToCart: (currentState: CartState, payload: ICartItem) => {
    const itemExistInCart = currentState.items.map((item) => item.id).includes(payload.id);
    if (itemExistInCart) {
      const itemIndex = currentState.items.findIndex((item) => item.id === payload.id);
      payload.quantity = currentState.items[itemIndex].quantity + 1;
      currentState.items.splice(itemIndex, 1, payload);
    } else {
      currentState.items.push(payload);
    }
  },
  setQuantity: (currentState: CartState, payload: any) => {
    const itemIndex = currentState.items.findIndex((item) => item.id === payload.id);
    currentState.items.map((item, index) => {
      if (index === itemIndex) {
        if (payload.event === "increment") {
          item.quantity += 1;
        } else {
          item.quantity -= 1;
        }
      }

      return item;
    })
  },
  deleteItem: (currentState: CartState, payload: any) => {
    currentState.items =  currentState.items.filter((item) => item.id !== payload)
  }
};

export const actions: ActionTree<CartState, CartState> = {
  addToCart(context: ActionContext<CartState, any>, data: ICartItem): void {
    context.commit("addToCart", data);
  },
  setQuantity(context: ActionContext<CartState, any>, data: ICartItem): void {
    context.commit("setQuantity", data);
  },
  deleteItem(context: ActionContext<CartState, any>, data: ICartItem): void {
    context.commit("deleteItem", data);
  }
};

export const getters = {
  cartItemsCount: (storeState: CartState): number => {
    return storeState.items.length;
  },
  cartTotal: (storeState: CartState): number => {
    return storeState.items.reduce((a: any, b: any) => a + (b.price * b.quantity), 0) ;
  }
}
