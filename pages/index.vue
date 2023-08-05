<template>
  <div>
    <NewsSearchForm />
    <SearchNewsList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NewsSearchForm from "~/components/Form/NewsSearchForm.vue";
import SearchNewsList from "~/components/News/search/SearchNewsList.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    NewsSearchForm,
    SearchNewsList,
  },
  mounted() {
    console.log(this.$store.getters["searchNews"]);
  },
});
</script>
