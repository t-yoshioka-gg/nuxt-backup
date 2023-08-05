import { Module } from "vuex";
import { RootState, SearchNewsState } from "@/store/types";

const state: any = {
  latestNews: [],
};

export const latestNews: Module<SearchNewsState, RootState> = {
  state,
  getters: {},
  actions: {},
  mutations: {},
};
