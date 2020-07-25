<template>
  <div id="app">
    <h1 class="title">Future Table</h1>
    <div class="main">
      <Table
              :users_data="users"
      />
    </div>
  </div>
</template>

<script>
import Table from "./components/Table";
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'App',
  components: {
    Table
  },
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    ...mapActions(['getUsers'])
  },
  mounted() {
    this.getUsers()
  }


}
</script>

<style>
.title {
  text-align: center;
  margin: 5rem 0;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
