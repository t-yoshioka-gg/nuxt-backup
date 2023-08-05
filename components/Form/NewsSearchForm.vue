<template>
  <div>
    <div>{{ input }}</div>
    <input v-model="input" placeholder="topic" />
    <button @click="searchNews">search</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsSearchForm",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      input: "",
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    searchNews() {
      this.$store.dispatch("searchNewsByKeyword", this.input).then((status) => {
        if (status === true) {
          this.$router.push("/news");
        }
      });
    },
  },
});
</script>

<style lang="" scoped></style>
