<template>
  <div class="c-news-list"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewsItem from "./SearchNewsItem.vue";

export default defineComponent({
  name: "SearchNewsList",
  components: {
    NewsItem,
  },
  mixins: [],
  props: {},
  data() {
    return {};
  },

  watch: {},
  mounted() {},
  methods: {},
});
</script>

<style lang="scss" scoped>
.c-news-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
