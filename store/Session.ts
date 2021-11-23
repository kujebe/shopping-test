// eslint-disable-next-line import/named
import { ActionContext, ActionTree } from "vuex";

export interface IUser{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  authenticated: boolean;
}

export const state = () => ({
  user: {} as IUser
});

export type Sessionstate = ReturnType<typeof state>;

export const mutations = {
  setUser: (currentState: Sessionstate, payload: IUser) => {
    currentState.user = { ...payload };
  },
  logoutUser: (currentState: Sessionstate) => {
    currentState.user =  {} as IUser;
  }
};

export const actions: ActionTree<Sessionstate, Sessionstate> = {
  setUser(context: ActionContext<Sessionstate, any>, data: IUser): void {
    context.commit("setUser", data);
  },
  logoutUser(context: ActionContext<Sessionstate, any>): void {
    context.commit("logoutUser");
  }
};
