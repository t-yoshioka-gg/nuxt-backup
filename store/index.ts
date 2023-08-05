import Vuex from "vuex";
import { searchNews } from "./search";
import { latestNews } from "./latest";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      searchNews,
      latestNews,
    },
  });
};

export default createStore;
