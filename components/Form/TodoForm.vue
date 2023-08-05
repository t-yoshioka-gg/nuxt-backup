<template>
  <div>
    <form>
      <input type="text" :value="text" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoForm",
  data() {
    return {
      text: "",
    };
  },
  computed: {},
  watch: {
    text(text, prevText) {
      console.log(text);
    },
  },
  mounted() {},
  methods: {
    // updateInput(name: string, event: Event) {
    //   this[name] = (event.target as HTMLInputElement).value;
    // },
  },
});
</script>

<style lang="" scoped></style>
