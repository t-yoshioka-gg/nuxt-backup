<template>
  <div>
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <h2>
          {{ item.title }}
        </h2>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NewsWithId } from "~/store/types";

export default defineComponent({
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {
    newsList(): NewsWithId[] {
      return this.$store.getters["searchNews"];
    },
  },
  watch: {},
  mounted() {
    console.log(this.newsList);
  },
  methods: {},
  middleware: "newsRedirect",
});
</script>

<style lang="" scoped></style>
