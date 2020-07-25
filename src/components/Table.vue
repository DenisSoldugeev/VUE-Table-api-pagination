<template>
    <div >
        <AddForm />
        <lable id="showUsers">Пользователей на странице</lable>
        <select id="showUsers" class="custom-select w-25 mb-2 d-block" v-model="showUsers">
            <option  value="10">10</option>
            <option  value="20">20</option>
            <option  value="30">30</option>
            <option  value="40">40</option>
            <option  value="50">50</option>
        </select>
        <table class="table table-bordered table-striped">
            <thead class="thead-dark">
            <tr>
                <th scope="col" @click="sortById">id <i class="fas fa-sort-down" :class="{ 'fa-sort-up': sortId }"></i></th>
                <th scope="col" @click="sortByFirstName">First Name <i class="fas fa-sort-down" :class="{ 'fa-sort-up': sortFirstName}"></i></th>
                <th scope="col" @click="sortByLastName">Last Name <i class="fas fa-sort-down" :class="{ 'fa-sort-up': sortLastName }"></i></th>
                <th scope="col">Email</th>
                <th scope="col">Phone
                </th>
            </tr>
            </thead>
            <tbody>
            <TableRow
                    v-for="row in paginationUsers"
                    :key="row.email"
                    :rowData="row"
            />
            </tbody>
        </table>
        <Paginate
                :page-count="pages"
                :click-handler="pageOn"
                :prev-text="'Назад'"
                :next-text="'Вперед'"
                :prev-class="'page-item'"
                :prev-link-class="'page-link'"
                :next-class="'page-item'"
                :next-link-class="'page-link'"
                :container-class="'pagination'"
                :page-class="'page-item'"
                :page-link-class="'page-link'"
        >
        </Paginate>
    </div>
</template>

<script>
import AddForm from "./AddForm";
import TableRow from "./TableRow";
    export default {
        name: "Table",
        components: {
            TableRow,
            AddForm
        },
        props: {
            users_data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data: () => {
            return {
                showUsers: 10,
                pageNumber: 1,
                sortFirstName: true,
                sortLastName: true,
                sortId: true
            }
        },
        computed: {
            pages() {
                return Math.ceil(this.users_data.length / this.showUsers)
            },
            paginationUsers() {
                let from = (this.pageNumber - 1) * this.showUsers;
                let to = from + this.showUsers
                return this.users_data.slice(from, to);
            }
        },
        methods: {
            pageOn(page) {
                this.pageNumber = page;
            },
            sortByFirstName() {
                if (this.sortFirstName) {
                    this.users_data.sort((a, b) => a.firstName.localeCompare(b.firstName))
                    this.sortFirstName = false
                } else {
                    this.users_data.sort((a, b) => b.firstName.localeCompare(a.firstName))
                    this.sortFirstName = true
                }
            },
            sortByLastName() {
                if (this.sortLastName) {
                    this.users_data.sort((a, b) => a.lastName.localeCompare(b.lastName))
                    this.sortLastName = false
                } else {
                    this.users_data.sort((a, b) => b.firstName.localeCompare(a.lastName))
                    this.sortLastName = true
                }
            },
            sortById() {
                if (this.sortId) {
                    this.users_data.sort((a, b) => a.id - b.id)
                    this.sortId = false
                } else {
                    this.users_data.sort((a, b) => b.id - a.id)
                    this.sortId = true
                }
            }
        }
    }
</script>

<style>
 .table thead tr th {
     cursor: pointer;
 }
 .pagination {
     justify-content: center;
 }
</style>