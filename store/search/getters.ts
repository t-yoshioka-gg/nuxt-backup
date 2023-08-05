import { GetterTree } from "vuex";
import { SearchNewsState, RootState } from "@/store/types";

const getters: GetterTree<SearchNewsState, RootState> = {
  searchNews: (state: SearchNewsState) => {
    return state.searchNews;
  },
  getNewsById: (state: SearchNewsState) => (id: string) => {
    return state.searchNews.find((newsItem) => newsItem.id === id);
  },

};

export default getters;
