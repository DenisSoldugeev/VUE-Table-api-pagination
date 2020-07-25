<template>
    <div class="">
        <table class="table table-bordered table-striped">
            <thead class="thead-dark">
            <tr>
                <th scope="col">id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
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

import TableRow from "./TableRow";
    export default {
        name: "Table",
        components: {
            TableRow
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
                showUsers: 20,
                pageNumber: 1
            }
        },
        computed: {
            pages() {
                return  Math.ceil(this.users_data.length / this.showUsers)
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

            }
        }

    }
</script>

<style >
 .table {
     width: 1140px;
 }
 .pagination {
     justify-content: center;
 }

</style>