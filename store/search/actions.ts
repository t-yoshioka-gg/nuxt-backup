import { ActionTree } from "vuex";
import { SearchNewsState, RootState, News } from "@/store/types";
import { v4 as uuidv4 } from "uuid";

const actions: ActionTree<SearchNewsState, RootState> = {
  searchNewsByKeyword: async function ({ commit }, input: string) {
    try {
      const apiKey = this.app.$config.NEWSDATA_API_KEY;
      const res = await this.$axios.get(
        `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${input}&language=en`
      );
      const data = res.data;

      if (data.status === "success" && data.results.length > 0) {
        const newsWithId = data.results.map((news: News) => ({
          ...news,
          id: uuidv4(),
        }));
        commit("addNews", newsWithId);
      }

      return true;
    } catch (error) {}
  },
};

export default actions;
