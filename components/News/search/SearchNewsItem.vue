<template>
  <div class="c-news-item"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchNewsItem",
  components: {},
  mixins: [],
  props: {
    id: String,
    title: String,
    description: String,
    content: String,
    pubDate: String,
    image_url: String,
    category: Array,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
});
</script>

<style lang="scss" scoped>
.c-news-item {
  width: calc((100% / 3) - (20px * 2 / 3));
  &:not(:nth-child(3n + 1)) {
    margin-left: 20px;
  }

  img {
    width: 100%;
  }
}
</style>
