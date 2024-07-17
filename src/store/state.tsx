import { create } from "zustand";
import { getRequest } from "../utils/request";

interface storeType {
  user: any;
  authorize: () => void;
}

const store = create<storeType>((set) => ({
  user: null,
  authorize: () => {
    getRequest("/auth/me").then(({ data }) => {
      set(() => ({ user: data }));
    });
  },
}));
//  set(() => ({ user: doc.data(), loggedOut: false }));
export default store;
