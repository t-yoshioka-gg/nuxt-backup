import { Module } from "vuex";
import { RootState, SearchNewsState } from "@/store/types";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state: SearchNewsState = {
  searchNews: [],
};

export const searchNews: Module<SearchNewsState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
