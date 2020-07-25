<template>
  <div id="app">
      <div class="container">
          <h1 class="title">Future Table</h1>
              <div class="btn__tables text-center">
                  <h3>Выбор таблицы</h3>
                  <button class="btn btn-outline-dark mr-1" @click="onBigTable">Большая таблица</button>
                   <button class="btn btn-outline-dark" @click="onLittleTable">Маленькая таблица</button>
              </div>
                <div >
                    <Preloader v-if="loading "></Preloader>
                    <Table
                            class="d-none"
                            :class="{ 'd-block': loading === false }"
                            :users_data="users"
                    />
                </div>
      </div>
  </div>
</template>

<script>
import Table from "./components/Table";
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
  name: 'App',
    data() {
      return {
          tableLink: '',
          loading: null
      }
    },
  components: {
    Table
  },
 computed: {
    ...mapGetters(['users'])
  },
 methods: {
    ...mapActions(['getUsers']),
    ...mapMutations(['setUsers']),
    async onBigTable() {
        this.loading = true
       await this.getUsers(
             this.tableLink = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
         )
        this.loading = false

      },
     async onLittleTable() {
         this.loading = true
       await this.getUsers(this.tableLink = ' http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'),
           this.loading = false
      }

  },
  mounted() {
  }


}
</script>

<style>
.title {
  text-align: center;
  margin: 3rem 0;
}

</style>
