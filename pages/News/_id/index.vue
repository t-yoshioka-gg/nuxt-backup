<template>
  <!-- <div>
    <h1>{{ title }}</h1>
    <div v-if="!!imageUrl">
      <nuxt-img :src="imageUrl" />
    </div>
    <p>{{ content }}</p>
  </div> -->
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      title: "",
      content: "",
      imageUrl: "",
      description: "",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
