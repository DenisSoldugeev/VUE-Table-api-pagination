<template>
    <div class="">
        <button class="btn btn-primary mb-4" @click="showModal = true">Добавить в таблицу</button>
        <div class="modal d-block" v-if="showModal" @close="showModal = false" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Добавить в таблицу</h5>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addUsers">
                            <div class="form-group">
                                <input type="number" class="form-control" v-model="id" required placeholder="id">
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" v-model="firstName" required placeholder="First Name">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="lastName" required placeholder="Last Name">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" v-model="email" required placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="phone" required placeholder="Phone">
                            </div>
                            <button  class="btn btn-success mr-1">Добавить в таблицу</button>
                            <button  class="btn btn-danger" @click="showModal = false">Закрыть</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        name: "AddForm",
        data () {
          return {
              showModal: false,
              id: 0,
              firstName: '',
              lastName: '',
              email: '',
              phone: ''
          }
        },
        methods: {
            ...mapMutations(['createUser']),
            addUsers() {
                this.createUser({
                    id: this.id,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    phone: this.phone
                })
                this.id = this.firstName = this.lastName = this.email = this.phone = ''
            }
        }
    }
</script>

<style scoped>

</style>