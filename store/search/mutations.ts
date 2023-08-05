import { MutationTree } from "vuex";
import { News, NewsWithId, SearchNewsState } from "@/store/types";

const mutations: MutationTree<SearchNewsState> = {
  addNews: (state, news: NewsWithId[]) => {
    state.searchNews = news;
  },

  // remove: (state, id: string) => {
  //   state.todos = state.todos.filter((e: Todo) => e.id !== id);
  // },
};

export default mutations;
